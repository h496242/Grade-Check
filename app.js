var english = Number(prompt("Enter marks for English !"));
var accounting = Number(prompt("Enter marks for Accounting !"));
var islamiat = Number(prompt("Enter marks for Islamiat !"));
var urdu = Number(prompt("Enter marks for Urdu !"));
var mathematisc = Number(prompt("Enter marks for Mathematisc !"));

var total = english + accounting + islamiat + urdu + mathematisc;
var average = total / 5;

var grade;
if (average >= 90) {
    grade = "A";
}
else if (average >= 80) {
    grade = "B";
}
else if (average >= 70) {
    grade = "C";
}
else if (average >= 60) {
    grade = "D";
}
else {
    grade = "Fail";
}

alert("Total Marks: " + total + "\nAverage Marks: " + average + "\nGrade: " + grade);
alert("HASNAIN Roll No 267233")