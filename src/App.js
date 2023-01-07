import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles.css";
import Home from "./component/Home";
import About from "./component/About";
import NavBar from "./component/NavBar";
import Contact from "./component/Contact";
import Page404 from "./component/Page";
import Mernstack from "./component/Mernstack";
import Python from "./component/Python";
import Java from "./component/Java";
import Aws from "./component/Aws";
import Head from "./component/Head";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="heading">
          <h1>
            <span>Brain</span>works{" "}
          </h1>
          <h3>Business Solutions Pvt.ltd</h3>
        </div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/" element={<About />}>
            <Route path="mernstack" element={<Mernstack />} />
            <Route path="python" element={<Python />} />
            <Route path="aws" element={<Aws />} />
            <Route path="java" element={<Java />} />
          </Route>
          <Route path="/head/:name/:lname/:info" element={<Head />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Page404 />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
