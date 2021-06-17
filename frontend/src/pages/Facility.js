import React from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import EvStationIcon from '@material-ui/icons/EvStation';
import ColorizeIcon from '@material-ui/icons/Colorize';
import AirlineSeatIndividualSuiteIcon from '@material-ui/icons/AirlineSeatIndividualSuite';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [hospital, setHospital] = React.useState([]);

  axios.get('')
  .then((res)=>{
      setHospital(res.data);
  })
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    { hospital.map((user,index)=>(
    <div key = {index}>
     <Typography variant="h4" className={classes.title}>
     {user.hospitalName}
     {user.Address}
     </Typography>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Find
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <AirlineSeatIndividualSuiteIcon />
            <ListItemText primary="Beds" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem button>
            <EvStationIcon/>
            <ListItemText primary="Oxygen" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ColorizeIcon />
            <ListItemText primary="Vaccination" secondary="Tethys" />
          </ListItem>
        </List>
      </Dialog>
    </div>
    ))}
  );
}