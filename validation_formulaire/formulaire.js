
function submitUserInputs(){
    var bienvenue = document.querySelector(".bienvenue")

    if (validationName() && validationPossword() && validationMail()){
        bienvenue.style.transform="none"
    }

    // validationName()
    // validationPossword()
    // validationMail()
}

// __________Name_______________________

function validationName(){
    var input = document.querySelector('input[id="name"]')
    var name = document.getElementById("name").value;
    var messageError = document.querySelector(".msg-err-name");
    var nomFormat = /^([A-Z])+/;

    if(name.match(nomFormat))
	{
		input.style.border="1px solid green"
        return true
	}
	else
	{
		input.style.border="1px solid red"
        messageError.style.display="flex"
        return false
	}
}

// ______________Password___________________

function  validationPossword(){
    var input = document.querySelector('input[id="password"]')
    var password = document.getElementById("password").value;
    var passwordFormat = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/;
    var messageErrorP = document.querySelector(".msg-err-password");
    /*
        (?=.*[0-9])        // doit contenir au moins un chiffre
        (?=.*[a-z])       // doit contenir au moins une minuscule
        (?=.*[A-Z])       // doit contenir au moins une majuscule
    */

    if(password.match(passwordFormat) && password.length >= 8){
        
        input.style.border="1px solid green"
        return true
    }
    else{
        input.style.border="1px solid red"
        messageErrorP.style.display="flex"
        return false
    }
}

// ________________Mail______________________________

function validationMail(){
    var input = document.querySelector('input[id="email"]');
    var mail = document.getElementById("email").value;
    var messageErrorM = document.querySelector(".msg-err-mail");
    var mailFormat = /(?=.*[@])(?=.*[.])/;

    if(mail.match(mailFormat)){
        input.style.border="1px solid green"
        return true
    }
    else{
        input.style.border="1px solid red"
        messageErrorM.style.display="flex"
        return false 
    }

}