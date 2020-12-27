const http = require('http');
const fs = require('fs').promises
const url= require ('url');
const qs =require ('querystring');


const session={};

const parseCookies = (cookie= '')=>   //쿠키는 문자열이고 문자열을 객체로 바꿔주는 함수이다.
    cookie                              //mycookie=test 가 {mycookie : 'test'}로 바뀐다는 함수임 
        .split(';')
        .map(v =>v.split('='))
        .reduce((acc, [k,v]) => {
            acc[k.trim()]= decodeURIComponent(v);
            return acc;
        }, {});

http.createServer(async (req,res)=>{
    const cookies =parseCookies(req.headers.cookie); // 문자열을 객체로 바꿔준다 

    //주소가 /login으로 시작하는 경우
    if(req.url.startsWith('/login')){ //login으로 시작한다면?
        const {query} =url.parse(req.url); //url과 querystring모듈로 각각 주소와 주소에 딸려오는 query를 분석한다 
        const {name} =qs.parse(query);
        const expires= new Date();
        //쿠키 유효 시간을 현재 시간 +5분으로 설정
        expires.setMinutes(expires.getMinutes() +5); //5분 추가 
        
        // 추가 부분 
        const uniqueInt =Date.now(); //쿠키에 이름을 보내는대신 ( 위험해질수있어서 ) uniqueInt라는 숫자값을 보낸다 
        session[uniqueInt] ={
            name,
            expires,
        };

        res.writeHead(302, {
            Location: '/', //리다이렉트 주소를 /로 변경 
            'Set-Cookie': `session=${uniqueInt}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
            }); //쿠키 핵심을 보여주고있다.(제일중요)
            res.end();
    }
    //세셔 쿠키가 존재하고, 만료 기간이 지나지 않았다면 
    else if(cookies.session && session[cookies.session].expires > new Date()){
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end(`${session[cookies.session].name}님 안녕하세요`); //cookies[name] 이 session[cookies.session].name으로 바뀌었다.
    }
    else{
        try{    
            const data= await fs.readFile('./cookie2.html');
            res.writeHead(200,{ 'Content-Type': 'text/html; charset=utf-8'});
            res.end(data);
        }
        catch(err){
            res.writeHead(500, {'Content-Type': 'text/plain; charset=utf-8'});
            res.end(err.message);
        }
    }
})
.listen(8085, () =>{
    console.log("대기중");
})