import logo from "./logo.svg";
import "./css/MOHSidebar.css";
import { useState } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Dashboard from "./pages/MOHAdmin/Dashboard";
import Register from "./pages/MOHAdmin/Register";
import View from "./pages/MOHAdmin/View";
import Summary from "./pages/MOHAdmin/Summary";
import MOHSidebar from "./componenets/MOHSidebar";
import Messages from "./pages/MOHAdmin/Messages";

import Clinic from "./pages/MOHAdmin/Clinic";

function App() {
  
  return (
    <BrowserRouter>
    <MOHSidebar>
    <Routes>
      
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/view" element={<View/>}/>
      <Route path="/summary" element={<Summary/>}/>
      <Route path="/messages" element={<Messages/>}/>
      <Route path="/clinic" element={<Clinic/>}/>

    </Routes>
    </MOHSidebar>
    </BrowserRouter>
  );
}

export default App;
