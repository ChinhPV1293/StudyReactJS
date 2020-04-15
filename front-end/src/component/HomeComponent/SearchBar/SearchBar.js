import React from 'react';
import { CssBaseline, Button, TextField, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles( (theme) =>({
    root : {
        flexFlow : 1,
    },
    button : {
        margin: theme.spacing(1),
    },
    textField :{    
        marginLeft: theme.spacing(1),
    }
}));

const SearchBar = props =>{
    const classes = useStyles();
    return (
        // <div>
        //     <input type="text"
        //         placeholder="Search"
        //         value={props.value}
        //         onChange={props.onChange}
        //     />
        //     <button onClick={props.onSearch}>Search</button>
        // </div>
        <React.Fragment className={classes.root} >
            <CssBaseline />
            <Grid container maxWidth="xs">
                <Grid item xs={10}>
                    <TextField 
                    fullWidth
                    className={classes.textField}
                    id="standard-basic" 
                    label="Search" 
                    value={props.value}
                    onChange={props.onChange}
                    />
                </Grid>
                <Grid item xs={2}>
                    <Button
                        className={classes.button}
                        variant="contained"
                        size="medium"
                        color="primary"
                        onClick={props.onSearch}
                    >Search
                    </Button>
                </Grid>
                    
            </Grid>
        </React.Fragment>

    );
}

export default SearchBar;