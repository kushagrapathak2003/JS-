//BY TRY CATCH

async function oddOReven(x){
    if(x%2 ===0) return("number is even")
    throw ("number is odd ");
    
    }
   try {
    let resp = await oddOReven(4)
    console.log(resp);
    
   } catch (error) {
    console.log(error);
    
   }

//BY .THEN  .CATCH


    
    
    oddOReven(5).then((y)=>
    {
        console.log(y)
    }
    ).catch((y)=>
    {
        console.log(y)
    }
    )

