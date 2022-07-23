import axios from 'axios';

try {
  let resp =  axios.get("https://api.github.com/users/sjtgshivam");

 
  console.log((await resp).data.name);
} catch (err) {
  console.log(err.response.data);

}
try {
    let follow =  axios.get("https://api.github.com/users/SJTGSHIVAM/followers");
    console.log("!!!!!!!!!FOLLOWERS!!!!!!!!!!");

    for (let index = 0; index < ((await follow).data).length; index++) {
        
        console.log((await follow).data[index].login)
    }
}catch (err) {
    console.log(err.follow);
}

try {
    let ing =  axios.get("https://api.github.com/users/SJTGSHIVAM/following");
  
    console.log("!!!!!!!!!FOLLOWING!!!!!!!!!!");
    for (let index = 0; index < ((await ing).data).length; index++) {
        
        console.log((await ing).data[index])
    }  
  } catch (err) {
    console.log(err.ing);
  }
  
