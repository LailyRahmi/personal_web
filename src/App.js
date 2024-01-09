import "./App.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Hero } from "./components/Hero/Hero";
import { Hobby } from "./components/Hobby/Hobby";
import { Navbar } from "./components/Navbar/Navbar";
import { Skill } from "./components/Skill/Skill";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Hobby />
      <Contact />
    </div>
  );
}

export default App;
