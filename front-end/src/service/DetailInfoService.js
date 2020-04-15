
let ContactList = [
    {
        id: 1,
        firstName: 'hung',
        lastName:'Nguyen Viet',
        birthday: '1/1/2020',
        phoneNumber: '091234567'
    },
    {
        id: 2,
        firstName: 'hung',
        lastName:'Nguyen Viet',
        birthday: '1/1/2020',
        phoneNumber: '091234567'
    },
    {
        id: 3,
        firstName: 'hung',
        lastName:'Nguyen Viet',
        birthday: '1/1/2020',
        phoneNumber: '091234567'
    },
    {
        id: 4,
        firstName: 'hung',
        lastName:'Nguyen Viet',
        birthday: '1/1/2020',
        phoneNumber: '091234567'
    },
    {
        id: 5,
        firstName: 'hung',
        lastName:'Nguyen Viet',
        birthday: '1/1/2020',
        phoneNumber: '091234567'
    },
    {
        id: 6,
        firstName: 'hung',
        lastName:'Nguyen Viet',
        birthday: '1/1/2020',
        phoneNumber: '091234567'
    },
    {
        id: 7,
        firstName: 'nam',
        lastName:'Nguyen Viet',
        birthday: '1/1/2020',
        phoneNumber: '091234567'
    },
    {
        id: 8,
        firstName: 'chinh',
        lastName:'Nguyen Viet',
        birthday: '1/1/2020',
        phoneNumber: '091234567'
    },
    {
        id: 9,
        firstName: 'Hien',
        lastName:'Nguyen Viet',
        birthday: '1/1/2020',
        phoneNumber: '091234567'
    },
    {
        id: 10,
        firstName: 'Hoa',
        lastName:'Nguyen Viet',
        birthday: '1/1/2020',
        phoneNumber: '091234567'
    },
    {
        id: 11,
        firstName: 'Thanh',
        lastName:'Nguyen Viet',
        birthday: '1/1/2020',
        phoneNumber: '091234567'
    },
    {
        id: 12,
        firstName: 'Ngoc',
        lastName:'Nguyen Viet',
        birthday: '1/1/2020',
        phoneNumber: '091234567'
    },
    {
        id: 13,
        firstName: 'Mai Anh',
        lastName:'Do Nguyen',
        birthday: '1/1/2020',
        phoneNumber: '091234567'
    },

];



const DetailInfoService = {
    getAll : () =>{
        return ContactList;
    },
    getByID : (id) =>{
        return ContactList.find(c => c.id === id);
    },
    getByName : (name) => {
        return ContactList.filter(c=>c.firstName === name);
    },
    addNewFriend : (friend ) =>{
        let newInfo = {
            id: 9,
            lastName: friend.lastName,
            firstName: friend.firstName,
            birthday: friend.birthday,
            phoneNumber: friend.phoneNumber
        };
        return ContactList.push(newInfo);    }
};

export default DetailInfoService;