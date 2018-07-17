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

const NavBar = () => {
  return (
    <div>
        <div className='NavBar-navBar'>
            <AppBar position='static'>
                <Toolbar>
                    <Hidden xsDown>
                        <Typography variant='display1' color='inherit' className='NavBar-flex'>
                            Website Icon
                        </Typography>
                    </Hidden>
                    <div className='NavBar-navLinks'>
                        <Button color='inherit' className='NavBar-navLink'><Typography color='inherit' variant='headline'>Home</Typography></Button>
                        <Button color='inherit' className='NavBar-navLink'><Typography color='inherit' variant='headline'>About</Typography></Button>
                        <Button color='inherit' className='NavBar-navLink'><Typography color='inherit' variant='headline'>Contact</Typography></Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    </div>
  );
}

export default NavBar;



