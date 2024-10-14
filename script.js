function btnclick(num){
    document.getElementById("screen").value+=num;
}
function clearDisplay(){
    document.getElementById("screen").value=""
}
function clickEqual(){
    var text=document.getElementById("screen").value;
    var result=eval(text);
    document.getElementById("screen").value=result;
}
