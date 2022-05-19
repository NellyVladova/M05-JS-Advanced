function gcdFunc(num1, num2){
    if(num2){
        return gcdFunc(num2, num1 % num2);
    }else{
        console.log(num1);
    }
}

gcdFunc(15, 5);
gcdFunc(2154, 458);