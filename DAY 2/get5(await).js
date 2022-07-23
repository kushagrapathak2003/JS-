import axios from "axios";

try {
  let resp = await axios.get("https://jsonplaceholder.typicode.com/users/8");
  let post = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
  let comment = await axios.get("https://jsonplaceholder.typicode.com/comments/1" );

  console.log((await resp).data.name);
  console.log("\nTITLE");
  console.log((await post).data.title);
  console.log("\nBODY");
  console.log((await post).data.body);
  console.log("\nNAME");
  console.log((await comment).data.name);
  console.log("\nEMAIL");
  console.log((await comment).data.email);
} catch (err) {
  console.log(err.response.data);
  console.log("!!!!!!!!!!ERROR!!!!!!!!!!");
}
