function someExpensiveFunction0() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("this is now resolved");
      }, 5000);
    });
  }
  let x=7;
 someExpensiveFunction0().then((y)=>
     {
         console.log(y)
     }
 )
 console.log(x);
