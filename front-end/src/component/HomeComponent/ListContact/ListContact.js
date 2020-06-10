import React from 'react';
import '../../../App.css';
import { Link, useHistory } from "react-router-dom";
import DetailInfoService from '../../../service/DetailInfoService';
import { image1 } from '../../Utils/Image';
import {
    CssBaseline,
    Container,
    Typography,
    List,
    ListItemText,
    makeStyles,
    ListItem,
    ListItemAvatar,
    Avatar,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    inline: {
        display: 'inline',
    },
}));

const ListContact = props => {
<<<<<<< HEAD
    const classes = useStyles();
    const ContactList = props.value;
    const history = useHistory();
    const handleClick = (event, value) => {
        history.push("/detail/" + value);
=======
    const classes= useStyles();
    const ContactList= props.value;
    const history= useHistory();
    const handleClick= (event,value) => {
        history.push("/home/detail/"+ value);
>>>>>>> 9bcab941477076576d21cb720139fa58960252c6
    }
    return (
        <React.Fragment>
            <CssBaseline />
            <List>
                {
                    ContactList.map((contact, index) => <ul key={index}>
                        <ListItem button>
                            {/* <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src= {image1} />
                            </ListItemAvatar> */}
                            <ListItemText
                                onClick={(event) => handleClick(event, contact.id)}
                                primary={contact.nameFriend} />
                        </ListItem>
                    </ul>)
                }
            </List>
        </React.Fragment>);
}

export default ListContact;