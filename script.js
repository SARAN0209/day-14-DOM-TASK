var labelFname= createlabel("label","for","FName","First Name");
var b1= linebreak("br");
var inputFname= inputfield("input","type","Name","id","FName");
var b2= linebreak("br");
var labelLname= createlabel("label","for","Lname","Last Name");
var b3= linebreak ("br");
var inputLname= inputfield("input","type","name","id","Lname");
var b4= linebreak("br");
var labelemail= createlabel("label","for","email","Email");
var b5= linebreak("br");
var inputemail= inputfield("input","type","email","id","email");
var b6= linebreak("br")
var labelpnumer= createlabel("label","for","pnumber","Phone Number");
var b7= linebreak("br");
var inputpnumber= inputfield("input","type","number","id","pnumber");
var b8= linebreak("br");
document.body.append(labelFname,b1,inputFname,b2,labelLname,b3,inputLname,b4,labelemail,b5,inputemail,b6,labelpnumer,b7,inputpnumber,b8);

function createlabel(tagname,atrrname,atrrvalue,content){
    var label=document.createElement(tagname);
    label.setAttribute(atrrname,atrrvalue);
    label.innerHTML=content;
    return label;
}
function inputfield(tagname,atrrname,atrrvalue,atrrname1,atrrvalue1){
    var input=document.createElement(tagname);
    input.setAttribute(atrrname,atrrvalue);
    input.setAttribute(atrrname1,atrrvalue1);
    return input;
}
function linebreak(breaker){
    var b1=document.createElement(breaker);
    return b1;
}