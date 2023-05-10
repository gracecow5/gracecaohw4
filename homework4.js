function fnameValidation(){
    fname = document.getElementById('fname').value;
    var namePattern = /^[A-Za-z'-]+$/;

    if (fname == ''){
        document.getElementById("fname-error").innerHTML = "First name must not be empty.";
        return false;
    }else if (fname != ''){
        if(!fname.match(namePattern)){
            document.getElementById("fname-error").innerHTML = "Letters, apostrophes, and dashes only";
            return false;
        }else if(fname.length < 1){
            document.getElementById("fname-error").innerHTML = "First name must contain at least 1 character";
            return false;
        }else if(fname.length > 30){
            document.getElementById("fname-error").innerHTML = "First name must not exceed 30 characters";
            return false;
        }else {
            document.getElementById("fname-error").innerHTML = ""; 
            return true;
        }
    }
}

function minitialValidation() {
  const minitial = document.getElementById("minitial").value.trim();
  const initialPattern = /^[A-Z]{0,1}$/;

  if (!initialPattern.test(minitial)) {
    document.getElementById("minitial-error").innerHTML =
      "Middle initial must be a single capital letter.";
    return false;
  } else {
    document.getElementById("minitial-error").innerHTML = "";
    return true;
  }
}

function lnameValidation() {
    lname = document.getElementById('lname').value;
     var lnamePattern = /^[A-Za-z'-]+$/;
 
     if (lname == '') {
         document.getElementById("lname-error").innerHTML = "Last name must not be empty.";
         return false;
     }else if (lname!= '') {
        if (!lname.match(lnamePattern)) {
             document.getElementById("lname-error").innerHTML = "Letters, apostrophes, and dashes only";
             return false;
        }else if (lname.length < 1) {
             document.getElementById("lname-error").innerHTML = "Last name must contain at least 1 character";
             return false;
        }else if (lname.length > 30) {
             document.getElementById("lname-error").innerHTML = "Last name must not exceed 30 characters";
             return false;
        }else {
             document.getElementById("lname-error").innerHTML = "";
             return true;
        }
     }
 }
function validateDate(){
    dateInput = document.getElementById('dob');
    var date = new Date(dateInput.value);
    var maxAge = new Date().setFullYear(new Date().getFullYear() - 120);
    var error = document.getElementById("date-error");

    if (date > new Date() || date < new Date(maxAge)){
        error.innerHTML = "Please enter a date that is not in the future or more than 120 years ago";
        dateInput.value = '';
        return false;
    }else {
        error.innerHTML = '';
        return true;
    }
}

function ssnValidation() {
  const ssnInput = document.getElementById("ssn");
  let ssn = ssnInput.value;
  if (ssn.trim() === "") {
    document.getElementById("ssn-error").innerHTML = "Field must not be empty.";
    return false;
  }
  const cleaned = ssn.replace(/\D/g, "");
  const socialPattern = /^\d{9}$/;
  if (!socialPattern.test(cleaned)) {
    document.getElementById("ssn-error").innerHTML =
      "Must only contain numbers and be 9 digits";
    return false;
  }
  const formattedSocial =
    cleaned.substring(0, 3) +
    "-" +
    cleaned.substring(3, 5) +
    "-" +
    cleaned.substring(5);
  ssnInput.value = formattedSocial;
  document.getElementById("ssn-error").innerHTML = "";
  return true;
}

function phoneValidation() {
    const phoneNumberInput = document.getElementById('phonenumber');
    let phone = phoneNumberInput.value;
    const cleaned = ('' + phone).replace(/\D/g, '');
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(cleaned)) {
        document.getElementById("phoneerror").innerHTML = "Must be a valid phone number (XXX) XXX-XXXX";
        return false;
    }
    const formattedPhone = '(' + cleaned.substring(0, 3) + ') ' + cleaned.substring(3, 6) + '-' + cleaned.substring(6);
    phoneNumberInput.value = formattedPhone;
    document.getElementById("phoneerror").innerHTML = "";
    return true;
}

function validateZipCode() {
  const zipInput = document.getElementById("zipcode").value;
  const zipRegex = /^\d{5}(-\d{4})?$/;

  return zipRegex.test(zipInput);
}
const zipInput = document.getElementById("zipcode");
const zipError = document.getElementById("ziperror");

zipInput.addEventListener("input", () => {
  let zipValue = zipInput.value.trim();
  const isValidZip = validateZipCode(zipValue);
  if (isValidZip) {
    zipValue = zipValue.slice(0, 5);
    zipInput.value = zipValue;

    zipInput.setCustomValidity("");
    zipError.innerHTML = "";
  } else {
    zipInput.setCustomValidity(
      "Must enter a valid zip code (5 digits i.e. 12345).");
    zipError.innerHTML =
      "Must enter a valid zip code (5 digits i.e. 12345).";
  }
});


function emailValidation(){
    uemail = document.getElementById('email').value;
    var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (uemail == ''){
        document.getElementById("email-error").innerHTML = "Email address must not be empty.";
        return false;
    }else if(!uemail.match(emailPattern)){
        document.getElementById("email-error").innerHTML = "Email address must be valid";
        return false;
    }else {
        document.getElementById("email-error").innerHTML = "";
        return true;
    }
}

function sliderValidation(x){
    document.getElementById('slidervalue').innerHTML = x;
}


function userValidation() {
    var input = document.getElementById("user");
    input.value = input.value.toLowerCase();

    var user = input.value;
    var userPattern = /^[^0-9]/;
    var unamePattern = /^\S+[A-Za-z-][A-Za-z0-9-]+$/;
    var error = document.getElementById('usererror');

    if (user == '') {
        error.innerHTML = "Must not be empty.";
        return false;
    } else if (!user.match(userPattern)) {
        error.innerHTML = "UserID must not start with a number";
        return false;
    } else if (!user.match(unamePattern)) {
        error.innerHTML = "UserID must not include spaces or special characters";
        return false;
    } else if (user.length < 5) {
        error.innerHTML = "UserID must be at least 5 characters";
        return false;
    } else if (user.length > 20) {
        error.innerHTML = "UserID must not exceed 20 characters";
        return false;
    } else {
        error.innerHTML = '';
        return true;
    }
}
 
function passValidation() {
    var pass = document.getElementById("pass").value;
    var user = document.getElementById("user").value;
    var passPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/;
    var error = document.getElementById("passerror");

    if (pass == "") {
      error.innerHTML = "Field must not be empty.";
      return false;
    } else if (pass == user) {
      error.innerHTML = "Password must not match UserID";
      return false;
    } else if (pass != "") {
      if (!pass.match(passPattern)) {
        error.innerHTML = "Password must contain 1 uppercase, 1 lowercase, 1 special character, and 1 digit";
        return false;
      } else if (pass.length < 8) {
        error.innerHTML = "Password must be at least 8 characters";
        return false;
      } else if (pass.length > 30) {
        error.innerHTML = "Password must not exceed 30 characters";
        return false;
      } else {
        error.innerHTML = "";
        return true;
      }
    }
  }

function pass2Validation() {
    pass = document.getElementById("pass").value;
    pass2 = document.getElementById("pass2").value;
  
    if (!pass2) {
      document.getElementById("pass2error").innerHTML =
        "Please confirm your password";
      return false;
    }
  
    if (pass2 !== pass) {
      document.getElementById("pass2error").innerHTML =
        "Confirm Password does not match password";
      return false;
    } else if (pass2 == pass) {
      document.getElementById("pass2error").innerHTML = "";
      return true;
    }
  }

function getdata1() {
  var formcontents = document.getElementById("signup");
  var formoutput;
  var datatype;
  var i;
  formoutput = "<table class='output'><th>Dataname</th><th>Type</th><th>Value</th>";
  for (i = 0; i < formcontents.length; i++) {
            console.log("item: "+i+" "+formcontents.elements[i].name+" = "+formcontents.elements[i].value);
            
              datatype = formcontents.elements[i].type;
              switch (datatype) {
                case "checkbox":
                  if (formcontents.elements[i].checked) {
                    formoutput = formoutput + "<tr><td align='right'>"+formcontents.elements[i].name+"</td>";
                    formoutput = formoutput +"<td align='right'>"+ datatype + "</td>";
                    formoutput = formoutput +"<td class='outputdata'>Checked</td></tr>";
                  }
                  break;
               case "radio":
                    if (formcontents.elements[i].checked) {
                      formoutput = formoutput + "<tr><td align='right'>"+formcontents.elements[i].name+"</td>";
                      formoutput = formoutput +"<td align='right'>"+ datatype + "</td>";
                      formoutput = formoutput +"<td class='outputdata'>"+ formcontents.elements[i].value+"</td></tr>";
                    }
                  break;
                case "button": case "submit": case "reset":
                  break;
                default:
                  formoutput = formoutput + "<tr><td align='right'>"+formcontents.elements[i].name+"</td>";
                  formoutput = formoutput +"<td align='right'>"+ datatype + "</td>";
                  formoutput = formoutput +"<td class='outputdata'>"+ formcontents.elements[i].value+"</td></tr>";
                }
            

  }

   if (formoutput.length>0) { 
      formoutput = formoutput + "</table>";
      document.getElementById("outputformdata").innerHTML = formoutput;
   }
}
function getData() {
    var form = document.getElementById("Data");

    var outputTableBody = document.getElementById("outputTableBody");

    var row, dataNameCell, valueCell;
    outputTableBody.innerHTML = "";

    for (var i = 0; i < form.elements.length; i++) {

    if (form.elements[i].value !== "") {

    row = document.createElement("tr");

    dataNameCell = document.createElement("td");

    valueCell = document.createElement("td");

    dataNameCell.textContent = form.elements[i].name;

    if (form.elements[i].type === "checkbox") {

    valueCell.textContent = form.elements[i].checked ? "checked" : "unchecked";

    } else if (form.elements[i].type === "radio") {

    if (form.elements[i].checked) {

    valueCell.textContent = form.elements[i].value;
    }
    } else {

        valueCell.textContent = form.elements[i].value;

        }

    row.appendChild(dataNameCell);

    row.appendChild(valueCell);

    outputTableBody.appendChild(row);
    }
    }
} 
const d = new Date() ; 
  let text = d. toLocaleDateString(); document. getElementById ("today"). innerHTML = text;

  const validations = [
    fnameValidation,
    minitialValidation,
    lnameValidation,
    ssnValidation,
    validateZipCode,
    emailValidation,
    validateDate,
    userValidation,
    phoneValidation,
    passValidation,
    pass2Validation,
  ];
  function checkValidations() {
    for (let func of validations) {
      console.log(func(), func.name)
  
      if (!func()) {
        document.getElementById("suberror").innerHTML =
          "Please fix your fields and re-submit";
        return false;
      }
    }
    return true;
  }
  
window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
