const boton =
    document.getElementById(
        "abrirSorpresa"
    );

const inicio =
    document.getElementById(
        "inicio"
    );

const sorpresa =
    document.getElementById(
        "sorpresa"
    );

const contenedorPetalos =
    document.getElementById(
        "petalos"
    );


boton.addEventListener(
    "click",
    () => {

        inicio.classList.add(
            "oculto"
        );

        sorpresa.classList.add(
            "activa"
        );

        iniciarPetalos();

    }
);


/* =========================
   PÉTALOS
========================= */

function crearPetalo() {

    const petalo =
        document.createElement(
            "span"
        );

    petalo.classList.add(
        "petalo"
    );


    const flores = [
        "🌼",
        "💛",
        "🌻",
        "✨"
    ];


    petalo.textContent =
        flores[
            Math.floor(
                Math.random() *
                flores.length
            )
        ];


    petalo.style.left =
        Math.random() * 100 +
        "vw";


    petalo.style.fontSize =
        15 +
        Math.random() * 20 +
        "px";


    petalo.style.animationDuration =
        5 +
        Math.random() * 5 +
        "s";


    petalo.style.opacity =
        0.4 +
        Math.random() * 0.6;


    contenedorPetalos.appendChild(
        petalo
    );


    setTimeout(
        () => {

            petalo.remove();

        },
        10000
    );

}


function iniciarPetalos() {

    for (
        let i = 0;
        i < 12;
        i++
    ) {

        setTimeout(
            crearPetalo,
            i * 120
        );

    }


    setInterval(
        crearPetalo,
        500
    );

}
