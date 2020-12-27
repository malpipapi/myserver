const fs = require ('fs');
const file = fs.createWriteStream('./big.txt');

file.on('finish',()=>{
    console.log("파일 쓰기 완료");
})

for(let i=0; i<=1000000; i++){
    file.write("안녕하세요 엄청 큰 파일을 만들거에요");
}
file.end();