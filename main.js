 var primario=[];
 var repuesto=[];
 var vaciado=[];

 function myFunction(recibido,x,y,dato) {
 	var btn = document.createElement("BUTTON");
 	btn.setAttribute('class','white black-text btn elboton')
 	btn.setAttribute('onclick',"vacio('"+recibido+"',"+x+","+y+")")
 	btn.setAttribute('id',recibido)
 	btn.innerHTML=dato;
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
 	//llenamos el arreglo
 	for(var x=0;x<primario.length;x++){
 		for(var y=0;y<primario[x].length;y++)
             primario[x][y]=0;
 		
             

 	}
     repuesto=primario;
     console.log({repuesto});
     vaciado=primario;
     console.log({vaciado});
      	//imprimimos el arreglo en DOM de HTML
 	for (var i = 0; i < primario.length; i++) {
 		var espacio =document.createElement("BR");
 		document.getElementById("panel").appendChild(espacio);
 		for(var j=0;j< primario[i].length;j++){
 			concat="r"+i+"c"+j;
 			myFunction(concat,i,j,primario[i][j]);
 		}

 	}
 	
 }

function recrear(){
    var cast="";
    for(var i=0;i<repuesto.length;i++){
        for(var j=0;j<repuesto[i].length;j++){
            cast="r"+i+"c"+j;
            var btn =document.getElementById(cast);
            if(repuesto[i][j]==0){
                btn.innerHTML=0;
                btn.className="white black-text btn elboton";
            }
            if(repuesto[i][j]==1){
                btn.innerHTML=1;
                btn.className="red white-text btn elboton";
            }
        }
    }

    primario=repuesto;
    for (var i = repuesto.length - 1; i >= 0; i--) {
        for (var j = repuesto[i].length - 1; j >= 0; j--) {
            
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
function iteracion(){
    var xlimit=primario.length;
    var ylimit=primario[0].length;
for(var x=0;x <xlimit;x++){
    for(var y=0;y<ylimit;y++){
        Contar(x,y,xlimit,ylimit);
    }
}
recrear();
console.log([repuesto]);
}

function Contar(x,y,limitX,limitY){
var c=0;
c+=Arriba(primario,x,y,limitX,limitY);
c+=Abajo(primario,x,y,limitX,limitY);
c+=Izquierdo(primario,x,y,limitX,limitY);
c+=Derecho(primario,x,y,limitX,limitY);
c+=SuperiorDerecha(primario,x,y,limitX,limitY);
c+=SuperiorIzquierda(primario,x,y,limitX,limitY);
c+=InferiorDerecha(primario,x,y,limitX,limitY);
c+=InferiorIzquierda(primario,x,y,limitX,limitY);

if (c==3) repuesto[x][y]=1;
if(c==2||c==3) repuesto[x][y]=1;
else repuesto[x][y]=0;
  
console.log(c);

  }

function Arriba(primario, row, col, rowsLimit, colsLimit){
	return row == 0 ? primario[rowsLimit - 1][col] : primario[row - 1][col];
}

function Izquierdo(primario, row, col, rowsLimit, colsLimit){
	return col == 0 ? primario[row][colsLimit - 1] : primario[row][col - 1];
}


function Derecho(primario, row, col, rowsLimit, colsLimit){
	return col + 1 == colsLimit ? primario[row][0] : primario[row][col + 1];
}


function Abajo(primario, row, col, rowsLimit, colsLimit){
	return row + 1 == rowsLimit ? primario[0][col] : primario[row + 1][col];
}


 function SuperiorIzquierda(primario, row, col, rowsLimit, colsLimit) {
    let newRow = row == 0 ? rowsLimit - 1 : row - 1;
    let newCol = col == 0 ? colsLimit - 1 : col - 1;
    return primario[newRow][newCol];
}

function SuperiorDerecha(primario, row, col, rowsLimit, colsLimit) {
    let newRow = row == 0 ? rowsLimit - 1 : row - 1;
    let newCol = col + 1 == colsLimit ? 0 : col + 1;
    return primario[newRow][newCol];
}

function InferiorIzquierda(primario, row, col, rowsLimit, colsLimit) {
    let newRow = row + 1 == rowsLimit ? 0 : row + 1;
    let newCol = col == 0 ? colsLimit - 1 : col - 1;
    return primario[newRow][newCol];
}
function InferiorDerecha(primario, row, col, rowsLimit, colsLimit) {
    let newRow = row + 1 == rowsLimit ? 0 : row + 1;
    let newCol = col + 1 == colsLimit ? 0 : col + 1;
    return primario[newRow][newCol];
}


