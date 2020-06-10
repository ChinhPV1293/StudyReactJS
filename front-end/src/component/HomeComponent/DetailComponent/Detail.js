import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios';
import {baseUrl} from '../../Utils/Constant';
import{List, 
  ListItem, 
  makeStyles,
  TextField,
  ListItemAvatar,
  Avatar,
  Container} from '@material-ui/core';

import {image1} from '../../Utils/Image';

const useStyles = makeStyles((theme) =>({
    root:{
        flexGrow : 1,
    },
    avatar:{
      width: theme.spacing(30),
      height: theme.spacing(30),
      padding: theme.spacing(3),
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
}))

const Detail = props => {
    
    const  {id} = useParams();
    const url= baseUrl+'friend_mini/'+ id + '/';
    const [info, setInfo]= React.useState('');
    const classes = useStyles();

    useEffect(() => {
        const token= JSON.parse(localStorage.getItem("token"));
        let config = {
            headers: {
              'Authorization': 'Token ' + token
            }
        }
        const fetchData = async () => {
          const result = await axios(
            url,
            config
          );
          console.log(result);
          setInfo(result.data);
        };
        fetchData();
      }, []);
    return(
        <div class={classes.root}>
          <Container>
          {info != '' ?
            <pre>
            <ul>
                {/* <li>{info.nameFriend}</li> */}
                <div>
                  <Avatar alt="Avatar" src={image1} className={classes.avatar} />
                </div>
                
                <TextField 
                  id="outlined-search" 
                  label="Full Name" 
                  variant="outlined" 
                  value = {info.nameFriend} />
                <li>{info.Birthday}</li>
                <li>{info.phoneNumber}</li>
                <li>{info.address}</li>
                  <List>
                {
                  info.groups.map((group,index)=> <ul key={index}>
                    <ListItem>{group.nameGroup}</ListItem>
                  </ul>)
                }
                </List>
            </ul>
            </pre>
            :
            null
          }
          </Container>
          
        </div>
        
    );
}

export default Detail;