function isLeapYear(year){
    const reminder = year % 4;
if (reminder==0){
    //console.log("This is a Leap year");
    return true;
}
else{
    //console.log("This is not a Leap Year");
    return false;
}
}
const year =2024;
var leapYear1= isLeapYear(year);
console.log(leapYear1);
