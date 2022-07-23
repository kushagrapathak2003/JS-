// By .then .catch

 // here we have also uused user input
 import readlineSync from "readline-sync";
 function evenChecker(number) {
     return new Promise((resolve, reject) => {
      
         if (!(number % 2)) resolve("this is even");
         reject("this is odd");
     
 });
 }
 
 let value=readlineSync.question("enter value ")
 evenChecker(value).then((y)=>
 {
     console.log(y)
 }
 ).catch((y)=>
 {
     console.log(y)
 }
 )
 
 //By try catch
 
 
 
  value=readlineSync.question("enter value ")
 try { let resp = await evenChecker(value)
     console.log(resp);
   
     
 } catch (error) {
   console.log(error);  
 }
 