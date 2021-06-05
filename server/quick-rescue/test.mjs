import axios from 'axios';

axios.get('http://localhost:3000/doctor/doctor/get').then(x => {
    console.log(x.data);
})