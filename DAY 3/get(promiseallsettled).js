const startTime = Date.now();
const timeSpent = () => " | Time: " + String(Date.now() - startTime);
const pres = (val, timeout = 1) =>
new Promise((res) => {
setTimeout(() => {
res(val);
}, timeout * 1000);
});
const prej = (val, timeout = 1) =>
new Promise((res, rej) => {
setTimeout(() => {
rej(val);
}, timeout * 1000);
}); 
try {
    console.log(timeSpent());
    let arr=await Promise.allSettled([
        pres("res1",2),
        pres("1",3),
        pres("Some reason",4),
]);
console.log(timeSpent());
console.log(JSON.parsestringify(arr));
}
catch(err){
    console.log("!!ERROR!!");

}

