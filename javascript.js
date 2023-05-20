const helado = 100;
let topping= "Oreo";
let precio;
let precioFinal;


if (topping == "Oreo") {
    precio = 10;
}
 else if (topping == "KitKat") {
    precio = 15;
} 
else if (topping == "Kinder") {
    precio = 25; }
else {
    console.log ("No tenemos este topping");
}

precioFinal = precio + helado;

 console.log ("El helado cuesta $" + precioFinal);


