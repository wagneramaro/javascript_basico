/*

FORMA SIMPLES DE FAZER OPERAÇÕES

var x = 10 + 20;
var y = 10 / 5;
alert(x + " " + y);

document.write(y);

*/

function somar() {


	var  campo1 = /*FUNÇÃO QUE TRANSFORMA O VALOR DIGITADO NO INPUT EM INTEIRO*/parseInt(document.getElementById("campo1").value);

	var  campo2 = parseInt(document.getElementById("campo2").value);


	alert("Campo 1: "+ campo1);
	alert("Campo 2: "+ campo2);

	var soma = campo1 + campo2;

	alert("Resultado da soma: "+ soma);


}