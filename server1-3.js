const http = require('https');
const fs= require('fs');

http.createServer({
    cert: fs.readFileSync('도메인 인증서 경로'),
    key: fs.readFileSync('도메인 비밀키 경로'),
    ca: [
        fs.readFileSync('상위 인증서 경로'),
        fs.readFileSync('상위 인증서 경로'),    
    ],

}, (req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>hello Node!</h1>');
    res.end('<h1>hello server! </h1>');
})


.listen(443, () =>{
    console.log('443q번 포트에서 서버 대기 중입니다');
});