import React from "react";
import "../../css/View.css";
import { NavLink } from "react-router-dom";
import {
  FaSearch,
  FaUserAlt,
  FaRegChartBar,
  
} from "react-icons/fa";

function View() {
  return (
    <div>
      <div className="main-title">
        <h3>View Users Details</h3>
      </div>

      <div className="main-cards">
      <NavLink to="/register" className="card">
          <div className="card-inner">
            <h3>Mid Wife</h3>
            <div>
              <FaUserAlt />
            </div>
          </div>
        </NavLink>

        <NavLink to="/register" className="card">
          <div className="card-inner">
            <h3>MOH Doctor</h3>
            <div>
              <FaUserAlt />
            </div>
          </div>
        </NavLink>

        <NavLink to="/view" className="card">
          <div className="card-inner">
            <h3>VOG Doctor</h3>
            <div>
             <FaSearch />
            </div>
          </div>
        </NavLink>

        <NavLink to="/summary" className="card">
          <div className="card-inner">
            <h3>Dentist</h3>
            <div>
              <FaRegChartBar />
            </div>
          </div>
        </NavLink>

        
      </div>
      
    </div>
  );
}

export default View