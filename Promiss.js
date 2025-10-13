const getPromiss=()=>{
    return new Promiss=new Promiss((resolve,reject)=>{
    console.log("I am a promiss");
    reject("something missing!!!!!")
});
};
//if resolved
let promiss=getPromiss();
promiss.then(()=>{
    console.log("promiss fullfilled");
});
//if rejected
promiss.catch(()=>{
    console.log("error");
});