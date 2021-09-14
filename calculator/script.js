

var choices = prompt(" [1] for Addition\n [2] for Subtraction \n [3] for multiplacation \n [4] division");

var x = prompt("Enter First Nuumber");
var y = prompt("Enter Second Nuumber");

var k = parseInt(x);
var j = parseInt(y);

if (choices == 1){

    function add(x,y){return x + y}
    var solve = k + j;
    alert(solve)
}
else if (choices == 2){
    function subtract(x,y){return x - y}
    var solve = k - j;
    alert(solve);
}
else if (choices == 3){
    function multiply(x,y){return x * y}
    var solve = k * j;
    alert(solve);
}
else if (choices == 4){
    function division(x,y){return x / y}
    var solve = k / j;
    alert(solve);
}