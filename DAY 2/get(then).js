import axios from "axios";
axios
.get("https://api.github.com/users/sjtgshivam")
.then((data) =>{
    console.log(data);
})
axios.get("https://api.github.com/users/SJTGSHIVAM/followers")
.then((resp)=>{
    console.log("!!!!!!!!!FOLLOWERS!!!!!!!!!!");
    console.log(resp.data);
})
axios.get("https://api.github.com/users/SJTGSHIVAM/following")
.then((resp)=>{
    console.log("!!!!!!!!!FOLLOWING!!!!!!!!!!!");
    console.log(resp.data);
})
.catch((err)=>{
    console.error(err);
})
