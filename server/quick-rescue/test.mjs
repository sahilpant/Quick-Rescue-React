import axios from 'axios';

axios.get('http://13.127.43.241:3000/doctor/doctor/get').then(x => {
    console.log(x.data);
})

axios.post(`http://13.127.43.241:3000/doctor/doctor/signup`, {
        "firstname": "string",
        "lastname": "string",
        "email": "string",
        "password": "string"
}).then(x => {
    
    console.log(`${x.data.message}`)
})