import React,{useState,useEffect} from 'react';
import '../../../App.css';
import {useParams, useHistory} from "react-router-dom";
import DetailInfoService from '../../../service/DetailInfoService';
import {image1} from '../../Utils/Image';
import { CssBaseline, 
    Container, 
    Typography, 
    List,
    ListItemText,
    makeStyles,
    ListItem,
    ListItemAvatar,
    Avatar,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button
 } from '@material-ui/core';
 import axios from 'axios';
 import {baseUrl} from '../../Utils/Constant';

const useStyles = makeStyles((theme)=>({
    root: {
        flexGrow : 1,
    },
    inline: {
        display: 'inline',
    },
    title: {
        display: 'inline',
        marginLeft: theme.spacing(2),
        color: 'blue',
        marginBottom: theme.spacing(2),
    },
    inline: {
        display: 'inline',
    },
    myHeader:{
        display: 'inline-block',
    }
}));

const ListMemberOfGroup = props => {
    const classes= useStyles();
    const [detailGroup,setDetailGroup]= useState('');
    const [newMember,setNewMember] = useState('');
    const  {id} = useParams();
    const history= useHistory();
    const handleClick= (event,value) => {
        history.push("/home/detail/"+ value);
    }
    const handleChange = (event) => {
        setNewMember(event.target.value);
      };
    useEffect(() => {
        const token= JSON.parse(localStorage.getItem("token"));
        let config = {
            headers: {
              'Authorization': 'Token ' + token
            }
        }
        const fetchData = async () => {
          const result = await axios(
            baseUrl+'group_friends/'+ id,config
          );
          setDetailGroup(result.data);
          console.log(detailGroup);
        };
        fetchData();
      }, []);
    return (
        <React.Fragment>
            <CssBaseline />
            <List>
                {detailGroup != '' ?
                    <pre>
                        <div className={classes.myHeader} display ="inline">
                            <div className={classes.title}>
                                <Typography variant="h4" component="h2">
                                    {detailGroup.nameGroup}
                                </Typography>
                            </div>
                            <div className={classes.inline} display ="inline">
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={newMember}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                                <Button variant="contained" color="primary">
                                    Add
                                </Button>

                            </div>
                        </div>
                        {
                            detailGroup.member.map((contact, index) => <ul key={index}>
                                <ListItem button>
                                    <ListItemAvatar>
                                        <Avatar alt="Remy Sharp" src={image1} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        onClick={(event) => handleClick(event, contact.id)}
                                        primary={contact.nameFriend} />
                                </ListItem>
                            </ul>)
                        }
                    </pre>
                    :
                    null
                }
            </List>
        </React.Fragment>); 
}

export default ListMemberOfGroup;