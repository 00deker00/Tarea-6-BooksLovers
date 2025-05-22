
  function añadirAlCarrito() {
    const cantidadInput = document.querySelector(".cantidad");
    const cantidad = parseInt(cantidadInput.value);

    const libro = {
      titulo: "Una Memoria Llamada Imperio",
      autor: "Arcady Martine",
      precio: 19.14,
      imagen: "imagentamanios/Libro1mediano.jpg",
      cantidad: cantidad
    };

    // Obtener el carrito actual
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    // Comprobar si ya existe el libro en el carrito
    const indiceExistente = carrito.findIndex(item => item.titulo === libro.titulo);
    if (indiceExistente !== -1) {
      // Si ya existe, sumar cantidad
      carrito[indiceExistente].cantidad += cantidad;
    } else {
      carrito.push(libro);
    }

    // Guardar de nuevo en localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));

    // Redirigir al carrito
    window.location.href = "PaginaCarrito.html";
  }
