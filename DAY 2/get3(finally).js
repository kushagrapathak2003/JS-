import axios from 'axios';

try {
  let resp =  axios.get("https://api.github.com/users/sjtgshivam");

  console.log("moved");
  console.log("moved");
  console.log("moved");
  console.log("moved");
  console.log("moved");

  console.log((await resp).data.name);
} catch (err) {
  console.log(err.response.data);
} finally {
  console.log("i will run finally");
}
