function verificar (){

	var n1 = document.getElementById("n1").innerHTML;
	var n2 = document.getElementById("n2").value;

	if (n1 == n2){
		alert("VOCÊ ACERTOU O NÚMERO");

	}else {
		alert ("VOCÊ ERROU O NÚMERO");
	}

	resetar();

}

function resetar (){

	document.getElementById("n2").value = "";

	var r = Math.floor(Math.random() * 100); //MATH FLOOR ARREDONDA O NÚMERO - MATH RANDOM GERA UM NÚMERO ALEATÓRIO E O * 100 É PARA GERAR UM NÚMERO ENTRE 0 A 100
	document.getElementById("n1").innerHTML = r;
}