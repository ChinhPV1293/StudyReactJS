import React from 'react';
import {Link} from 'react-router-dom'
import { makeStyles,withStyles } from '@material-ui/core/styles';
import {
    Avatar,
    Button,
    Box,
    CssBaseline,
    TextField,
    Grid,
    FormControlLabel,
    Checkbox,
    Paper,
    Typography
} from '@material-ui/core';
import LockOpenIcon from '@material-ui/icons/LockOpen';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="https://material-ui.com/">
            RelaMa Page
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
    );
}    
const StyledButton = withStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 38,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);
const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
      },
    image: {
        backgroundImage: 'url(https://images.unsplash.com/photo-1584556145883-aee8da76ca9e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
          theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },
    paper: {
        marginTop: theme.spacing(6),
        padding: theme.spacing(5),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
      },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),        
      },
    submit: {
        margin: theme.spacing(3,0,2),
      },
}));

const LoginForm = props => {
    const classes= useStyles();
    return(
        <React.Fragment>
            <Grid container component="main" className={classes.root}>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={7} className={classes.image} />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <form onSubmit={props.onSubmit}>
<<<<<<< HEAD
                            <h1>Login</h1>
                            <InputLabel htmlFor="userName">
                                User Name
                            </InputLabel >
                            <Input type="text"
                                id="userName"
                                placeholder="User Name"
                                name="userName"
                                value={props.value.userName}
                                onChange={event => props.onChange(event, 'userName')} />
                            <InputLabel htmlFor="passWord">
                                Pass Word
                            </InputLabel>
                            <Input type="password"
                                id="passWord"
                                placeholder="Pass Word"
                                name="passWord"
                                value={props.value.passWord}
                                onChange={event => props.onChange(event, 'passWord')} />
                            <br />
                            <Button
                                variant="contained"
                                type="submit"
                                className={classes.margin}
                                color="primary">
                                Login
                             </Button>
=======
                            <div className={classes.paper}>
                                <Avatar className={classes.avatar}>
                                    <LockOpenIcon />
                                </Avatar>
                                <Typography component="h1" variant="h5">    
                                    Welcome to RelaMa!
                                </Typography>
                                <form className={classes.form} noValidate>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="userName"
                                        label="Username"
                                        name="userName"
                                        autoComplete="username"
                                        value={props.value.userName}
                                        onChange={event => props.onChange(event, 'userName')}
                                        autoFocus
                                    />
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        value={props.value.passWord}
                                        onChange={event => props.onChange(event, 'passWord')}
                                        autoComplete="current-password"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox value="remember" color="primary" />}
                                        label="Remember me"
                                    />
                                    <StyledButton
                                        type="submit"
                                        fullWidth
                                        className={classes.submit}>
                                        Sign In
                                    </StyledButton>
                                    <Grid container>
                                        <Grid item xs>
                                        <Link href="#" variant="body2">
                                            Forgot password?
                                        </Link>
                                        </Grid>
                                        <Grid item>
                                        <Link to="/register" variant="body2">                                            
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                        </Grid>
                                    </Grid>                                    
                                </form>
                                <Box mt={5}>
                                    <Copyright />
                                </Box>
                            </div>                            
>>>>>>> origin/master
                        </form>
                    </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default LoginForm;