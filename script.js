const age = 18;
const isFemale = true;
const driverStatus = 'bob';

if (age >= 18) {
    console.log("You are allowed to enter, Please enjoy in this pub")
} else {
    console.log("You are too young please kindly leave this pub")
}

if (isFemale && age >= 18) {
    console.log("enjoy the ladies night")
} else if (isFemale && age < 18) {
    console.log("I see you are a female but too young to drink")
} else {
    console.log("you are a man don't pretend please that you are a woman!!")
}
if (driverStatus == 'bob') {
    console.log("you are allowed to drive")
} else {
    console.log("please don't drive")
}