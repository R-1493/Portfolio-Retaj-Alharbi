import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Contact from "./components/Contact";
import About from "./components/About";
import Project from "./components/Project";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Intro />
      <About />
      <Project />
      <Contact />
    </main>
  );
};

export default App;
