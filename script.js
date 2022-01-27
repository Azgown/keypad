let code = document.getElementById('mvar');
let codesecret = 2548;
let i= 5;
let button = document.getElementsByClassName('btn');
let pad = document.getElementById('pad');

if(codesecret.lenght == code.lenght){
document.getElementsById('check').disabled = false;
}

function addNumber(element){
	code.value = document.getElementById('mvar').value+element.value;
}

function reset(){
	code.value = "";
}

function checkCode(){
	if(code.value == codesecret){
		alert('you win !');
		pad.style.display = "none";
	}else{
		i--;
		if(i > 0){
			alert('try again,' + i + ' try');
			code.value = "";
		}else {
			alert('you loose, Looser !');
			pad.style.display = "none";
			code.value = "";
		}
	}
}
