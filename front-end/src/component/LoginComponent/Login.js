import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import RegisterAccount from "./RegisterForm/RegisterAccount";
import LoginForm from "./LoginForm/LoginForm";
import {Button} from '@material-ui/core';
import axios from 'axios';
import {loginUrl} from '../Utils/Constant';

const Login = props => {
    const history= useHistory();

    const [value, setValue] = React.useState({
        userName: '',
        passWord: '',
    });

    const handleSubmit = (event) => {
        const user={
            username: value.userName,
            password: value.passWord
        }; 
        axios.post(`${loginUrl}auth/`, 
            user)
            .then(res => {
                console.log(res.data.token);
                localStorage.setItem('token', JSON.stringify(res.data.token));
                history.push('/home');
            })
            .catch(e => {
                alert("Wrong password");
                event.preventDefault();
                setValue({
                    ...value,
                    userName :'',
                    passWord :'',
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

    return (
        <React.Fragment>
            <LoginForm
                onChange={handleChange}
                onSubmit={handleSubmit}
                value={value} />
            <Button variant="contained" color="primary" onClick={Register}>
                Register
            </Button>
        </React.Fragment>
    );
}

export default Login;