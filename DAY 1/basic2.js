
let pleaseMakeMyDeepCopy0 = {  f: { d: 8 } , m:{k:0},k:9};

let newpleaseMakeMyDeepCopy0=  { ...pleaseMakeMyDeepCopy0,f:{ ...pleaseMakeMyDeepCopy0.f}, m:{...pleaseMakeMyDeepCopy0.m}};
console.log(newpleaseMakeMyDeepCopy0.f)
console.log(newpleaseMakeMyDeepCopy0.m)

