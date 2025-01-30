function challenge5(text){
    if(text === null || text === ""){
        return 0;
    }
    let count = 1;
    for( let i=0; i<text.length; i++){
        if(text[i] === ' '){
            count++;
        }
    }
    return count;
}
console.log(challenge5("Hello world"));
console.log(challenge5("this is the best day"));
console.log(challenge5("a bb ccc ddddddd e"));
