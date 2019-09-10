 var primario=[];

 function myFunction(recibido,x,y) {
 	var btn = document.createElement("BUTTON");
 	btn.setAttribute('class','white black-text btn elboton')
 	btn.setAttribute('onclick',"vacio('"+recibido+"',"+x+","+y+")")
 	btn.setAttribute('id',recibido)
 	btn.innerHTML=0;
 	document.getElementById("panel").appendChild(btn);
 }

 function limpiar(){
 	document.getElementById("panel").innerHTML='';
 	document.getElementById("filas").value=3;
 	document.getElementById("columnas").value=3;
 	generar();
 }
 function generar(){
 	limpiar2();
 	var fila= document.getElementById("filas").value;
 	var columna= document.getElementById("columnas").value;
 	//Aqui declaramos el tamaño de un arreglo sencillo
 	primario.length=fila;
 	//llenamos el arreglo de multiples arreglos
 	for (var n=0;n< primario.length; n++){
 		primario[n]=[];
 		primario[n].length=columna;
 	}
 	var concat="";
 	//imprimimos el arreglo en DOM de HTML
 	for (var i = 0; i < primario.length; i++) {
 		var espacio =document.createElement("BR");
 		document.getElementById("panel").appendChild(espacio);
 		for(var j=0;j< primario[i].length;j++){
 			concat="r"+i+"c"+j;
 			primario[i][j]=0;
 			myFunction(concat,i,j);
 		}

 	}
 	
 }
 function limpiar2(){
 	document.getElementById("panel").innerHTML='';

 }



 function vacio(elemento,x,y){
 	var btn= document.getElementById(elemento);
 	var result=btn.className;
 	if(result=="white black-text btn elboton"){
 		primario[x][y]=1
 		btn.innerHTML=1;
 		btn.className="red white-text btn elboton";
 	}
 	
 	else{
 		primario[x][y]=0
 		btn.innerHTML=0;
 		btn.className="white black-text btn elboton";
 	}

 }