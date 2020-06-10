import React from 'react';
import DetailInfoService from '../../../service/DetailInfoService';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Typography,
    CssBaseline,
    Paper,
    Button,
    TextField,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3),
        maxWidth: 1000,
        marginTop: theme.spacing(6),
        margin: 'auto',
    },
    paper: {
        maxWidth: 1000,
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
    },
}));
// import { useHistory } from 'react-router-dom';
// import axios from 'axios';
// import { baseUrl } from '../../Utils/Constant';


const AddNewFriend = props => {
    const classes = useStyles();
    const history = new useHistory();
    const [Info, setInfo] = React.useState({
        Name: '',
        is_Men: false,
        birthday: '',
        phoneNumber: '',
        Address: '',
        groups: [3],
    });
    const handleChange = (event, props) => {
        setInfo({
            ...Info,
            [props]: event.target.value
        }
        )
    };
    const handleSubmit = event => {
        alert(Info.lastName + Info.firstName);

        DetailInfoService.addNewFriend(Info);
        history.push('/home');
    };
    return (
        <React.Fragment>
            <Grid container className={classes.root} direction="row" justify="center" alignItems="center" spacing={3}>
                <Grid item xs={12} justify="center">
                    <Typography component="h1" variant="h5">Add your friend</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First name"
                        fullWidth
                        value={Info.firstName}
                        onChange={event => handleChange(event, 'firstName')}
                        autoComplete="fname"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        fullWidth
                        value={Info.lastName}
                        onChange={event => handleChange(event, 'lastName')}
                        autoComplete="lname"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="address"
                        name="address"
                        label="Address"
                        fullWidth
                        autoComplete="billing address-line"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="city"
                        name="city"
                        label="City"
                        fullWidth
                        autoComplete="billing address-level2"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="state" name="state" label="State/Province/Region" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="phoneNumber"
                        name="phoneNumber"
                        label="Phone Number"
                        fullWidth
                        // const handleSubmit = event =>{
                        //     // alert(Info.lastName+Info.firstName);
                        //     // debugger;
                        //     // DetailInfoService.addNewFriend(Info);
                        //     // history.push('/home');
                        //     const account= {
                        //         nameFriend : Info.Name,
                        //         is_Men : Info.is_Men,
                        //         Birthday : Info.Birthday,
                        //         phoneNumber : Info.PhoneNumber,
                        //         address : Info.Address,
                        //         groups : Info.groups
                        //     };
                        //     const token= JSON.parse(localStorage.getItem("token"));
                        //     let config = {
                        //         headers: {
                        //           'Authorization': 'Token ' + token
                        //         }
                        //     }
                        //     axios.post(`${baseUrl}friend_mini/`, 
                        //         account,config)
                        //         .then(res => {
                        //             console.log(res.data);
                        //             debugger;
                        //             history.push('/detail/'+ res.data.id);
                        //         })
                        //         .catch(e => {
                        //             alert("Wrong password");
                        //             event.preventDefault();
                        //         })
                        //     event.preventDefault();
                        // };
                        // return (
                        //     <div>
                        //         <form onSubmit={handleSubmit}>
                        //             <label>
                        //                 Full Name
                        //                 <input
                        //                     type="text"
                        //                     value={Info.Name}
                        //                     onChange={event => handleChange(event,'Name')} />
                        //             </label><br />
                        //             <label>
                        //                 Birthday
                        //                 <input
                        //                     type="text"
                        //                     value={Info.birthday}
                        //                     onChange={event => handleChange(event,'birthday')} />
                        //             </label><br />
                        //             <label>
                        //                 phoneNumber
                        //                 <input
                        //                     type="text"
                        value={Info.phoneNumber}
                        onChange={event => handleChange(event, 'phoneNumber')}
                        autoComplete="phonenumber"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="date"
                        label="Birthday"
                        type="date"
                        fullWidth
                        defaultValue="2017-05-24"
                        value={Info.birthday}
                        onChange={event => handleChange(event, 'birthday')}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.submit}>
                    Add new friend
            </Button>
            </Grid>
        </React.Fragment>
    );
}

export default AddNewFriend;