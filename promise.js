const condition = true;
const promise = new Promise(function (operation, reject)
{
    if (condition){
        operation('성공');
    
    }
    else{
        reject('실패');
    }
});
promise
 .then((message)=>{
     console.log(message);
     return new Promise( (resolve,reject)=>{
         resolve(message);
     })
 })
 .then((message2)=>{
    console.log(message2);
    return new Promise( (resolve,reject)=>{
        resolve(message2);
    })
})
.then((message3)=>{
    console.log(message3);
})
.then((message4)=>{
    console.log(message4);
})
 .catch((error)=>{
    console.log(error);
})
.finally((message)=>{
    console.log('무조건');
});