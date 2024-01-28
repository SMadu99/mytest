
import React, { useState } from 'react';
import { Container, Typography, Grid, Paper, Button } from '@mui/material';
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import AdapterDateFns from '@mui/lab/AdapterDateFns';

const Clinic = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [scheduledDates, setScheduledDates] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleScheduleClinic = () => {
    if (selectedDate) {
      // Add the selected date to the scheduledDates array
      setScheduledDates([...scheduledDates, selectedDate.toISOString()]);
    }
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Clinic Scheduling App
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Schedule Clinic
            </Typography>



            


            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                value={selectedDate}
                onChange={handleDateChange}
                renderInput={(props) => <input {...props} />}
                label="Select Date"
              />
            </DemoContainer>
          </LocalizationProvider>





            <Button variant="contained" color="primary" onClick={handleScheduleClinic}>
              Schedule
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3} style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>
              Scheduled Dates
            </Typography>
            <ul>
              {scheduledDates.map((date) => (
                <li key={date}>{new Date(date).toLocaleDateString()}</li>
              ))}
            </ul>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Clinic;
