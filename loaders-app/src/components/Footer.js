import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const Footer = () => (
    <div>
        <AppBar position='static'  className='Footer-footerContainer'>
            <Toolbar>
                <Grid container justify='center' alignContent='center'>
                    <Grid item>
                        <Typography variant='title' className='Footer-footerText'>
                            &copy; Copyright 2018 LoaderGallery.com
                        </Typography>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    </div>
  );
  
export default Footer;