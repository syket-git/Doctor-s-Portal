import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import moment from 'moment';


const columns = [
    { id: "name", label: "Name", minWidth: 100 },
    {
        id: "id",
        label: "Appointment Id",
        minWidth: 80,
        format: value =>value.toLocaleString("en-US")
    }, 
    { id: "category", label: "Category", minWidth: 100 },
    {
        id: "time",
        label: "Time",
        minWidth: 80,
        format: value => value.toLocaleString("en-US")
    },
    
    {
        id: "date",
        label: "Date",
        minWidth: 80,
        format: value => moment(value).format('L')
    },
    {
        id: "number",
        label: "Mobile Number",
        minWidth: 80,
        format: value => value.toLocaleString("en-US")
    }, 
    
    {
        id: "status",
        label: "Status",
        minWidth: 80,
        format: value => <button className="btn btn-success">Pending</button>
    }
];

const useStyles = makeStyles({
    root: {
        width: "100%"
    },
    container: {
        maxHeight: 440
    }
});




const Dashboard = () => {
    const [allData, setAllData] = useState([]);

    fetch("https://boiling-sierra-25674.herokuapp.com/all-appointments")
    .then(res => res.json())
    .then(data => {
        setAllData(data);

    })


    function createData(name, id, category, time, date, number, status) {
        return { name, id, category, time, date, number, status };
    }
    const button = <button className="btn btn-success">Pending</button>

    const rows = allData && allData.map(dt => createData(dt.name, dt._id, dt.category, dt.time, dt.finalDate, dt.number, button));
    

    console.log(rows);

    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };





    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-4">
                        <div class="dash-card one">
                            <h3>{allData.length} Total Appointment</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="dash-card two">
                            <h3>0 Finished Appointment</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="dash-card three">
                            <h3>{allData.length} Pending Appointment</h3>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                <Paper className={classes.root}>
                            <TableContainer className={classes.container}>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>
                                            {columns.map(column => (
                                                <TableCell
                                                    key={column.id}
                                                    align={column.align}
                                                    style={{ minWidth: column.minWidth }}
                                                >
                                                    {column.label}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows
                                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                            .map(row => {
                                                return (
                                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                        {columns.map(column => {
                                                            const value = row[column.id];
                                                            return (
                                                                <TableCell key={column.id} align={column.align}>
                                                                    {column.format && typeof value === "number"
                                                                        ? column.format(value)
                                                                        : value}
                                                                </TableCell>
                                                            );
                                                        })}
                                                    </TableRow>
                                                );
                                            })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <TablePagination
                                rowsPerPageOptions={[10, 25, 100]}
                                component="div"
                                count={rows.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onChangePage={handleChangePage}
                                onChangeRowsPerPage={handleChangeRowsPerPage}
                            />
                        </Paper>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;