import React, { useState, useEffect } from "react";
import Customer from "./Components/Customer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto",
  },
  table: {
    minWidth: 1080,
  },
  progress: {
    margin: theme.spacing(2),
  },
});

function App(props) {
  const [Customers, setCustomers] = useState("");
  const [Completed, setCompleted] = useState(0);

  useEffect(() => {
    let completed = 0;
    let timer = setInterval(() => {
      completed >= 100 ? (completed = 0) : (completed += 1);
      setCompleted(completed);
    }, 20);
    callApi()
      .then((res) => {
        setCustomers(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const callApi = async () => {
    const response = await fetch("api/customers");
    const body = await response.json();
    return body;
  };

  const { classes } = props;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Customers ? (
            Customers.map((customer) => {
              return (
                <Customer
                  key={customer.id}
                  id={customer.id}
                  image={customer.image}
                  name={customer.name}
                  birthday={customer.birthday}
                  gender={customer.gender}
                  job={customer.job}
                />
              );
            })
          ) : (
            <TableRow>
              <TableCell colSpan='6' align='center'>
                <CircularProgress
                  className={classes.progress}
                  variant='determinate'
                  value={Completed}
                />
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(App);
