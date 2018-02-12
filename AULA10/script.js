function adicionarIngrediente(){
	
	var ing = document.getElementById('ingredientes').value;

	var listahtml = document.getElementById("lista").innerHTML;

	listahtml = "<li>"+ing+"</li>" + listahtml;

	//TEMABÉM DARIA CERTO DESSE JEITO
	//lista.innerHTML = listahtml;

	document.getElementById('lista').innerHTML = listahtml;
}