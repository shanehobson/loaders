import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const Header = () => (
    <div className='Header-headerContainer'>
        <Grid container direction='column' justify='space-around' alignItems='center' className='Header-gridContainer'>
            <Grid item>
                <div className='Header-titleContainer'>
                    <Typography variant='display4' color='primary'>
                        <span className='Header-headerSpan'>LoaderGallery</span><span className='Header-headerTitle'>.com</span>
                    </Typography>
                </div>
            </Grid>
            <Grid item className='Header-headerSubtitle'>
                <Typography variant='display1' color='inherit'>
                    We provide free and open source loading animations to help developers create a compelling user experience.
                </Typography>
            </Grid>
        </Grid>
    </div>
  );
  
export default Header;