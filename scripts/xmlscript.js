// REF: https://jsfiddle.net/jmusfs9v/3/

function downloadData(contentType,data,filename){
    var link=document.createElement("A");
    link.setAttribute("href",encodeURI("data:"+contentType+","+data));
    link.setAttribute("style","display:none");
    link.setAttribute("download",filename);
    document.body.appendChild(link); //needed for firefox
    console.log(link.outerHTML);
    link.click();
    setTimeout(function(){
        document.body.removeChild(link);
    },1000);
 }



 var form = document.getElementById("myform");
function handleForm(event) { 
    event.preventDefault();
    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("cpassword").value = "";

    document.getElementById("nField").innerHTML = "";
    document.getElementById("n1Field").innerHTML = "";
    document.getElementById("eField").innerHTML = "";
    document.getElementById("pField").innerHTML = "";
    document.getElementById("cpField").innerHTML = "";
 } 

form.addEventListener('submit', handleForm);

 var xmldata = ['<?xml version="1.0"?>'];
 xmldata.push("<?xml-stylesheet type='text/css' href='https://hs05888.github.io/input-Form-CS370/styles/xmlstyles.css'?>");

 xmldata.push("<form>");
 
 function addToXML(){
    var form = document.getElementById("myform");
    var inputs=form.elements;

    xmldata.push('<user>')
    for(var i=0; i<inputs.length; i++){	
        if (inputs[i].name && inputs[i].name != "cpassword")  {
        xmldata.push(` <${inputs[i].name}> ${inputs[i].value} </${inputs[i].name}>`);
        }
    }
    xmldata.push('</user>')
}

 function download(){    
    xmldata.push("</form>");
    var data = xmldata.join('\n');
    console.log(data);
    downloadData("text/xml",data,"export.xml");
 }