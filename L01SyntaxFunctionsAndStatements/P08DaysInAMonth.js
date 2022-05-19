function getDaysInMonth(month, year){
    const days = new Date(year, month, 0).getDate();
    
    console.log(days);
}

getDaysInMonth(1, 2012);
getDaysInMonth(2, 2021);