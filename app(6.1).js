const express = require ('express');
const path = require('path');

const app =express();


app.set('port', process.env.PORT || 3000); 

//app.set('port',포트)  porcess.en객체에 포트가 있다면 그값을 쓰고 아니면 3000을쓴다 

app.get('/', (req,res)=>{ //get(주소, 라우터) get요청이 들어오면 어떤 동작을 할지 적는 부분이다. res.send를 통해서 응답문구를 보내던가, sendFile을 통해 응답읋 한다
    //res.send('Hello, Express');
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(app.get('port'),() =>{
    console.log(app.get('port'),'번 포트에서 대기중');
})