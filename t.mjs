import axios from "axios"

axios
  .get("http://65.2.73.180:3000/userser/user/appointment", {
    params: {
      email: "sahilpant16@gmail.com",
    },
  })
  .then((x) => console.log(x.data))
