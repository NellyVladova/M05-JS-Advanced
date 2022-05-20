function getPreviousDay(year, month, day){
    let date = new Date(`${year}-${month}-${day}`);

    date.setDate(date.getDate() - 1);

    const finalYear = date.getFullYear();
    const finalMonth = date.getMonth() + 1;
    const finalDate = date.getDate();

    console.log(`${finalYear}-${finalMonth}-${finalDate}`);
}

getPreviousDay(2016, 9, 30);
getPreviousDay(2016, 10, 1);