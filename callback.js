// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a,b,sumCallback){
//     sumCallback(a,b)
// }
// calculator(1,2,sum)
function getdata(dataId,getNextData){
    setTimeout(()=>{
        console.log("data",dataId);
        if(getNextData){
            getNextData();
        }
    },2000);
}
    getdata(1,()=>{
        getdata(2,()=>{
            getdata(3,()=>{
                
            })
        })
    })

    
