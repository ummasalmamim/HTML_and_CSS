//alert("Umma Salma Mim") -->popup dey

//document.write("UMMA SALMA MIM"); --> html er page a show korbe browser a

//let user1= prompt();  --> popup dise input nibe and console a output show korbe
//console.log(user1);


let user1 =prompt("Please enter the value of Number 1:"); //string akare thake input
let user2=prompt("Please enter the value of Number 2: ");

user1=parseInt(user1);
user2=parseInt(user2);

const Result1 = user1 + user2;
const Result2 = user1 - user2;
const Result3 = user1 * user2;
const Result4 = user1 / user2;
const Result5 = user1 % user2;

document.write("Number 1: "+ user1 + "<br>");
document.write("Number 2: "+ user2 + "<br>" +"<br>");

document.write("Sum: "+ Result1 + "<br>");
document.write("Sub: "+ Result2 + "<br>");
document.write("Mul: "+ Result3 + "<br>");
document.write("Div: "+ Result4 + "<br>");
document.write("Rem: "+ Result5 );





