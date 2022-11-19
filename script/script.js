/**
*
* script.js
* @author- Arshath
* @date- 13/11/2022
*/

var percentage = 5;
function onkey() {
    var bill =document.getElementById("bill-input").value;
    var peopleOf =document.getElementById("peason").value;
    var total = bill / peopleOf;
    document.getElementById("total-amount").innerHTML =total;
    var tipsPerperson = total /100 * percentage;
    document.getElementById("amount").innerHTML =tipsPerperson;
}











   






/*function unCheck() {
    document.getElementById("bill-input").value ="";
    document.getElementById("person").value ="";
    document.getElementById("total-amount").innerHTML ="";
    document.getElementById("amount").innerHTML ="";
}*/

    