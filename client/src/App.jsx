import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <AboutMe />
      <Projects />
      <ContactMe />
      <div style={{ marginTop: "100px" }}>
        {" "}
        <Footer />
      </div>
    </>
  );
}

export default App;
