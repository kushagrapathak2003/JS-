let DeepCopy1 = { f: { d: {l:66} } , g:{k:0}};
let newDeepCopy1={...DeepCopy1,f:{...DeepCopy1.f, d:{...DeepCopy1.f.d}},g:{...DeepCopy1.g}};
