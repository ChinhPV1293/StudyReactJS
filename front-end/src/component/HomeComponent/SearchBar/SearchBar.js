import React from 'react';
import { CssBaseline, Paper, TextField, Grid, makeStyles, InputBase  } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles( (theme) =>({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
      },
      input: {
        marginLeft: theme.spacing(1),
        flex: 1,
      },
      iconButton: {
        padding: 10,
      },
    button : {
        margin: theme.spacing(1),
    },
    textField :{    
        marginLeft: theme.spacing(1),
    },
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
        <React.Fragment >
            <CssBaseline />
            <Grid container maxWidth="xs">
                <Paper component="form"  className={classes.root}>
                    <InputBase
                        value={props.value}
                        onChange={props.onChange}
                        className={classes.input}
                        placeholder="Search"
                        inputProps={{
                            'aria-label': 'search '
                        }}
                    />
                    <IconButton
                        type="submit"
                        className={classes.iconButton}
                        aria-label="search"
                        // onClick={props.onSearch}
                        >
                        <SearchIcon />
                    </IconButton>
                </Paper>
                

            </Grid>
        </React.Fragment>

    );
}

export default SearchBar;