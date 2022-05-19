function circleArea(param){
    let result;
    if(typeof param === 'number'){
        result = param ** 2 * Math.PI;
        console.log(result.toFixed(2));
    }else{
        console.log(`We can not calculate the circle area, because we receive a ${typeof param}.`);
    }
}

circleArea('asdf');
circleArea(5);