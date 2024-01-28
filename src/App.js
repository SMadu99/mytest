


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
import DentistDashboard from "./pages/Dentist/DentistDashboard";
import DentistPatients from "./pages/Dentist/PatientsRecords";
import DentistMessages from "./pages/Dentist/Messages";

function App() {

function MOH(){
  
 
      
}


function VOGDoctor(){
  <VOGSidebar>
  <Routes>
    <Route path="/vogdash" element={<VogDashboard />} />
    <Route path="/vogpatients" element={<VogPatients />} />
    <Route path="/vogmessages" element={<VogMessages />} />
  </Routes>
</VOGSidebar>

}

function MohDoctor(){
  <MohDoctorSidebar>
  <Routes>
    <Route path="/mohdoctordash" element={<MOHDoctorDashboard/>} />
    <Route path="/doctorpatients" element={<DoctorPatients/>} />
    <Route path="/doctormessages" element={<DoctorMessages />} />
  </Routes>
</MohDoctorSidebar>
}

function Dentistr(){
  <DentistSidebar>
  <Routes>
    <Route path="/dentistdash" element={<DentistDashboard />} />
    <Route path="/dentistpatients" element={<DentistPatients />} />
    <Route path="/dentistmessages" element={<DentistMessages />} />
  </Routes>
</DentistSidebar>
}

return (
  <BrowserRouter>
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
   
  </BrowserRouter>
  );
}

export default App;
