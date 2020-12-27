const http = require('http');
http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>hello Node!</h1>');
    res.end('<h1>hello server! </h1>');

})
.listen(8080, () =>{
    console.log('8080번 포트에서 서버 대기 중입니다');
});