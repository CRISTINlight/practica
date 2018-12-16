function inicio() {

	var i;
	var j;
	var cajastr="caja";
	var contenedorstr= "drag_and_drop";
	var str1;
	var str2;
	var destino;
	var elemento;
	if(localStorage.length !== null){
		for(j = 1; j <= 14; j++){
			for( i = 1; i <= 12; i++) { 
				str1 = cajastr.concat(String(i)," ",contenedorstr,String(j));
				
				if(localStorage.getItem(str1) !== null){
					console.log(str1);
					//Añadir ese div al contenedor
					str2= contenedorstr.concat(String(j));
					str1= cajastr.concat(String(i));
					elemento = document.getElementById(str1);
					destino = document.getElementById(str2);
					destino.appendChild(elemento);
				}
			  
			}
		}
	}
}

function dragstart(caja, event) {
    // el elemento a arrastrar
    document.getElementById(caja.id).className = "in";
    event.dataTransfer.setData('Data', caja.id);
}

function drag(caja, event) {
    return false;
}

function dragend(caja, event) {
    document.getElementById(caja.id).className = "out";
    return false;
}

function dragenter(target, event) {
    document.getElementsByClassName("container").className = "inContainer";
    return false;
}

function dragleave(target, event) {
    document.getElementsByClassName("container").className = "outContainer";
    return false;
}

function dragover(event) {
    event.preventDefault();

    return false;
}

function drop(target, event) {
    // obtenemos los datos
    var caja = event.dataTransfer.getData('Data');
	var id_contenedor = event.target.getAttribute('id');
	var nombre_key = caja.concat(" ",id_contenedor);
    document.getElementsByClassName("container").className = "outContainer";
    // agregamos el elemento de arrastre al contenedor
    target.appendChild(document.getElementById(caja));
	//lo guardamos en localstorage on key= "cajaX drag_and_dropX"
	localStorage.setItem(nombre_key, JSON.stringify(caja));
}

function limpiar() {
	 window.localStorage.clear();
	 window.location.reload();
}
