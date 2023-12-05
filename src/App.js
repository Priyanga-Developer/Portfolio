import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
// import About from "./Components/About"
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import TechStack from "./Components/TechStack";

function App() {
  return (
    <div className="App w-full overflow-hidden " >
            <NavBar/>
            <Home/>
            <TechStack/>
            <Projects/>
            <Contact/>
    </div>
  );
}

export default App;
