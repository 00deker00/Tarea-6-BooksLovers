const botonSubir = document.getElementById("subir");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        botonSubir.style.display = "block";
    } else {
        botonSubir.style.display = "none";
    }
});

botonSubir.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
