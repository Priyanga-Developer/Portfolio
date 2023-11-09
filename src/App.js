import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import About from "./Components/About"
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App w-full h-screen" >
            <NavBar/>
            <Home/>
            <About/>
            <Projects/>
            <Contact/>
    </div>
  );
}

export default App;
