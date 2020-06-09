import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import axios from 'axios';
import {baseUrl} from '../Utils/Constant';
import{List, ListItem} from '@material-ui/core';


const Detail = props => {
    
    const  {id} = useParams();
    const url= baseUrl+'friend_mini/'+ id + '/';
    const [info, setInfo]= React.useState('');
    debugger;

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
          debugger;
          setInfo(result.data);
        };
        fetchData();
      }, []);
    return(
        <div>
          {info != '' ?
            <pre>
            <ul>
                <li>{info.nameFriend}</li>
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
        </div>
        
    );
}

export default Detail;