function testLength(value, length, exactLength){
	if (value.length == length){
		exactLength = true;
	}
	else{
		exactlength = false;
	}
	return exactLength;
}

function testNumber(value){
	if (isNaN(value)){
		return false;
	}
	else{
		return true;
	}
}

function updateForm(control){
	if (control.value == "card"){
		var x = document.getElementById("p2");
		var y = document.getElementById("p1");
		if (x.style.display = "block"){
			x.style.display = "none";
			y.style.display = "block";
		}	
		else{
			x.style.display = "block";
			y.styel.display = "none";
		}
		document.getElementById("firstname").required = true;
		document.getElementById("lastname").required = true;
		document.getElementById("address").required = true;
		document.getElementById("city").required = true;
		document.getElementById("zip").required = true;
		document.getElementById("emailaddress").required = true;
		document.getElementById("nameoncard").required = true;
		document.getElementById("cardnumber").required = true;
		document.getElementById("cvv2cvc").required = true;
	}
	else{
		var x = document.getElementById("p1");
		var y = document.getElementById("p2");
		if (x.style.display = "block"){
			x.style.display = "none";
			y.style.display = "block";
		}	
		else{
			x.style.display = "block";
			y.style.display = "none";
		}
		document.getElementById("firstname").required = false;
		document.getElementById("lastname").required = false;
		document.getElementById("address").required = false;
		document.getElementById("city").required = false;
		document.getElementById("zip").required = false;
		document.getElementById("emailaddress").required = false;
		document.getElementById("nameoncard").required = false;
		document.getElementById("cardnumber").required = false;
		document.getElementById("cvv2cvc").required = false;
	}
}

function validateControl(control, name, length){
	if (name == "zip"){
		if ((testLength(control, length, false)) == false){	
			alert("Zip code must be five characters.");
			return false;
		}
		else {
			if ((testNumber(control)) == false){
				alert("Zip code must be a number.");
				return false;
			}
			else {
				return true;
			}	
		}
	}
	else {
		if ((testLength(control, length, false)) == false){
			alert("CVV2/CVN must be three characters.");
		}
		else {
			if ((testNumber(control)) == false){
				alert("CVV2/CVN must be a number.");
				return false;
			}
			else {
				return true;
			}	
		}	
	}
}

function validateCreditCard(value){
	var x = value.replace(/ +/g, "");
	if ((testNumber(x)) == false){
		alert("Card input must be a number.");
		return false;
	}
	else {
		var y = testLength(x, 16, false);
		if (y == true){
			var z = value.charAt(0);
			if (z == 6 || z == 5 || z == 4){
				return true;
			}	
		}	
		else {
			var a = testLength(x, 15, false);
			if (a == true){
				var b = value.charAt(0);
				if (b == 3){
					return true;
				}	
			}
			else {
				alert("invalid card number.");
				return false;
			}	
		}
	}
}

function validateDate(value){
	var date = new Date();
	var month = date.getMonth() + 1;
	var year = date.getFullYear();
	if (month < 10){
		month = "0" + month;
	}	
	date = year + "-" + month;
	
	if (value < date){
		alert("Invalid expiration date.");
		return false;
	}	
	else {
		return true;
	}
}

function validateEmail(value){
	var filter = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	if (filter.test(value)){
		return true;
	}
	else{
		return false;
	}	
}

function validateForm(){

	if ((document.getElementById("firstname").required) == true){
		if ((validateControl((document.getElementById("zip").value), "zip", 5) == true)
				&& ((validateEmail(document.getElementById("emailaddress").value)) == true)
				&& ((validateCreditCard(document.getElementById("cardnumber").value)) == true)
				&& ((validateControl((document.getElementById("cvv2cvc").value), "cvv2cvc", 3)) == true)
				&& ((validateState()) == true)
				&& ((validateDate(document.getElementById("expiration").value)) == true)){
			alert("Payment Submitted!");
		}
		else{
			alert("Incorrect payment information.");
		}	
	}	
	else{
		if (((validateEmail(document.getElementById("paypalemail").value)) == true)
			&& ((validatePassword((document.getElementById("pwd").value), 8)) == true)){
			alert("Payment Submitted!");
		}
		else {
			alert("Incorrect payment information.");
		}	
	}	
}

function validatePassword(value, minLength){
	var x = testLength(value, minLength, false);	
	if (x == true){
		return true;	
	}	
	else {
		var y = value.length;
		if (y > minLength){
			return true;
		}
		else{
			alert("Password must be 8 characters.");
			return false;
		}	
	}	
}

function validateState(){
	var x = document.getElementById("state").value;
	if (x == "Select State"){
		alert("Please select a state.");
		return false;
	}
	else {
		return true;
	}	
}	