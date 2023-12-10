//validateEmail

function validateEmail(emailField){
    console.log("validateEmail is called");
    var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(emailField.value) == false)
    {
        alert('Invalid Email Address');
        return false;
    }
    else{
            alert('Thank you for contacting us ' +emailField.value);
    return true;
    }
}
            window.validateEmail = validateEmail;
function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
    alert("Name must be filled out");
    return false;
    }

}

