/* =====================================================
   PORTFÓLIO — JAVASCRIPT
===================================================== */


/* =====================================================
   BARRA DE PROGRESSO
===================================================== */

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / documentHeight) * 100;

    if (progressBar) {
        progressBar.style.width = progress + "%";
    }

});


/* =====================================================
   ANIMAÇÃO DOS PAINÉIS
===================================================== */

const panels = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.10
    }

);


panels.forEach((panel) => {

    observer.observe(panel);

});


/* =====================================================
   BOTÃO VOLTAR AO TOPO
===================================================== */

const topButton = document.getElementById("topButton");


window.addEventListener("scroll", () => {

    if (!topButton) return;

    if (window.scrollY > 600) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});


if (topButton) {

    topButton.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


/* =====================================================
   ANIMAÇÃO DA CAPA
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const hero = document.querySelector(".hero-panel");

    if (hero) {

        hero.style.opacity = "0";

        hero.style.transform = "translateY(30px)";

        setTimeout(() => {

            hero.style.transition =
                "opacity 1s ease, transform 1s ease";

            hero.style.opacity = "1";

            hero.style.transform = "translateY(0)";

        }, 200);

    }
const zoomModal = document.getElementById("zoomModal");
const zoomImage = document.getElementById("zoomImage");
const zoomClose = document.getElementById("zoomClose");

let previousFocus = null;

document.querySelectorAll(".marketing-visual .zoomable").forEach((button) => {
    button.addEventListener("click", () => {
        const image = button.querySelector("img");
        const imagePath = button.dataset.image || image.src;

        previousFocus = button;

        zoomImage.src = imagePath;
        zoomImage.alt = button.dataset.alt || image.alt;

        zoomModal.classList.add("active");
        zoomModal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";

        zoomClose.focus();
    });
});

function closeZoom() {
    if (!zoomModal.classList.contains("active")) return;

    zoomModal.classList.remove("active");
    zoomModal.setAttribute("aria-hidden", "true");

    zoomImage.src = "";
    zoomImage.alt = "";

    document.body.style.overflow = "";

    if (previousFocus) {
        previousFocus.focus();
    }
}

zoomClose.addEventListener("click", closeZoom);

zoomModal.addEventListener("click", (event) => {
    if (event.target === zoomModal) {
        closeZoom();
    }
});

document.addEventListener("keydown", (event) => {
    if (
        event.key === "Escape" &&
        zoomModal.classList.contains("active")
    ) {
        closeZoom();
    }
});

});