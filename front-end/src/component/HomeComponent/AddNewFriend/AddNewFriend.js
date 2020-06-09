import React from 'react';
import DetailInfoService from '../../../service/DetailInfoService';

import {useHistory} from 'react-router-dom';
import axios from 'axios';
import {baseUrl} from '../../Utils/Constant';


const AddNewFriend = props => {
    const history = new useHistory();
    const [Info, setInfo] = React.useState({
        Name: '',
        is_Men : false,
        birthday: '',
        phoneNumber: '',
        Address :'',
        groups: [3],
    });
    const handleChange = (event, props) => {
        setInfo({
            ...Info,
            [props]: event.target.value
        }
        )
    };
    const handleSubmit = event =>{
        // alert(Info.lastName+Info.firstName);
        // debugger;
        // DetailInfoService.addNewFriend(Info);
        // history.push('/home');
        const account= {
            nameFriend : Info.Name,
            is_Men : Info.is_Men,
            Birthday : Info.Birthday,
            phoneNumber : Info.PhoneNumber,
            address : Info.Address,
            groups : Info.groups
        };
        const token= JSON.parse(localStorage.getItem("token"));
        let config = {
            headers: {
              'Authorization': 'Token ' + token
            }
        }
        axios.post(`${baseUrl}friend_mini/`, 
            account,config)
            .then(res => {
                console.log(res.data);
                debugger;
                history.push('/detail/'+ res.data.id);
            })
            .catch(e => {
                alert("Wrong password");
                event.preventDefault();
            })
        event.preventDefault();
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Full Name
                    <input
                        type="text"
                        value={Info.Name}
                        onChange={event => handleChange(event,'Name')} />
                </label><br />
                <label>
                    Birthday
                    <input
                        type="text"
                        value={Info.birthday}
                        onChange={event => handleChange(event,'birthday')} />
                </label><br />
                <label>
                    phoneNumber
                    <input
                        type="text"
                        value={Info.phoneNumber}
                        onChange={event => handleChange(event,'phoneNumber')} />
                </label><br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
}

export default AddNewFriend;