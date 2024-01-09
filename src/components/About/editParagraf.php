<?php
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

// Menerima data teks baru dari permintaan POST
$data = json_decode(file_get_contents('php://input'));

if(isset($data->newText)) {
    $newText = $conn->real_escape_string($data->newText);

    // Contoh query untuk mengubah teks paragraf dalam tabel
    $sql = "UPDATE users SET deskripsi = '$newText' WHERE id = 1"; // Ubah id dan nama_tabel sesuai kebutuhan

    if ($conn->query($sql) === TRUE) {
        // Jika query berhasil dieksekusi
        $response = array("status" => "success", "message" => "Teks berhasil diperbarui");
        echo json_encode($response);
    } else {
        // Jika terjadi kesalahan dalam query
        $response = array("status" => "error", "message" => "Error: " . $sql . "<br>" . $conn->error);
        echo json_encode($response);
    }
} else {
    // Jika tidak ada data newText yang diterima
    $response = array("status" => "error", "message" => "Tidak ada data newText yang diterima");
    echo json_encode($response);
}

// Menutup koneksi ke database
$conn->close();
?>
