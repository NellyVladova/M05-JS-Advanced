function rectangle(number){
    if(typeof number === 'undefined'){
        for(let i = 1; i <= 5; i++){
            console.log('* '.repeat(5));
        }
    }else{
        for(let i = 1; i <= number; i++){
            console.log('* '.repeat(number));
        }
    }
}

rectangle();
rectangle(4);
rectangle(7);

