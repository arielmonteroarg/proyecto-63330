
alert(`Bienvenido vamos a guiarlo para la compra de la entra a su recital,por davor , siga las intrucciones. `);
let nombre = "";
let evento = "";
let nombreEvento="";
let edad = "";
let sinopcion=0;
while (nombre === "") {
    nombre = prompt("Ingrese su nombre").toLowerCase().trim();
    if (nombre === "") {
        alert("El nombre no puede estar vacío. Por favor, ingrese un nombre válido.");
    }
}
console.log(`Bienvenido ${nombre} `);

while (edad === "" || isNaN(edad)) {
    edad = parseInt(prompt(`Bienvenido ${nombre} , Ingrese Su edad`));
    if (edad === "" || isNaN(edad)) {
        alert(`Por favor ${nombre}, ingrese su edad.`);
    }
}
console.log(`Su edad es:  ${edad} `);
if(edad >= 18){
    evento =parseInt(prompt(`Ya validamos sus datos ${nombre},Elija una Opcion:
        1- Metalica. 
        2- Rock.
        3- Pop.
        4- Hip-Hop.
        `));    
}else{
   evento =parseInt(prompt(`Ya validamos sus datos ${nombre},Elija una Opcion:
        1- BOOBA. 
        2- Pocoyo.
        3- La super patrulla.
        4- Masha y el oso.
        `));    
}

    switch(evento) {
        case 1:
            if(edad >= 18 && evento ===1){
               nombreEvento= "Metalica";
            }else{
                nombreEvento= "BOOBA";
            }
            console.log(`Su eleccion fue:  ${nombreEvento} `);
            break;
        case 2:
            if(edad >= 18 && evento ===2){
                nombreEvento= "Rock";
            }else{
                 nombreEvento= "Pocoyo";
            }
            console.log(`Su eleccion fue:  ${nombreEvento} `);
            break;
        case 3:
            if(edad >= 18 && evento ===3){
                nombreEvento= "Pop";
            }else{
                nombreEvento= "La super patrulla";
            }
            console.log(`Su eleccion fue:  ${nombreEvento} `);
            break;
        case 4:
            if(edad >= 18 && evento ===3){
                nombreEvento= "Hip-Hop";
            }else{
                nombreEvento= "Masha y el oso";
            }
            console.log(`Su eleccion fue:  ${nombreEvento} `);
            break;
        default:
            nombreEvento="No es un Evento disponible";
            console.log(`${nombreEvento} `);
            sinopcion=1;
            break;
    }

if(sinopcion===0){
    const msj =`Que buena Eleccion ${nombre}, Felicidades ya reservamos su entrada a ${nombreEvento} `; 
    console.log(msj);
    alert(`${msj}`);
}else{
    const msj =`Por favor ${nombre}, recargue la pagina y intente de nuevo , ya que su eleccion  ${nombreEvento} `; 
    console.log(msj);
    alert(`${msj}`);
}
    

   