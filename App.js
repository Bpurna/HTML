var array = [];
var check;
var Email;
function login() {
    var email = document.getElementById('username');
    var pws = document.getElementById('password');
    if (email.value === '') {
        alert('please fill enter email ');
        email.value = '';
        pws.value = '';
        return false;
    }
    else if (pws.value.length < 6) {
        alert("please enter more than 6 characters");
        email.value = '';
        pws.value = '';
        return false;
    }
    else if (pws.value === '') {
        alert('please fill enter password');
        email.value = '';
        pws.value = '';
        return false;
    }
    else {
        console.log(email.value);
        console.log(pws.value);
    }
    var count=0;
    for (var i = 0; i < array.length; i++) {
        if (array[i].Email == email.value) {
            count++;
            console.log("Valid username")
            if (array[i].pass == pws.value) {
                console.log("success psw")
            }
            else {
                console.log("Inavlid password")
            }
        }
       if(count===0) {
            console.log("invalide username")
        }
    }
    document.getElementById("Div1").style.display = "none"
    // if (document.getElementById('Div1')) {

    //     if (document.getElementById('Div1').style.display == 'none') {
    //         document.getElementById('Div1').style.display = 'block';
    //         document.getElementById('Div2').style.display = 'none';
    //     }
    //     else {
    //         document.getElementById('Div1').style.display = 'none';
    //         document.getElementById('Div2').style.display = 'block';
    //     }
    // }
    email.value = '';
    pws.value = '';
    check = '';
    document.getElementById('checkbox').checked = false;
 
}
function sign() {
    var firstName = document.getElementById('fname');
    var Email = document.getElementById('ema');
    var pass = document.getElementById('psw');
    var confirmPsw = document.getElementById('confpassword');
    if (firstName.value === '') {
        alert('Please enter FirstName');
        firstName.value = '';
        Email.value = '';
        pass.value = '';
        confirmPsw.value = '';
        check = '';
        return false;
    }
    else if (Email.value === '' ) {
        alert('Please enter Email');
        firstName.value = '';
        Email.value = '';
        pass.value = '';
        confirmPsw.value = '';
        check = '';
        return false;
    }
    else if (pass.value.length < 6) {
        alert("please enter more than 6 characters");
        firstName.value = '';
        Email.value = '';
        pass.value = '';
        confirmPsw.value = '';
        check = '';
        return false;
    }
    else if (pass.value === '') {
        alert('palease enter password')
        firstName.value = '';
        Email.value = '';
    }
    if (pass.value != confirmPsw.value) {
        alert("Please enter password and confirmpassword as same");
    } 
    else {
        console.log(firstName.value);
        console.log(Email.value);
        console.log(pass.value);
        console.log(confirmPsw.value);
        array.push({ firstName: firstName.value, Email: Email.value, pass: pass.value, confirmPsw: confirmPsw.value,  });
        console.log(array);
    }
    firstName.value = '';
    Email.value = '';
    pass.value = '';
    confirmPsw.value = '';
}
function checkBox(event) {
    check = event.target.checked;
}
