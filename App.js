var array = [];
var arr = [];
var check;
function login() {
    var email1 = document.getElementById('email');
    var pws = document.getElementById('password');
    if (email1.value === '') {
        alert('please fill enter email ');
        email1.value = '';
        pws.value = '';
        return false;
    }
    else if (pws.value.length < 6) {
        alert("please enter more than 6 characters");
        email1.value = '';
        pws.value = '';
        return false;
    }
    else if (pws.value === '') {
        alert('please fill enter password');
        email1.value = '';
        pws.value = '';
        return false;
    }
    else {
        console.log(email1.value);
        console.log(pws.value);
        array.push({ email: email1.value, password: pws.value, checkbox: check });
        console.log(array);
    }
    email1.value = '';
    pws.value = '';
    check = '';
    document.getElementById('checkbox').checked = false;
}
function sign() {
    var firstName = document.getElementById('fname');
    var Email = document.getElementById('eml');
    var password = document.getElementById('psw');
    var confirmPsw = document.getElementById('confpassword');
    if (firstName.value === '') {
        alert('Please enter FirstName');
        firstName.value = '';
        Email.value = '';
        password.value = '';
        confirmPsw.value = '';
        check = '';
        return false;
    }
    else if (Email.value === '') {
        alert('Please enter Email');
        firstName.value = '';
        Email.value = '';
        password.value = '';
        confirmPsw.value = '';
        check = '';
        return false;
    }
    else if (password.value.length < 6) {
        alert("please enter more than 6 characters");
        firstName.value = '';
        Email.value = '';
        password.value = '';
        confirmPsw.value = '';
        check = '';
        return false;
    }
    else if (password.value === '') {
        alert('palease enter password')
        firstName.value = '';
        Email.value = '';
    }
    if (password.value != confirmPsw.value) {
        alert("Please enter password and confirmpassword as same");
    } else {
        console.log(firstName.value);
        console.log(Email.value);
        console.log(password.value);
        console.log(confirmPsw.value);
        arr.push({ firstName: firstName.value, Email: Email.value, password: password.value, confirmPsw: confirmPsw.value, checkbox: check });
        console.log(arr);
    }
    firstName.value = '';
    Email.value = '';
    password.value = '';
    confirmPsw.value = '';
    check = '';
    window.open('signup.html','_blanck');
}
function checkbox(event) {
    check = event.target.checked;
}
