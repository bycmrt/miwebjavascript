var mivarstring  = "hola curso"
 numint = 10

 var numfloat = 0.5
  
 numeNeg = -6.4

 var d = new Date()

 document.getElementById("varString").innerHTML = mivarstring
 document.getElementById("varInt").innerHTML = numint
 document.getElementById("varFloat").innerHTML= numfloat
 document.getElementById("fecha").innerHTML=d

 resSuma = 5 + 10
 resResta = 10 - 6
resMultiplicacion = 9 * 9
resDivision = 20 / 4

 document.getElementById("resSuma").innerHTML=resSuma
 document.getElementById("resResta").innerHTML=resResta
 document.getElementById("resMultiplicacion").innerHTML=resMultiplicacion
 document.getElementById("resDivision").innerHTML=resDivision


var vr1 = prompt("Ingrese el primer valor");
var vr2 = prompt("Ingrese el segundo valor");
var vr3 = prompt("Ingrese el tercer valor");
var p = (parseFloat(vr1)+parseFloat(vr2)+parseFloat(vr3))/3;
alert("Su promedio es: "+p)
if (p>=4) {document.write('gano')
    
} else {document.write('perdio')
    
}
var p = (parseFloat(vr1)+parseFloat(vr2)+parseFloat(vr3))/3;


var x = prompt("Ingrese el primer valor entero");
var y = prompt("Ingrese el segundo valor entero");
var w = prompt("Ingrese el primer valor entero");
var z = Math.min(x, y,w);
alert("El valor minimo entero es: "+z)

var frutas = ['guindas', 'manzanas', 'bananas'];
frutas.sort(); // ['bananas', 'guindas', 'manzanas']

var puntos = [1, 10, 2, 21]; 
puntos.sort(); // [1, 10, 2, 21]
