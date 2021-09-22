
function NotisAlpha(str) {
    var code, i, len;
    for (i = 0; i < str.length; i++) {
      code = str.charCodeAt(i);
      if (!(code > 64 && code < 91) && // upper alpha (A-Z)
          !(code > 96 && code < 123)) { // lower alpha (a-z)
        return true;
      }
    }
    return false;
  };

function checkFirstName() {
    var str = document.getElementById("firstname").value;

    if (str == "") {
        document.getElementById('nField').innerHTML = 'Name field cannot be empty';
    }

    else if  ( NotisAlpha(str) ) {
        document.getElementById('nField').innerHTML = 'Name must only contain alpha characters!';
    }
    else {
        document.getElementById('nField').innerHTML = 'Perfect; Name does not contain any non-alpha characters';
    }
} 

function checkLastName() {
    var str = document.getElementById("lastname").value;

    if (str == "") {
        document.getElementById('n1Field').innerHTML = 'Name field cannot be empty';
    }

    else if  ( NotisAlpha(str) ) {
        document.getElementById('n1Field').innerHTML = 'Name must only contain alpha characters!';
        return false;
    }
    else {
        document.getElementById('n1Field').innerHTML = 'Perfect;  Name does not contain any non-alpha characters';
        return true;
    }
} 


function checkEmail() {
    var str = document.getElementById("email").value;
    if (str == "") {
        document.getElementById('eField').innerHTML = 'Email field cannot be empty';
    }

    else if (!(str.includes('@'))) {
        document.getElementById('eField').innerHTML = 'Email must  contain @';
        return false;
    }
    else {
        document.getElementById('eField').innerHTML = 'Perfect; Email contains a \'@\' ';
        return true;

    }
}



function checkPassword() {
    var str = document.getElementById("password").value;

    if (str == "") {
        document.getElementById('pField').innerHTML = 'Password field cannot be empty';
    }

    else if (str.length < 8 ) {
        document.getElementById('pField').innerHTML = 'password must be 8 letters atleast';
        return false;
    }
    else {
        document.getElementById('pField').innerHTML = 'Perfect; Password length is greater than 8';
        return true;
    }
}

function checkcPassword() {
    var str = document.getElementById("cpassword").value;
    var str2 = document.getElementById("password").value;

    if (str == "") {
        document.getElementById('cpField').innerHTML = 'Password field cannot be empty';
    }

    else if (str != str2) {
        document.getElementById('cpField').innerHTML = 'password must match';
        return false;
    }
    else {
        document.getElementById('cpField').innerHTML = 'Perfect; Passwords are matching';
        return true;
    }   
}


