 var primario=[];
 var repuesto=[];
 var myvar;
var condicion=false;

 function myFunction(recibido,x,y,dato) {
 	var btn = document.createElement("BUTTON");
     if(dato==0)
 	    btn.setAttribute('class','white black-text btn elboton')
     else
         btn.setAttribute('class','red white-text btn elboton')

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
         document.getElementById("stop").disabled = true;
     document.getElementById("panel").innerHTML='';
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
     repuesto=generarVacio();
     for(var x=0;x<primario.length;x++){
         for(var y=0;y<primario[x].length;y++)
             primario[x][y]=0;
     }
     
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
              for(var j=0;j<repuesto[0].length;j++){
                  cast="r"+i+"c"+j;
                  console.log(cast);
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
//primario=repuesto;
primario=repuesto;
repuesto=generarVacio();

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
    console.log(xlimit,ylimit);
    for(var x=0;x <primario.length;x++){
        for(var y=0;y<primario[x].length;y++){
            Contar(x,y,primario.length,primario[x].length);
        }
    }
    recrear();
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
    if(c>=2 && c<=3) repuesto[x][y]=1;
    else repuesto[x][y]=0;
}


function generarVacio(){
    var variable= [];
    variable.length=primario.length;
    console.log(variable.length);
    for(var i=0;i<primario.length;i++){
        variable[i]=[];
        variable[i].length=primario[i].length;
        console.log("Hola:"+variable[i].length);
        for(var j=0;j<primario[0].length;j++){
            variable[i][j]=0;
        }

    }
    return variable;
}

function get(url) {
    //promise.
    return new Promise((resolve, reject) => {
        let req = new XMLHttpRequest();
        req.open('GET', url);

        req.onload = () => {
            if (req.status == 200) {//status ok
                resolve(req.response);
            }
            else {
                reject(Error(req.statusText));
            }
        };

        // Handle network errors
        req.onerror =  () => {
            reject(Error("Network Error"));
        };

        // Make the request
        req.send();
    });
}

function getAPI() {
    const urlEndPoint = "https://api.noopschallenge.com/automatabot/rules/conway/random";
    get(urlEndPoint).then((response) => {
        let objRespone = JSON.parse(response);
        const result = objRespone.cells;
        generatebyApi(result);
        console.log(result.length);
        console.log(result[0].length);
        console.log("Success!", objRespone.challenge);
    }, (error) => {
        console.error("Failed!", error);
    })
}

function generatebyApi(arreglo){
	document.getElementById("panel").innerHTML='';
	var columna= document.getElementById("columnas");
	var fila= document.getElementById("filas");
	fila.value=arreglo.length;
	columna.value=arreglo[0].length;
    primario=arreglo;
    repuesto=generarVacio();
    for (var i = 0; i < primario.length; i++) {
        var espacio =document.createElement("BR");
        document.getElementById("panel").appendChild(espacio);
        for(var j=0;j< primario[i].length;j++){
            concat="r"+i+"c"+j;
            myFunction(concat,i,j,primario[i][j]);
        }

    }

}



function jugemos(){
        document.getElementById("stop").disabled = false;
    document.getElementById("byAPI").disabled = true;
    document.getElementById("pasito").disabled = true;
    document.getElementById("Generar").disabled = true;
    document.getElementById("limpiar").disabled = true;
    document.getElementById("okey").disabled = true;
    document.getElementById("filas").disabled = true;
    document.getElementById("columnas").disabled = true;
    document.getElementById("intervalo").disabled = true;

    miDato= document.getElementById("intervalo").value;
    miDato*=1000
    myvar =setInterval(iteracion,miDato);
}

function Parar(){
        document.getElementById("stop").disabled = true;
    document.getElementById("byAPI").disabled = false;
    document.getElementById("pasito").disabled = false;
    document.getElementById("Generar").disabled = false;
    document.getElementById("limpiar").disabled = false;
    document.getElementById("okey").disabled = false;
    document.getElementById("filas").disabled = false;
    document.getElementById("columnas").disabled = false;
    document.getElementById("intervalo").disabled = false;



}




// Aqui estan mis metodos para ver a mis vecinos
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


