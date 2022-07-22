function contactFormValidate (event) {
    // console.log("sfhsdfjsdjk");
    const form = document.forms["contactForm"];
    const name = form.elements.name;
    if(name.value==""||name.value==null){
        return dry(name,"Name cannot be empty");
    }
    const email = form.elements.email;
    const dotPos = email.value.lastIndexOf(".");
    const atPos = email.value.indexOf("@");
    if(atPos<1 || dotPos<atPos+2 || dotPos+2>=email.value.length){
        return dry(email,"Invalid Email");
    }
    else{
        event.preventDefault();
        return true;
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

// onblur event
function changeBlur(id){
    id.value = id.value.toLowerCase();
}

function mouseOver(){
    let cust = document.getElementsByClassName('test_main')[0].children[0];
    console.log('mouse over '+cust.style.backgroundColor);
    cust.style.backgroundColor = "#b2a4ed";
}

function mouseOut(){
    console.log('mouse out');
    let cust = document.getElementsByClassName('test_main')[0].children[0];
    cust.style.backgroundColor = "#d2c7ff";

}

function mouseDown(id) {
 id.style.color = "blue";
}

function mouseUp(id) {
  id.style.color = 'inherit';
}

document.getElementById('navContact').addEventListener('dblclick',setFocus);
function setFocus(){
    document.getElementById('nameInput').focus();
}