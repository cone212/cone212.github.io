// TEXT ISPOD MENIA ISPIS

var nizFree = ["Free Returns", "In-Stor Pick up-Returns", "Free Shippping"];
var free = "";
for (var i = 0; i < nizFree.length; i++) {
    free += "<div class='free'><i class='fas fa-check'></i> <b>" + nizFree[i] + "</b></div>";

}
document.querySelector("#freee").innerHTML = free; //PROMENI U HTMLU

// PAYMENTS ISPIS

var ispis = "";
for (var i = 1; i <= 5; i++) {
    ispis += "<div class='blok slika" + i + "'><a href='paymants.html'></a></div > ";
}
document.getElementById("paymants").innerHTML = ispis;

window.onload = function () {

    document.getElementById("submitLogin").addEventListener("click", proveraLogin);
    document.getElementById("submitSignUp").addEventListener("click", proveraSingUp);
}

function proveraLogin() {

    var userName, reUserName, password, rePassword, arrayFalse, arrayTrue;

    userName = document.getElementById("tbUserName");
    password = document.getElementById("tbPassword");

    reUserName = /^  [A-z0-9]+ $/;
    rePassword = /^ [A-z0-9]+ $/;

    arrayFalse = [];
    arrayTrue = [];

    if (!reUserName.test(userName.value) && userName.valur == "") {
        arrayFalse.push(userName.value);
    }
    else {
        arrayTrue.push(userName.value);
    }

    if (!rePassword.test(password.value) && password.valur == "") {
        arrayFalse.push(password.value);
    }
    else {
        arrayTrue.push(password.value);
    }
}

function proveraSingUp() {

    var email, reEmail, password, rePassword, repeatPassword, arrayFalse, arrayTrue; ;

    email = document.getElementById("tbEmailSu");
    password = document.getElementById("tbPasswordSu");
    repeatPassword = document.getElementById("tbPasswordR");

    reEmail = /^[A-z]+\d*\@(gmail|hotmail|yahoo)\.(com)$/;
    rePassword = /^ [A-z0-9]+ $/;

    arrayFalse = [];
    arrayTrue = [];


    if (!reEmail.test(email.value)){
        arrayFalse.push(email.value);
    }
    else {
        arrayTrue.push(email.value);
    }

    if (!rePassword.test(password.value) && password.valur == "") {
        arrayFalse.push(password.value);
    }
    else {
        arrayTrue.push(password.value);
    }

    if (password.value != repeatPassword.value) {
        arrayFalse.push(repeatPassword.value);
        repeatPassword.style.borderColor = "red";
    }
    else {
        arrayTrue.push(repeatPassword.value);
        repeatPassword.style.borderColor = "initial";
    }
}
