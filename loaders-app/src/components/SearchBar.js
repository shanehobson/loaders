import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/Textfield';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';

const SearchBar = () => {
    return (
        <div className='container'>
            <Grid container justify="flex-end">
                <Grid>
                    <TextField 
                        style={{padding: 24}}
                        id='searchInput'
                        placeholder='Search our gallery'   
                        margin='normal'
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position='start'>
                                <Search />
                            </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
            </Grid>
        </div>
    )
};

export default SearchBar;


