/*ANIMACIÓN DESTACADOS*/

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("book-card-visible");
                observer.unobserve(entry.target); // Deja de observar después de activarse
            }
        });
    }, { threshold: 0.3 }); // La animación se activa cuando el 30% del elemento es visible

    document.querySelectorAll(".book-card").forEach(card => {
        card.classList.add("book-card-hidden"); // Establece el estado inicial oculto
        observer.observe(card); // Comienza la observación
    });
});


/*ANIMACION TEATRO Y POESÍA*/

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains("libro-dos-card")) {
                    entry.target.classList.add("libro-dos-card-visible");
                    entry.target.classList.remove("libro-dos-card-hidden");
                } else if (entry.target.classList.contains("libro-dos-card-destacado")) {
                    entry.target.classList.add("libro-dos-card-destacado-visible");
                    entry.target.classList.remove("libro-dos-card-destacado-hidden");
                }
                observer.unobserve(entry.target); // Para optimizar rendimiento
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll(".libro-dos-card").forEach(card => {
        card.classList.add("libro-dos-card-hidden");
        observer.observe(card);
    });

    document.querySelectorAll(".libro-dos-card-destacado").forEach(card => {
        card.classList.add("libro-dos-card-destacado-hidden");
        observer.observe(card);
    });
});


/*ANIMACIÓN NOVELA Y FICCION*/
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains("libro-tres-card")) {
                    entry.target.classList.add("libro-tres-card-visible");
                    entry.target.classList.remove("libro-tres-card-hidden");
                } else if (entry.target.classList.contains("libro-tres-card-destacado")) {
                    entry.target.classList.add("libro-tres-card-destacado-visible");
                    entry.target.classList.remove("libro-tres-card-destacado-hidden");
                }
                observer.unobserve(entry.target); // Para optimizar rendimiento
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll(".libro-tres-card").forEach(card => {
        card.classList.add("libro-tres-card-hidden");
        observer.observe(card);
    });

    document.querySelectorAll(".libro-tres-card-destacado").forEach(card => {
        card.classList.add("libro-tres-card-destacado-hidden");
        observer.observe(card);
    });
});