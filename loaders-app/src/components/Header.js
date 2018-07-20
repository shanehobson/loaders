import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const Header = () => (
    <div className='Header-headerContainer'>
        <Grid container direction='column' justify='space-around' alignItems='center' className='Header-gridContainer'>
            <Grid item>
                <Typography variant='display4' color='primary'>
                    <span className='Header-headerSpan'>LoaderGallery</span><span className='Header-headerTitle'>.com</span>
                </Typography>
            </Grid>
            <Grid item className='Header-headerSubtitle'>
                <Typography variant='display1' color='inherit'>
                    Visually engaging loading animations designed to create a compelling user experience.
                </Typography>
            </Grid>
        </Grid>
    </div>
  );
  
export default Header;