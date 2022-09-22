// form validation
function registerValidate(){
    var firstForm = document.forms['registerNewUser'];
    
    var first = firstForm.elements.first;
    if(first.value==""||first.value==null){
        return dry(first,"First name cannot be empty");
    }
    var last = firstForm.elements.last;
    if(last.value==""||last.value==null){
        return dry(last,"Last name cannot be empty");
    }
    var email =firstForm.elements.email;
    var atposition = email.value.indexOf("@");
    var dotposition = email.value.lastIndexOf(".");
    if(atposition<1 || dotposition<atposition+2 || dotposition+2>=email.value.length){
        return dry(email,"Please enter a valid email.");
    }
    var username = firstForm.elements.user;
    if(username.value==""||username.value==null){
       return dry(username,"Username cannot be empty");
    }
    if(username.value.length<4){
        return dry(username,"Username must be atleast 4 characters long.")
    }

    var password = firstForm.elements.pass;
    // console.log(password);
    var password2 =firstForm.elements.passcon;
    // console.log(password2);
    if(password.value.localeCompare(password2.value)!=0 || password.value.trim()==""||password.value==null){
        return dry(password,"Passwords don't match");
    }
    if(password.value.length<6){
        return dry(password,"Passwords must be atleast 6 characters long.");
    }
    var radioInp = document.getElementsByName("gen");
    var radioInpVal = false;
    var i=0;
    while(!radioInpVal&&i<radioInp.length){
        if(radioInp[i].checked){
            radioInpVal = true;
        }
        i++;
    }
    if(!radioInpVal){
        alert("Please select gender.");
        return radioInpVal;
    }
    var ddLi = document.getElementById("category");
    if(ddLi.selectedIndex==0){
        alert("Select appropriate category!");
        ddLi.focus();
        return false;
    }
}
// login form validation
function loginValidate(){
    var username = document.getElementById("userLogin").value;
    var password = document.getElementById("passLogin").value;
    if(username==""||username==null){
        alert("Username cannot be empty");
        return false;
    }
    if(username.length<4){
        alert("Username is too short");
        return false;
    }
    if(password.length<6){
        alert("Password must be atleast 6 characters long.");
        return false;
    }
}

function dry(input, message)
{
    const formField = input.parentElement;
    const error = formField.querySelector('small');
    error.textContent = message;
    input.focus();
    return false;
}
// onreset event
function confirmReset(){
    let result = window.confirm('Are you sure you want to reset form?');
    return result;
}

/* document.body.addEventListener('load',checkCookies());
document.body.addEventListener('load',pageLoaded());

function checkCookies(){
    let txt = "";
    if (navigator.cookieEnabled == true) {
        txt = "enabled.";
    } else {
        txt = "disabled.";
    }
    alert('Cookies are '+txt);
}

function pageLoaded(){
    console.log('Page loaded successfully');
} */

