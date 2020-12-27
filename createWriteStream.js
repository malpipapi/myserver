const fs =require ('fs');

const writestream = fs.createWriteStream('./writeme2.txt');
writestream.on('finish',() =>{
    console.log('파일 쓰기 완료');
})

writestream.write('이 글을 씁니다');
writestream.write('한번더 쓸거에요');
writestream.end();