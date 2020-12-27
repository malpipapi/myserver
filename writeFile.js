const fs= require('fs').promises;

fs.writeFile('./writeme.txt','글이 입력될까?')

.then((data)=>{
    return fs.readFile('./writeme.txt');
})
.then((data)=>{
    console.log(data.toString());
})
.catch((err)=>{
    console.error(err);
})