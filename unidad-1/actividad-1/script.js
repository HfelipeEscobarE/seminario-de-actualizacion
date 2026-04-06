const pantalla = document.querySelector(".pantalla");
pantalla.value = "0";

const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const valor = boton.textContent;

        if (valor === "Borrar") {
            pantalla.value = "0";
        } 
        else if (valor === "=") {
            try {
                pantalla.value = eval(pantalla.value);
            } catch {
                pantalla.value = "Error";
            }
        } 
        else {
            if (pantalla.value === "0") {
                pantalla.value = valor; // reemplaza el 0
            } else {
                pantalla.value += valor;
            }
        }
    });
});