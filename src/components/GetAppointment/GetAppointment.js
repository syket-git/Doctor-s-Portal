import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './GetAppointment.css';
import img from '../../images/image.png';
import moment from 'moment';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { TextField } from "@material-ui/core";

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions);

const GetAppointment = () => {

  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState({})
  const [time, setTime] = React.useState({})

  const handleClickOpen = (name, time) => {
    setOpen(true);
    setName({name});
    setTime({time});
  };
  const handleClose = () => {
    setOpen(false);
  };



  const [currentDate, setCurrentDate] = useState(new Date());
  const onChange = date => {
    setCurrentDate(date);
  }

  const minDate = new Date();


  console.log(currentDate);

  return (
    <div className="background-color">

      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="margin-top">
              <h2 className="h2">Appointment</h2>
              <Calendar
                minDate={minDate}
                onChange={onChange}
                value={currentDate}
              />
            </div>
          </div>
          <div className="col-md-7">
            <div className="margin-top">
              <img className="img-fluid" src={img} alt="" />
            </div>
          </div>
        </div>

        <h2 className="h2 text-center mt-5 mb-5" style={{ color: '#24c39e', margin: "0 auto" }}>Available Appointment on {moment(currentDate.toString()).format("MMMM Do, YYYY")} </h2>

        <div className="row">

          <div className="col-md-4">
            <Card style={{ width: '21rem' }}>
              <Card.Body>
                <Card.Title><h3 className="text-center font-weight-bold color">Teeth Orthodontics</h3></Card.Title>
                <Card.Text>
                  <h4 className="text-center font-weight-bold">8:00 AM - 9:00 AM</h4>
                  <p style={{ fontSize: '12px' }} className="text-uppercase text-secondary text-center">10 space available</p>
                </Card.Text>
                <div className="text-center">
                  <button className="btn button" onClick={() => handleClickOpen("Teeth Orthodontics", "8:00 AM - 9:00 AM")}>Book Appointment</button>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card style={{ width: '21rem' }}>
              <Card.Body>
                <Card.Title><h3 className="text-center font-weight-bold color">Cosmetic Dentistry</h3></Card.Title>
                <Card.Text>
                  <h4 className="text-center font-weight-bold">10:05 AM - 11:30 AM</h4>
                  <p style={{ fontSize: '12px' }} className="text-uppercase text-secondary text-center">10 space available</p>
                </Card.Text>
                <div className="text-center">
                <button className="btn button" onClick={() => handleClickOpen("Cosmetic Dentistry", "10:05 AM - 11:30 AM")}>Book Appointment</button>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card style={{ width: '21rem' }}>
              <Card.Body>
                <Card.Title><h3 className="text-center font-weight-bold color">Teeth Cleaning</h3></Card.Title>
                <Card.Text>
                  <h4 className="text-center font-weight-bold">5:00 PM - 6:30 PM</h4>
                  <p style={{ fontSize: '12px' }} className="text-uppercase text-secondary text-center">10 space available</p>
                </Card.Text>
                <div className="text-center">
                <button className="btn button" onClick={() => handleClickOpen("Teeth Cleaning", "5:00 PM - 6:30 PM")}>Book Appointment</button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>

        <div className="row mt-5">

          <div className="col-md-4">
            <Card style={{ width: '21rem' }}>
              <Card.Body>
                <Card.Title><h3 className="text-center font-weight-bold color">Cavity Protection</h3></Card.Title>
                <Card.Text>
                  <h4 className="text-center font-weight-bold">7:00 AM - 8:30 AM</h4>
                  <p style={{ fontSize: '12px' }} className="text-uppercase text-secondary text-center">10 space available</p>
                </Card.Text>
                <div className="text-center">
                <button className="btn button" onClick={() => handleClickOpen("Cavity Protection", "7:00 AM - 8:30 AM")}>Book Appointment</button>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card style={{ width: '21rem' }}>
              <Card.Body>
                <Card.Title><h3 className="text-center font-weight-bold color">Teeth Checkup</h3></Card.Title>
                <Card.Text>
                  <h4 className="text-center font-weight-bold">12:00 PM - 1:30 PM</h4>
                  <p style={{ fontSize: '12px' }} className="text-uppercase text-secondary text-center">10 space available</p>
                </Card.Text>
                <div className="text-center">
                <button className="btn button" onClick={() => handleClickOpen("Teeth Checkup", "12:00 PM - 1:30 PM")}>Book Appointment</button>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card style={{ width: '21rem' }}>
              <Card.Body>
                <Card.Title><h3 className="text-center font-weight-bold color">Teeth Orthodontics</h3></Card.Title>
                <Card.Text>
                  <h4 className="text-center font-weight-bold">3:00 PM - 5:00 PM</h4>
                  <p style={{ fontSize: '12px' }} className="text-uppercase text-secondary text-center">10 space available</p>
                </Card.Text>
                <div className="text-center">
                  <button className="btn button" onClick={() => handleClickOpen("Teeth Orthodontics", "3:00 PM - 5:00 PM")}>Book Appointment</button>
                </div>
              </Card.Body>
            </Card>
          </div>
          <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
              {name.name}
            </DialogTitle>
            <DialogContent dividers>
            <TextField style={{width:'450px'}} value={name.name} id="standard-basic" label="Treatment Category" />
            
            <TextField style={{width:'450px'}} value={time.time} id="standard-basic" label="Time" />

            <TextField style={{width:'450px'}} autoFocus required id="standard-basic" label="Your Name" />

            <TextField style={{width:'450px'}} required id="standard-basic" label="Phone Number" />

            <TextField style={{width:'450px'}} required id="standard-basic" label="Email Address" />

            <TextField style={{width:'450px'}} value={moment(currentDate.toString()).format('L')} id="standard-basic" label="Appointment Date" />
            </DialogContent>
            <DialogActions>
              <div className="m-auto">
                <button className="btn button" onClick={handleClose}>Send</button>
              </div>
            </DialogActions>
          </Dialog>
        </div>
      </div>





    </div>
  );
};

export default GetAppointment;