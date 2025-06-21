alert("Pitman Java Script Learning");     //pop up window with a message
window.alert("Project1 expressions and alert");    //another way to create an alert
document.write("This is a JavaScript message written to the document.");   //write a message to the document
var Sent1 = "This is the beggining of the string with \" or \\ as a special character" + "\ "; //using \ to escape special characters
document.write("<br>");   //write a line break to the document
document.write(Sent1);  //write the variable A to the document
document.write("<br>");   //write a line break to the document
document.write("This is a first line." + "<br>" + "This is a second line." + "<br>");     //write two lines to the document
var Sent2 = "and this is the end of the string." + "<br>";   //using \ to escape special characters in a string
document.write(Sent2);      //write the variable B to the document
var Family = "Big family:", husband = "Bohumil", wife = "Maria";    //declaring variables for family members
document.write(Family + "\ " + husband + "\ and " + wife  + "<br>");      //write family members to the document
document.write(3+3);    //write the result of an expression to the document
document.write("<br>");   //write a line break to the document
function My_First_Function() {      //My first function, clikking the button will call this function
    var str = "PitMan Training ";    //string variable
    document.getElementById("Button_Text").innerHTML = str;     //change the text of the button to the string variable
}
document.write(Sent1 + Sent2);     //concatenate and write the variables Sent1 and Sent2 to the document