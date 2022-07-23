function evenChecker(num) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!(num % 2)) resolve("this is even");
        reject("this is not even");
      }, 5000);
    });
  }
 // pending
 // fullfill
 // rejected
evenChecker(7).then((y)=>
{
    console.log(y)
}

).catch((y)=>
{
    console.log(y)

}
)