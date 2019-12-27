var array = [];
var check;
var Email;
/**
  Login functionality
 */
function login() {
    /**
     Getting element from username input tag 
     */
    var email = document.getElementById('username');
    /**
     Getting element from password input tag
     */
    var pws = document.getElementById('password');
    /** 
     if user-email value is empty we show alert and stop the execution
     */
    if (email.value === '') {
        alert('please fill enter email ');
        email.value = '';
        pws.value = '';
        return false;
    }
    /**
     if password length is lessthan 6 characters  we show alert and stop execution
     */
    else if (pws.value.length < 6) {
        alert("please enter more than 6 characters");
        email.value = '';
        pws.value = '';
        return false;
    }
    /**
     if password value is empty we show alert and stop execution
     */
    else if (pws.value === '') {
        alert('please fill enter password');
        email.value = '';
        pws.value = '';
        return false;
    }
    /**
     here we print both uservalue and password value
     */
    else {
        console.log(email.value);
        console.log(pws.value);
    }
    /**
     here we take the count variable for how many times user value matching 
     if count is 0 user not available
     if count>0 user value is available
     */
    var count = 0;
    /**
     assigining array of values to i
     */
    for (var i = 0; i < array.length; i++) {
        /**
         if array of user-email is equals to signup email value
         */
        if (array[i].Email == email.value) {
            /**
             above condition satify count value increments and print uservalue
             */
            count++;
            console.log("Valid username")
            /**
             if array of password is equals to signup password
             */
            if (array[i].pass == pws.value) {
                /**
                 above condition satify print password
                 */
                console.log("success psw")
                /**
                 for valid details  we empty  email-value and password,then screen will be hidden .
                 */
                document.getElementById("Div1").style.display = "none";
                email.value = '';
                pws.value = '';
                check = '';
                document.getElementById('checkbox').checked = false;
            }
            /**
             if password value is invalid we show alert and stope execution
             */
            else {
                console.log("Inavlid password");
                email.value = '';
                pws.value = '';
                check = '';
                return false
            }
        }
        /**
         if user-value is invalid we show alert and stop execution
         */
        if (count === 0) {
            console.log("invalide username");
            email.value = '';
            pws.value = '';
            check = '';
            return false
        }
    }
}
/**
 Signup functionality
 */
function sign() {
    /**
     Getting element from firstName input tag
     */
    var firstName = document.getElementById('fname');
    /**
     Getting element from email input tag
     */
    var Email = document.getElementById('ema');
    /**
     Getting element from password input tag
     */
    var pass = document.getElementById('psw');
    /**
     Getting element from confirmpassword input tag
     */
    var confirmPsw = document.getElementById('confpassword');
    /**
     if firstname value is empty we show alert and stop execution
     */
    if (firstName.value === '') {
        alert('Please enter FirstName');
        firstName.value = '';
        Email.value = '';
        pass.value = '';
        confirmPsw.value = '';
        check = '';
        return false;
    }
    /**
     if email-value is empty we show alert and stop execution
     */
    else if (Email.value === '') {
        alert('Please enter Email');
        firstName.value = '';
        Email.value = '';
        pass.value = '';
        confirmPsw.value = '';
        check = '';
        return false;
    }
    /**
     if password length is less than 6 character we show alert and stop execution
     */
    else if (pass.value.length < 6) {
        alert("please enter more than 6 characters");
        firstName.value = '';
        Email.value = '';
        pass.value = '';
        confirmPsw.value = '';
        check = '';
        return false;
    }
    /**
     if password value is empty we show alert and stope execution
     */
    else if (pass.value === '') {
        alert('palease enter password')
        firstName.value = '';
        Email.value = '';
        return false;
    }
    /**
     if password is not equals to confirm password we show alert and stop execution
     */
    if (pass.value != confirmPsw.value) {
        alert("Please enter password and confirmpassword as same");
        return false;
    }
    /**
     above all values are correct we push values into array and empty all the fields
     */
    else {
        console.log(firstName.value);
        console.log(Email.value);
        console.log(pass.value);
        console.log(confirmPsw.value);
        array.push({ firstName: firstName.value, Email: Email.value, pass: pass.value, confirmPsw: confirmPsw.value, });
        console.log(array);
    }
    firstName.value = '';
    Email.value = '';
    pass.value = '';
    confirmPsw.value = '';
}
/**
 select the check box values
 */
function checkBox(event) {
    check = event.target.checked;
}
