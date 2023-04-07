//import './App.css';
import Header from "./components/header/Header";
import Knowledge from "./components/knowledge/Knowledge.jsx"
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Proyects from "./components/proyects/Proyects";
import "./app.css"
function App() {
  return(
    <>
      <Header />
      <About />
      <Knowledge />
      <Proyects />
      <Contact />
    </>
    )
}

export default App;
