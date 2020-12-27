const express = require ('express');
const path = require('path');

const app =express();


app.set('port', process.env.PORT || 3000); 

//app.set('port',포트)  porcess.en객체에 포트가 있다면 그값을 쓰고 아니면 3000을쓴다 

app.use((req,res,next)=>{
    console.log('모든 요청에 다 실행됩니다');
    next();
});

app.get('/', (req,res,next)=>{ //get(주소, 라우터) get요청이 들어오면 어떤 동작을 할지 적는 부분이다. res.send를 통해서 응답문구를 보내던가, sendFile을 통해 응답읋 한다
    console.log('GET / 요청에서만 실행됩니다');
    next();
}, (req,res)=>{
    throw new Error("에러는 에러 처리 미들웨어로 갑니다");
});

app.use((err,req,res,next)=>{
    console.error(err);
    res.status(500).send(err.message);
});


app.listen(app.get('port'),() =>{
    console.log(app.get('port'),'번 포트에서 대기중');
})