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
      orderRadius: 3,
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
        marginTop: theme.spacing(1),
        padding: theme.spacing(2),
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
        marginTop: theme.spacing(2),      
      },
    submit: {
        margin: theme.spacing(3,0,2),
      },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        // width: 200,
      },
}));

const RegisterAccount = props => {
    const [accountInfo, setAccountInfo] = React.useState({
        lastName: '',
        firstName: '',
        birthday: '',
        phoneNumber: '',
        userNameRegister: '',
        passWordRegister: '',
        gender: '',
    });
    const handleChange = (event, props) => {
        setAccountInfo({
            ...accountInfo,
            [props]: event.target.value
        });
    };
    const handleSubmit = (event, props) => {
        alert("register success");
        console.log(accountInfo);
        event.preventDefault();
    }
    const classes = useStyles();
    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOpenIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">    
                        Become to a RelaMa-er!
                    </Typography>
                    <form className={classes.form} onSubmit={handleSubmit} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                value={accountInfo.lastName}
                                onChange={event => handleChange(event, 'lastName')}
                            />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                value={accountInfo.firstName}
                                onChange={event => handleChange(event, 'firstName')}
                                autoComplete="lname"
                            />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                id="date"
                                label="Birthday"
                                type="date"                                    
                                fullWidth
                                defaultValue="2017-05-24"
                                className={classes.textField}
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                id="gender"
                                label="Male/Female/Other"
                                name="gender"
                                value={accountInfo.gender}
                                onChange={event => handleChange(event, 'gender')}
                                autoComplete="gender"
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="phonenumber"
                                label="Phone Number"
                                name="phonenumber"
                                value={accountInfo.phoneNumber}
                                onChange={event => handleChange(event, 'phoneNumber')}
                                autoComplete="phonenumber"
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                value={accountInfo.userNameRegister}
                                onChange={event => handleChange(event, 'userNameRegister')}
                                autoComplete="phonenumber"
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                value={accountInfo.passWordRegister}
                                onChange={event => handleChange(event, 'passWordRegister')}                
                                autoComplete="current-password"
                            />
                            </Grid>
                            <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="agree" color="primary" />}
                                label="I agree to the terms and conditions"
                            />
                            </Grid>
                            <StyledButton
                                    type="submit"
                                    value="Register"
                                    fullWidth
                                    //variant="contained"
                                    // color="primary"
                                    className={classes.submit}>
                                    Sign Up                                 
                                </StyledButton>
                            <Grid container justify="flex-end" >
                                <Link to="/" variant="body2">                                            
                                    {"Already have an account? Sign in"}
                                </Link>                                
                            </Grid>    
                        </Grid>
            {/* <input
                type="text"
                placeholder="Birth Day"
                value={accountInfo.birthday}
                onChange={event => handleChange(event, 'birthday')} /><br />
            <input
                type="type"
                placeholder="Male"
                value={accountInfo.male}
                onChange={event => handleChange(event, 'male')} /><br />
            <input type="submit" value="Register" /> */}
                    </form>
                </div>                    
            <Box mt={5}>
                <Copyright />
            </Box>
        </Grid>        
    </Grid>
    );
}

export default RegisterAccount;