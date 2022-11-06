 //Defino el valor de la entrada
  const valorTicket=200;

//Definir descuentos
var descuentoEstudiante=0.2;
var descuentoTrainee=0.5;
var descuentoJunior=0.15;

 function total_a_pagar()
 {
   
  var nombre =document.getElementById("nombre").value;
  var apellido =document.getElementById("apellido").value;
  var correo =document.getElementById("correo").value;
  var cantidadTickets =document.getElementById("cantidad").value;
  var categoria =document.getElementById("categoria").value;
  var total_a_pagar=0;

  if (categoria=="0"){
    total_a_pagar=valorTicket*cantidadTickets;
  } else if (categoria=="1"){
    total_a_pagar=valorTicket*cantidadTickets*descuentoEstudiante;
  } else if (categoria=="2"){
    total_a_pagar=valorTicket*cantidadTickets*(1-descuentoTrainee);
 } else if (categoria=="3"){
  total_a_pagar=valorTicket*cantidadTickets*(1-descuentoJunior);
 }
 
 document.getElementById("total").innerHTML="Total a pagar: $"+total_a_pagar;

}

function reset() {
  var resultado= document.getElementById("total").innerHTML="Total a pagar: $";
  
  console.log (resultado)
}
