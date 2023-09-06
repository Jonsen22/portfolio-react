import Navbar from "./Navbar";
import Home from "./pages/Home";
import About from "./pages/About"
import React , {useState, useEffect} from "react";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  
    useEffect(() => {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };  
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return windowSize;
  };

  const size = useWindowSize();
  
  return (
    
    <main id="home">
      <Navbar />
      <Home size={size}/>
      <About size={size}/>
      <Projects size={size}/>    
      <Contact size = {size}/>
      <section className="footer"></section>
    </main>
  );
}

export default App;
