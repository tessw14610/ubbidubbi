function myFunction() {
var hello = "hello";
//var res = str.charAt(1)
var i = 0;
var text = "";

//document.getElementById("demo").innerHTML = res;

while (hello[i]){

if (hello[i] == "a" ||hello[i] == "e" ||hello[i] == "i" ||hello[i] == "o" ||hello[i] == "u" ){
text += "ub" + hello[i];
    i++;

}
else{
  text += hello[i];
     i++;
}
}
document.getElementById("demo").innerHTML = text;
}
