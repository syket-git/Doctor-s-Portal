import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

const columns = [
    { id: "name", label: "Name", minWidth: 120 },
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

const AppointmentList = () => {

    const [appointmentList, setAppointmentList] = useState([]);
    const [currentDate, setCurrentDate] = useState(new Date());
    const onChange = date => {
        setCurrentDate(date);
    }

    const date = (moment(currentDate).format('L'))
    const finalDate = Date.parse(date);


    useEffect(() => {
        fetch("http://localhost:4800/appointment-list", {
            method: "POST",
            body: JSON.stringify({ finalDate }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(res => res.json())
            .then(data => {
                setAppointmentList(data)
                console.log(data);
            })
    }, [finalDate])

    function createData(name, category, time, date) {
        return { name, category, time, date };
    }



    const rows = appointmentList.map(al => createData(al.name, al.category, al.time, al.finalDate));

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
                <h2 className="h2 text-center mt-5 mb-5">Please select date to see the <br /> appointment list</h2>
                <div className="row">
                    <div className="col-md-5">
                        <div>
                            <Calendar
                                onChange={onChange}
                                value={currentDate}
                            />
                        </div>
                    </div>
                    <div className="col-md-7">
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
        </div>
    );
};

export default AppointmentList;