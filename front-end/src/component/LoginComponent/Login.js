import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import RegisterAccount from "./RegisterForm/RegisterAccount";
import LoginForm from "./LoginForm/LoginForm";
import {Button} from '@material-ui/core';
const Login = props => {
    const history= useHistory();

    const [value, setValue] = React.useState({
        userName: '',
        passWord: '',
    });

    const handleSubmit = (event) => {
        if(value.userName ==="Hung" && value.passWord==="Hung"){
            history.push('/home');
        }
        else{
            alert("Wrong password");
            event.preventDefault();
            setValue({
                ...value,
                userName :'',
                passWord :'',
            })
        }
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