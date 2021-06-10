import axios from 'axios';

axios.get('http://15.206.91.32:3000/userser/user/appointment',{params:{
    email:'sahilpant16@gmail.com'
}
}).then(x=>console.log(x.data))