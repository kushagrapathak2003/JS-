import axios from "axios";
try {
  let resp = axios.get("https://jsonplaceholder.typicode.com/users/8");
    let post = axios.get("https://jsonplaceholder.typicode.com/posts/1");
  let comment = axios.get("https://jsonplaceholder.typicode.com/comments/1");
 [resp, post, comment] = await Promise.all([resp, post, comment]);
console.log(resp.data.name);
  console.log("\nTITLE");
  console.log(post.data.title);
  console.log("\nBODY");
  console.log(post.data.body);
  console.log("\nNAME");
  console.log(comment.data.name);
  console.log("\nEMAIL");
  console.log(comment.data.email);
   
} catch (err) {
  console.log(err.resp.data);
  console.log("!!!!!!!!!!ERROR!!!!!!!!!!");
}