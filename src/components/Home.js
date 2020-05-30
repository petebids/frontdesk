import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Appointments from './Appointments'
import PatientSearch from './PatientSearch'

export default function SimpleContainer() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <PatientSearch />
       {/*   <Appointments/> */}
        </Container>
      </React.Fragment>
    );
  }
