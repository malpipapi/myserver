const http = require('http');

const server= http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>hello Node!</h1>');
    res.end('<h1>hello server! </h1>');

});
server.listen(8080);

server.on('listening', ()=>{
    console.log('8080번 포트에서 서버 대기 중입니다!');
});
server.on('error',(error)=>{
    console.log(error);
})

// 변경점 const server라는 변수를 만들어내고 

// server에 관한 이벤트 리스너를 생성 후 , 콜백함수를 사용해서 이벤트 리스너가 완료될쯤 콜백함수를 부르게 되어있음 

// .lisetn => server.listen

// .listen + console.log~ => server.listen + server.on 