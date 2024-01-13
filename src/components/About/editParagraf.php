<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Content-Type: application/json");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "website";

// Membuat koneksi ke database
$conn = new mysqli($servername, $username, $password, $dbname);

// Memeriksa koneksi
if ($conn->connect_error) {
    die("Koneksi ke database gagal: " . $conn->connect_error);
}

// Fungsi untuk mendapatkan teks dari database
function getTextFromDatabase($conn) {
    $sql = "SELECT deskripsi FROM users"; 
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        return $row['deskripsi'];
    } else {
        return "";
    }
}

// Mendapatkan data teks baru dari permintaan POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents('php://input'));

    // Memeriksa apakah ada permintaan untuk edit teks
    if (isset($data->newText)) {
        $newText = $conn->real_escape_string($data->newText);

        // Memperbarui teks di database
        $sql = "UPDATE users SET deskripsi = ? WHERE id = 1"; 
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $newText);

        if ($stmt->execute()) {
            $response = array("status" => "success", "message" => "Teks berhasil diperbarui");
            echo json_encode($response);
        } else {
            $response = array("status" => "error", "message" => "Error: " . $conn->error);
            echo json_encode($response);
        }

        $stmt->close();
    } else {
        // Jika tidak ada permintaan untuk edit, kirim teks yang ada di database
        $textFromDatabase = getTextFromDatabase($conn);
        $response = array("status" => "success", "text" => $textFromDatabase);
        echo json_encode($response);
    }

    $sql = "SELECT deskripsi FROM users"; 
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $data = array();
        while ($row = $result->fetch_assoc()) {
            $data[] = $row['deskripsi'];
        }
        $response = array("status" => "success", "texts" => $data);
        return json_encode($response); // Return data in JSON format
    } else {
        $response = array("status" => "error", "message" => "No data found");
        return json_encode($response); // Return error message in JSON format if no data found
    }
}

// Mendapatkan data teks baru dari permintaan POST
$data = json_decode(file_get_contents('php://input'));

// Memeriksa apakah ada permintaan untuk edit teks
if (isset($data->newText)) {
    $newText = $conn->real_escape_string($data->newText);

    // Memperbarui teks di database
    $sql = "UPDATE users SET deskripsi = '$newText' WHERE id = 1"; 

    if ($conn->query($sql) === TRUE) {
        $response = array("status" => "success", "message" => "Teks berhasil diperbarui");
        echo json_encode($response);
    } else {
        $response = array("status" => "error", "message" => "Error: " . $sql . "<br>" . $conn->error);
        echo json_encode($response);
    }
} else {
    // Jika tidak ada permintaan untuk edit, kirim teks yang ada di database
    $textFromDatabase = getTextFromDatabase($conn);
    $response = array("status" => "success", "text" => $textFromDatabase);
    echo json_encode($response);
}

// Menutup koneksi ke database
$conn->close();
?>
