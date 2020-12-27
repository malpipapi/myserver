setImmediate(()=> {
    console.log(',eediate');
});
process.nextTick(()=> {
    console.log('nextTick');
});
setImmediate(()=> {
    console.log(',timeout');
},0);
Promise.resolve().then(()=> console.log('promise'));