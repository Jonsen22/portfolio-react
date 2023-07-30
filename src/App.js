import Navbar from "./Navbar";
import Home from "./pages/Home";
import About from "./pages/About"


function App() {
  return (
    
    <main id="home">
      <Navbar />
      <Home/>
      <About/>
        
      <section className="projects" id="projects">
        <h1>projects</h1>
      </section>
      <section className="contact" id="contact">
        <h1>contact</h1>
      </section>
      <section className="footer"></section>
    </main>
  );
}

export default App;
