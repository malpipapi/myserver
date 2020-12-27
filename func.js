const { add, even, odd}=require('./var1');

function checkOddOrEven(num){
    if (num % 2){
        return odd;
    }
    return even;
}
module.exports =checkOddOrEven;