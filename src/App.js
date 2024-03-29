/*
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/MOHAdmin/Dashboard";
import Register from "./pages/MOHAdmin/Register";
import View from "./pages/MOHAdmin/View";
import Summary from "./pages/MOHAdmin/Summary";
import MOHSidebar from "./componenets/MOHSidebar";
import Messages from "./pages/MOHAdmin/Messages";
import Clinic from "./pages/MOHAdmin/Clinic";
import MohDoctorSidebar from "./componenets/MohDoctorSidebar";
import DentistSidebar from "./componenets/DentistSidebar";
import VOGSidebar from "./componenets/VOGSidebar";
import MOHDoctorDashboard from "./pages/MOHDoctor/MOHDoctorDashboard";
import DoctorPatients from "./pages/MOHDoctor/ViewPatientHistory";
import DoctorMessages from "./pages/MOHDoctor/Messages";
import VogMessages from "./pages/VOGDoctor/Messages";
import VogPatients from "./pages/VOGDoctor/PatientHistory";
import VogDashboard from "./pages/VOGDoctor/VogDashboard";
import VogPersonal from "./pages/VOGDoctor/Personal";
import DentistDashboard from "./pages/Dentist/DentistDashboard";
import DentistPatients from "./pages/Dentist/PatientsRecords";
import DentistMessages from "./pages/Dentist/Messages";
import Login from "./pages/Login/Login";

function App() {
  function MOH() {
    <MOHSidebar>
    <Routes>
      <Route path="/mohadmindash" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />
      <Route path="/view" element={<View />} />
      <Route path="/summary" element={<Summary />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/clinic" element={<Clinic />} />
    </Routes>
  </MOHSidebar>
  }

  function VOGDoctor() {
    <VOGSidebar>
      <Routes>
        <Route path="/vogdash" element={<VogDashboard />} />
        <Route path="/vogpatients" element={<VogPatients />} />
        <Route path="/vogmessages" element={<VogMessages />} />
      </Routes>
    </VOGSidebar>;
  }

  function MohDoctor() {
    <MohDoctorSidebar>
      <Routes>
        <Route path="/mohdoctordash" element={<MOHDoctorDashboard />} />
        <Route path="/doctorpatients" element={<DoctorPatients />} />
        <Route path="/doctormessages" element={<DoctorMessages />} />
      </Routes>
    </MohDoctorSidebar>;
  }

  function Dentist() {
    <DentistSidebar>
      <Routes>
        <Route path="/dentistdash" element={<DentistDashboard />} />
        <Route path="/dentistpatients" element={<DentistPatients />} />
        <Route path="/dentistmessages" element={<DentistMessages />} />
      </Routes>
    </DentistSidebar>;
  }

  return (
    <BrowserRouter>
       <Login/>
       <MOHSidebar>
    <Routes>
      <Route path="/mohadmindash" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />
      <Route path="/view" element={<View />} />
      <Route path="/summary" element={<Summary />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/clinic" element={<Clinic />} />
    </Routes>
  </MOHSidebar>

  <VOGSidebar>
      <Routes>
        <Route path="/vogdash" element={<VogDashboard />} />
        <Route path="/vogpatients" element={<VogPatients />} />
        <Route path="/vogmessages" element={<VogMessages />} />
      </Routes>
    </VOGSidebar>;
    </BrowserRouter>
  );
}

export default App;
*/

import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/MOHAdmin/Dashboard";
import Register from "./pages/MOHAdmin/Register";
import View from "./pages/MOHAdmin/View";
import Summary from "./pages/MOHAdmin/Summary";
import MOHSidebar from "./componenets/MOHSidebar";
import Messages from "./pages/MOHAdmin/Messages";
import Clinic from "./pages/MOHAdmin/Clinic";
import MohDoctorSidebar from "./componenets/MohDoctorSidebar";
import DentistSidebar from "./componenets/DentistSidebar";
import VOGSidebar from "./componenets/VOGSidebar";
import MOHDoctorDashboard from "./pages/MOHDoctor/MOHDoctorDashboard";
import DoctorPatients from "./pages/MOHDoctor/ViewPatientHistory";
import DoctorMessages from "./pages/MOHDoctor/Messages";
import VogMessages from "./pages/VOGDoctor/Messages";
import VogPatients from "./pages/VOGDoctor/PatientHistory";
import VogDashboard from "./pages/VOGDoctor/VogDashboard";
import VogPersonal from "./pages/VOGDoctor/Personal";
import DentistDashboard from "./pages/Dentist/DentistDashboard";
import DentistPatients from "./pages/Dentist/PatientsRecords";
import DentistMessages from "./pages/Dentist/Messages";
import Login from "./pages/Login/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status
  const [userRole, setUserRole] = useState(""); // State to manage user role

  // Function to handle login
  const handleLogin = (role) => {
    setUserRole(role);
    setIsLoggedIn(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole("");
  };

  return (
    <BrowserRouter>
      <Login onLogin={handleLogin} />
      {isLoggedIn && (
        <>
          {userRole === "admin" && (
            <MOHSidebar>
              <Routes>
                <Route path="/mohadmindash" element={<Dashboard />} />
                <Route path="/register" element={<Register />} />
                <Route path="/view" element={<View />} />
                <Route path="/summary" element={<Summary />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/clinic" element={<Clinic />} />
              </Routes>
            </MOHSidebar>
          )}
          {userRole === "vog" && (
            <VOGSidebar>
              <Routes>
                <Route path="/vogdash" element={<VogDashboard />} />
                <Route path="/vogpatients" element={<VogPatients />} />
                <Route path="/vogmessages" element={<VogMessages />} />
              </Routes>
            </VOGSidebar>
          )}
          {userRole === "mohdoctor" && (
            <MohDoctorSidebar>
              <Routes>
                <Route path="/mohdoctordash" element={<MOHDoctorDashboard />} />
                <Route path="/doctorpatients" element={<DoctorPatients />} />
                <Route path="/doctormessages" element={<DoctorMessages />} />
              </Routes>
            </MohDoctorSidebar>
          )}
          {userRole === "dentist" && (
            <DentistSidebar>
              <Routes>
                <Route path="/dentistdash" element={<DentistDashboard />} />
                <Route path="/dentistpatients" element={<DentistPatients />} />
                <Route path="/dentistmessages" element={<DentistMessages />} />
              </Routes>
            </DentistSidebar>
          )}
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
