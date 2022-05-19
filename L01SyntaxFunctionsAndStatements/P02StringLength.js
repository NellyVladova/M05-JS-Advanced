function strLength(str1, str2, str3){
    let totalLength = str1.length + str2.length + str3.length;
    let avgLength = Math.round(totalLength / 3);

    console.log(totalLength);
    console.log(avgLength);
}

strLength('chocolate', 'ice cream', 'cake');
strLength('pasta', '5', '22.3');