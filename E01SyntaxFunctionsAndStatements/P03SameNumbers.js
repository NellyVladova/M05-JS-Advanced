function sameNumbers(number){
    let inputStr = String(number);
    let isSame = true;
    let sum = 0;
    let firstDigit = inputStr[0];

    for (let i = 0; i< inputStr.length; i++) {
      let currentDigit =+ inputStr[i];
      sum += currentDigit;
      if(firstDigit != currentDigit){
          isSame = false;
      }
    }
    console.log(isSame);
    console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);