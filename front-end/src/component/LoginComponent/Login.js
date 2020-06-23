import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import RegisterAccount from "./RegisterForm/RegisterAccount";
import LoginForm from "./LoginForm/LoginForm";
import { Button, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import axios from 'axios';
<<<<<<< HEAD
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
=======
import {loginUrl} from '../Utils/Constant';

>>>>>>> 9bcab941477076576d21cb720139fa58960252c6
const Login = props => {
    const history = useHistory();
    const [open, setOpen] = React.useState(false);
    const [type, setType] = React.useState('error');
    const [msg, setMsg] = React.useState('')
    const [value, setValue] = React.useState({
        userName: '',
        passWord: '',
    });

    const handleSubmit = (event) => {
<<<<<<< HEAD
        const user = {
            username: value.userName,
            password: value.passWord
        };
        axios.post(`http://127.0.0.1:8000/auth/`,
=======
        const user={
            username: value.userName,
            password: value.passWord
        }; 
        axios.post(`${loginUrl}auth/`, 
>>>>>>> 9bcab941477076576d21cb720139fa58960252c6
            user)
            .then(res => {
                console.log(res.data.token);
                localStorage.setItem('token', JSON.stringify(res.data.token));
                history.push('/home');
            })
            .catch(e => {
                setType("error");
                setMsg(e.message);
                setOpen(true);

                event.preventDefault();
                setValue({
                    ...value,
                    userName: '',
                    passWord: '',
                })
            })
        event.preventDefault();
    };

    const handleChange = (event, prop) => {
        setValue({
            ...value,
            [prop]: event.target.value,
        });
    };

    const Register = (event) => {
        history.push('/registerAccount');
    };
    const handleClose = () => setOpen(false);
    return (
        <React.Fragment>
            <LoginForm
                onChange={handleChange}
                onSubmit={handleSubmit}
                value={value} />
            {/* <Button variant="contained" color="primary" onClick={Register}>
                Register
            </Button> */}
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <Alert onClose={handleClose} severity={type}>
                    {msg}
                </Alert>
            </Snackbar>
        </React.Fragment>
    );
}

export default Login;