let pleaseMakeMyDeepCopy = { a: 8, x: 7, f: { d: 8 } , g:{k:0}};

let newpleaseMakeMyDeepCopy=  { ...pleaseMakeMyDeepCopy,f:{ ...pleaseMakeMyDeepCopy.f}, g:{...pleaseMakeMyDeepCopy.g}};
console.log(newpleaseMakeMyDeepCopy.f)
console.log(newpleaseMakeMyDeepCopy.g)

