import React , { useState, useEffect, useCallback, isLoading, setIsLoading } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    root: {
        '& > *': {
          margin: theme.spacing(1),
        },
      },
  }));

export default function PatientSearch() {
    const [page, setPage] = useState(1);
    const [patientSearchResult, setpatientSearchResult] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const classes = useStyles();

    const patientSearch = useCallback(async() =>{
        if(isLoading) return
        setIsLoading(true)
        await fetch(
            `http://localhost:8080/api/patients?firstName=Peter`,
            {
                method: "GET",
                headers: new Headers({
                  
                })
              }
            )
            .then(res => res.json())
            .then(response =>{
                console.log(response)
                setpatientSearchResult(response);
                setIsLoading(false);
            })
            .catch(error => console.log(error));
        }, []);

  return (
    <Container component="main" maxWidth="md">

        <form className={classes.root} noValidate autoComplete="off">
        <Typography component="h1" variant="h5">
          Patient Search
        </Typography>
        <TextField
            id="date"
            label="D.O.B"
            type="date"
            defaultValue="1900-01-01"
            className={classes.textField}
            InputLabelProps={{
            shrink: true,}}/>
        <TextField id="standard-basic" label="First Name" />
        <TextField id="standard-basic"label="Middle Name" />
        <TextField id="standard-basic"label="Last Name"  />

        </form>
        <div className={classes.root}>
        <Button
            type="submit"
            onClick={patientSearch}
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Search
          </Button>

          <Button
            type="submit"
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            clear
          </Button>
          </div>
          <div>
          <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Middle Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {patientSearchResult.map(row => (
            <TableRow >
              <TableCell align="right">{row.firstName}</TableCell>
              <TableCell align="right">{row.middleName}</TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

          </div>
        </Container>

          
       
  );
}
