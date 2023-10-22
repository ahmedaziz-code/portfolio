import Navbar from "./components/nav-bar/navbar";
import Intro from "./components/intro/intro";
import Skills from './components/skills/skills';
import Works from './components/works/works';
import Contact from "./components/contact/contact";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Intro></Intro>
      <Skills></Skills>
      <Works></Works>
      <Contact/>
    </div>
  );
}

export default App;
