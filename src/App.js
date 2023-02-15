import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
//import NavMenu from "./components/navMenu";
import NotFound from "./pages/404";
import About from "./pages/about";
import Home from "./pages/home";


function App() {
  return (
    <div id="ap" className="mh-100">
     
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<About/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
