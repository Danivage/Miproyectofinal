let PVP= 5000;
let descuento = 0;
let precioFinal;
let codPromocion = prompt("Si tienes un código de descuento, escríbelo aquí: ");

codPromocion = codPromocion.toUpperCase();  
switch(codPromocion) {
case "PROFESOR":
  descuento = 25;
  break; 
case "JUGADOR" :
  descuento = 20;
  break;
case "FAMILIAR" :
  descuento = 15;
  break; 
case "DESCUENTOAMIGO" :
  descuento = 10;
  break;
case "ULTIMACHANCE" :
  descuento = 5;
  break;
default: 
  alert("No ha introducido código promocional, o es erróneo");
}
precioFinal = PVP - descuento;
document.write("Precio Final = " + precioFinal + "$");


