/*
import "../../css/MOHDashboard.css";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import SummarizeIcon from '@mui/icons-material/Summarize';
import { NavLink } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "100px", // Set the desired height
  marginTop: "20px",
  marginLeft: "100px",
  marginRight: "20px",
}));

function Dashboard() {
  return (
    <div>
      <div>Shanilka</div>
      <div>
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid xs={4}>
              <NavLink to="/register">
                <Item className="card-1">
                  <div>
                    <h1>Register Users</h1>
                  </div>
                </Item>
              </NavLink>
            </Grid>
            <Grid xs={4}>
              <NavLink to="/view">
                <Item className="card-2">
                  <div>
                    <h1>View User Details</h1>
                  </div>
                </Item>
              </NavLink>
            </Grid>
            <Grid xs={4}>
              <NavLink to="/summary">
                <Item className="card-3">
                  <div>
                    <h1>Summary Report</h1>
                    <div className="icon"><SummarizeIcon/></div>
                  </div>
                  
                </Item>
              </NavLink>
            </Grid>
            <Grid xs={4}>
              <NavLink to="/clinic">
                <Item className="card-4">
                  <div>
                    <h1>Clinic Schedule</h1>
                  </div>
                </Item>
              </NavLink>
            </Grid>

            <Grid xs={4}>
              <NavLink to="/messages">
                <Item className="card-5">
                  <div>
                    <h1>Messages</h1>
                  </div>
                </Item>
              </NavLink>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default Dashboard;
*/

import React from "react";
import "../../css/MOHDashboard.css";
import { NavLink } from "react-router-dom";
import {
    FaSearch,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaUsers
}from "react-icons/fa";

function MOHDashboard() {
  return (
    <div>
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <NavLink to="/register" className="card">
          <div className="card-inner">
            <h3>Register Users</h3>
           <div> <FaUserAlt/></div>
          </div>
        </NavLink>

        <NavLink to="/view" className="card">
          <div className="card-inner">
            <h3>View Users</h3>
            <div> <FaSearch/></div>
          </div>
        </NavLink>

        <NavLink to="/summary" className="card">
          <div className="card-inner">
            <h3>Summary Report</h3>
            <div> <FaRegChartBar/></div>
          </div>
        </NavLink>

        <NavLink to="/clinic" className="card">
          <div className="card-inner">
            <h3>Clinic Schedule</h3>
            <div> <FaUsers/></div>
          </div>
        </NavLink>

        <NavLink to="/messages" className="card">
          <div className="card-inner">
            <h3>Messages</h3>
            <div> <FaCommentAlt/></div>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default MOHDashboard;
