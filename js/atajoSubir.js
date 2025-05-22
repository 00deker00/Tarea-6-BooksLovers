document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && event.key.toLowerCase() === "q") { /*Sugerencia de internet el ctrl*/
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
});