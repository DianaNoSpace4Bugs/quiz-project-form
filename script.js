// verificacion de formulario:
// Que solo se pueda seleccionar una opcion 
// Mensajes predeterminados para los errores
// Boton de enviar?


const playQuiz = [
    {
        name: "primeraPregunta",
        respuestas: ["Rey de las Calabazas", "Señor de las Tinieblas", "El Cazador de Dulces", "Maestro del Espanto"],
        respuestaCorrecta: "Calabazas"
    },
    {
        name: "segundaPregunta",
        respuestas: ["Victoria Everglot", "Emily", "Victor Van Dort", "Lord Barkis"],  
        respuestaCorrecta: "Emily"
    },
    {
        name: "terceraPregunta",
        respuestas: ["Peg Boggs", "Edward", "Kim Boggs", "Bill Boggs"],
        respuestaCorrecta: "Kim Boggs"
    },
    {
        name: "cuartaPregunta",
        respuestas: ["Barbero", "Panadero", "Juez", "Policía"],
        respuestaCorrecta: "Barbero"
    },
    {
        name: "quintaPregunta",
        respuestas: ["Vampiro", "Hombre lobo", "Fantasma", "Brujo"],
        respuestaCorrecta: "Vampiro"
    },
    {
        name: "sextaPregunta",
        respuestas: ["Un reloj de bolsillo", "Una llave maestra", "Una pata de palo", "Una linterna mágica"],
        respuestaCorrecta: "Una llave maestra"
    },
    {
        name: "septimaPregunta",
        respuestas: ["Darle una rosa roja", "Encontrar su corazón", "Reunir a su familia", "Encontrar un anillo de bodas"],
        respuestaCorrecta: "Encontrar su corazón"
    },
    {
        name: "octavaPregunta",
        respuestas:  ["Bailar ballet", "Tocar el violín", "Esculpir arbustos", "Hacer acrobacias en bicicleta"],
        respuestaCorrecta: "Esculpir arbustos"
    },
    {
        name: "novenaPregunta",
        respuestas: ["Mrs. Lovett", "Lucy Barker", "Johanna Barker", "Judge Turpin"],
        respuestaCorrecta: "Mrs. Lovett"
    },
    {
        name: "decimaPregunta",
        respuestas: ["El Hombre del Sombrero Alto", "El Gigante del Bosque", "El Hombre Palo", "El Gigante del Ojo"],
        respuestaCorrecta: "El Hombre del Sombrero Alto"
    }
]

let contadorRespuestasCorrectas = 0 

function hayPreguntasSinResponder() {
    let hayPreguntaSinRespuesta = false;
    for (let index = 0; index < playQuiz.length; index++) {
        const elementosDeLasRespuestas = document.getElementsByName("opcionesDel"+ (index + 1));
        const respuestas = Array.from(elementosDeLasRespuestas);
        let hayRespuestaMarcada = false;
        for (let respuestasIndex = 0; respuestasIndex < respuestas.length; respuestasIndex++) {
            const respuesta = respuestas[respuestasIndex];
            if (respuesta.checked) {
                hayRespuestaMarcada = true;
            }
        }
        if (!hayRespuestaMarcada){
            hayPreguntaSinRespuesta = true;
        }
    }
    return hayPreguntaSinRespuesta;
}

function calcularPuntuacion() {
    for (let index = 0; index < playQuiz.length; index++){
        const radioButtonSeleccionado = document.querySelector("[name=opcionesDel"+(index+1)+"]:checked");
        if (radioButtonSeleccionado.value === 'correct') {
            contadorRespuestasCorrectas++;
        }
    }
    alert("Tu puntuación es de... "+contadorRespuestasCorrectas+" / " + playQuiz.length)
    contadorRespuestasCorrectas = 0
}

document.getElementById("formulario").addEventListener("submit", function (event) {
    // Dentro del objeto "event" están todos los datos del formulario enviado
    event.preventDefault(); // parar envío formulario

    const hayPreguntaSinResponder = hayPreguntasSinResponder();
    if (hayPreguntaSinResponder){
        alert("UPS! Debes responder todas las preguntas para descubrir tu resultado.");
        return; 
    }
    calcularPuntuacion();
})



