import Home from "./Components/Home";
import NavBar from "./Components/NavBar";

import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App w-full h-screen overflow-x-hidden" >
            <NavBar/>
            <Home/>
            <Projects/>
            <Contact/>
    </div>
  );
}

export default App;
