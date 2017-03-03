
function sumar(){
  var nombres= document.getElementById("nombres").value;
  var num1= parseInt(document.getElementById("primerNumero").value);
  var num2= parseInt(document.getElementById("segundoNumero").value);


  var resultado = num1+num2;
  document.getElementById("mostrar").innerHTML= nombres+" el resultado de la operacion es  :"+resultado;

}
