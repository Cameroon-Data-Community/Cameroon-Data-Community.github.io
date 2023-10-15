import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
//import NavMenu from "./components/navMenu";
import NotFound from "./pages/404";
import About from "./pages/about";
import Events from "./pages/events";
import Home from "./pages/home";
import Anniversary from "./pages/anniversary";
import Ribbon from "./components/ribbon";



function App() {
  return (
    <div id="ap" className="mh-100">
     {/* <Ribbon/> */}
      <Routes>
        {/*<Route path="/" element={<Home/>}/>*/}
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<About/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/anniversary" element={<Anniversary/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
