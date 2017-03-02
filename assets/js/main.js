var nombres= document.getElementById("nombres");
var num1= document.getElementById("primerNumero");
var num2= document.getElementById("segundoNumero");
var lienzo= document.getElementById("mostrar");

function sumar(){
  var resultado = num1+num2;
  lienzo.innerHTML.value=resultado;
}
