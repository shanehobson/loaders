import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';


const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: 20,
    marginRight: 20,
  },
  navLinks: {
    marginRight: 20,
  },
  navLink: {
      fontSize: 14,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

function NavBar(props) {
  const { classes } = props;
  return (
    <div>
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Hidden xsDown>
                        <Typography variant="display1" color="inherit" className={classes.flex}>
                            Website Icon
                        </Typography>
                    </Hidden>
                    <div className={classes.navLinks}>
                        <Button color="inherit" className={classes.navLink}>Home</Button>
                        <Button color="inherit" className={classes.navLink}>About</Button>
                        <Button color="inherit" className={classes.navLink}>Contact</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    </div>
  );
}

export default withStyles(styles)(NavBar);


