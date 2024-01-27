import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '100px',  // Set the desired height
  marginTop: '20px',
}));

function Summary() {
  return (
    <div>
      <div>Shanilka</div>
      <div>
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={4}>
          <Item>
            <div>Register</div>
            <div>Shanilka</div>
            
            </Item>
        </Grid>
        <Grid xs={4}>
          <Item>2</Item>
        </Grid>
        <Grid xs={4}>
          <Item>3</Item>
        </Grid>
        <Grid xs={4}>
          <Item>4</Item>
        </Grid>
        <Grid xs={4}>
          <Item>5</Item>
        </Grid>
        <Grid xs={4}>
          <Item>6</Item>
        </Grid>
       
        
      </Grid>
    </Box>
    </div>
    </div>
  );
}

export default Summary;