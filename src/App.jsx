import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Contact from "./components/Contact";
import About from "./components/About";
import Project from "./components/Project";
import Scene from "./components/Scene";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      {/* <Scene /> */}
      <Intro />
      <About />
      <Project />
      <Contact />
    </main>
  );
};

export default App;
