let deepCopy2 = { f: { d: { l: 66 } }, g: { d: { l: 66 }, k: 9, n: { r: 9 } } };
let newdeepCopy2 ={...deepCopy2,
    f:{...deepCopy2.f, 
        d:{...deepCopy2.f.d,
            
        }
    },
            g:{...deepCopy2.g,
                d:{...deepCopy2.g.d}
                   
                
            
                   , n:{...deepCopy2.g.n,
                     
                    }}
                };