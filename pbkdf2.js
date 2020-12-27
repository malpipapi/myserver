const crypto =require ('crypto');

crypto.randomBytes ( 64, function(err,buf){
    const salt= buf.toString('base64');
    console.log('salt:', salt);
    crypto.pbkdf2('비밀번호',salt, 100000,64, 'sha512', function(err,key) {
        console.log('password:', key.toString('base64'));
    });
});