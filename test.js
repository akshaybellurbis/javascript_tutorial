function myFunction(p1, p2) {
  return document.getElementById("dem").innerHTML =p1 * p2;
}
 function forlop()
    {
        var cars = ["BMW", "Volvo", "Saab", "Ford"];
var i, len, text;
for (i = 0, len = cars.length, text = ""; i < len; i++) {
  text += cars[i] + "<br>";
}
document.getElementById("demo").innerHTML = text;
    }
    
    function whilelop()
    {
      var text = "";
var i = 0;
while (i < 10) {
  text += "<br>The number is " + i;
  i++;
}
document.getElementById("demo1").innerHTML = text;  
    }
    function dowhilelop()
    {
        var text = ""
var i = 0;

do {
  text += "<br>do while loop value " + i;
  i++;
}
while (i < 10);  

document.getElementById("demo2").innerHTML = text;
    }
function myFuncti() {
  var hour = new Date().getHours(); 
  var greeting;
  if (hour < 18) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }
  document.getElementById("d").innerHTML = greeting;
}
    
    function myFunct()
    {
var day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("de").innerHTML = "Today is " + day;
        
    }

function myfun1(a,b)
    {
        var  x = a;

{  
  var x = b;
  
    document.getElementById("dem1").innerHTML = x;
}

document.getElementById("dem6").innerHTML = x;
    }
    
    function myfunc2(a,b)
    {
        let  x = a;

{  
  let x = b;
  
    document.getElementById("dem3").innerHTML = x;
}

document.getElementById("dem2").innerHTML = x;
    }
    
    function myfunct3(a,b)
    {
        const  x = a;

 {
  const x = b;
  
    document.getElementById("dem5").innerHTML = x;
 }

document.getElementById("dem4").innerHTML = x;
    }

function arth()
    {
        var a = 3;
var x = (100 + 50) * a;
document.getElementById("ddd").innerHTML = x;
    }
function assi()
    {
     var x = 14;
x %= 4;
document.getElementById("dd").innerHTML = x;
    }