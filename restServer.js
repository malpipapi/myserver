const http =require('http');
const fs =require('fs').promises;

const users={}; //데이터 저장용
http.createServer(async (req,res)=>{
    try{
        console.log(req.method, req.url);
        if (req.method ==='GET'){// 요청하는 method가 GET이라면 
            if(req.url ==='/'){
                const data = await fs.readFile('./restFront.html'); 
                res.writeHead(200, { 'Content-Type': 'text/html; charset= utf-8'});
                return res.end(data);
            }
            else if (req.url === 'about'){
                const data = await fs.readFile('/about.html');
                res.writeHead(200,{ 'Content-Type': 'text/html; charset=utf-8'});
                return res.end(data);
            }
            else if (req.url ==='/users'){ //유저의 정보를 get
                res.writeHead(200, {'Content-Type': 'text/html : charset=utf-8'});
                return res.end(JSON.stringify(users));
            }
            try{ 
                const data = await fs.readFile(`.${req.url}`);
                return res.end(data);
            }
                catch(err){
                    //주소에 해당하는 라우트를 못찾았다는 404 NOT FOUND error 발생
                }
            }
            else if(req.method ==='POST'){ //method가 POST(등록방식)이라면 
                if (req.url ==='/user'){  // user의 정보를 등록
                    let body= ''; //요청의 body를 stream 형식으로 받음
                    req.on('data',(data)=>{ //req.on('data' 을 사용해 POST 데이터가 들어오면 data를 이용해 body 변수에 저장해둔다 
                        body+=data;
                    });
                    return req.on('end',()=>{ //더이상 데이터가 들어오지않는다면 end함수 실행  그후 데이터를 console에 뿌려준다
                        console.log('POST 본문(Body:', body);
                        const { name }= JSON.parse(body); //body(객체)를 문자열로 변환하여 반환한다 stringify와는 반대
                        const id= Date.now(); 
                        users[id]=name;
                        res.writeHead(201);
                        res.end('등록 성공');
                    });
                }
            } else if (req.method ==='PUT'){ // 자원 전체 교체 
                    if(req.url.startsWith('/user/')){ // 어떤 문자열이 특정 문자로 시작하는지 확인하여 결과롤 true or false  반환 
                        const key= req.url.split('/')[2];
                        let body= '';
                        req.on('data', (data)=> {
                            body+=data;
                        });
                        return req.on('end',()=>{
                            console.log('PUT 본문(Body:', body);
                            users[key] = JSON.parse(body.name);
                            return res.end(JSON.stringify(users));

                    });
                }
            } else if (req.method ==='DELETE'){
                if(req.url.startsWith('/user/')){
                    const key= req.url.split('/')[2];
                    delete users[key];
                    return res.end(JSON.stringify(users));
                }
            }

        res.writeHead(404);
        return res.end('NOT FOUND');
    }
    catch(err){
        console.error(err);
        res.writeHead(500);
        res.end(err.message);
    }
})
.listen(8082, () => {
    console.log ('8082 포트에서 서버 대기 중입니다');
})