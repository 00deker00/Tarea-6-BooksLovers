
  function mostrarCarrito() {
    const contenedor = document.getElementById("carrito-contenido");
    const totalContenedor = document.getElementById("total-precio");
    contenedor.innerHTML = "";
    totalContenedor.innerHTML = "";

    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    if (carrito.length === 0) {
      contenedor.innerHTML = "<p>No hay libros en tu compra.</p>";
      return;
    }

    let total = 0;

    carrito.forEach((libro, index) => {
      const subtotal = libro.precio * libro.cantidad;
      total += subtotal;

      const div = document.createElement("div");
      div.classList.add("carrito-item");
      div.innerHTML = `
        <img src="${libro.imagen}" alt="${libro.titulo}" />
        <div>
          <h3>${libro.titulo}</h3>
          <p><strong>Autor:</strong> ${libro.autor}</p>
          <p><strong>Precio unitario:</strong> ${libro.precio.toFixed(2)}€</p>
          <p><strong>Cantidad:</strong> ${libro.cantidad}</p>
          <p><strong>Subtotal:</strong> ${subtotal.toFixed(2)}€</p>
          <button class="boton-eliminar" onclick="eliminarLibro(${index})">Eliminar</button>
        </div>
      `;







      contenedor.appendChild(div);
    });

    totalContenedor.textContent = `Total: ${total.toFixed(2)}€`;
  }

  function eliminarLibro(index) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
  }

  function vaciarCarrito() {
    if (confirm("¿Estás segura de que quieres vaciar todo el carrito?")) {
      localStorage.removeItem("carrito");
      mostrarCarrito();
    }
  }

  document.addEventListener("DOMContentLoaded", mostrarCarrito);




  function pagar() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    if (carrito.length === 0) {
      alert("Tu carrito está vacío.");
      return;
    }

    // Aquí podrías redirigir a una pasarela de pago real si la tuvieras
    alert("Gracias por tu compra. Serás redirigida al sistema de pago.");
    
    // Vaciar carrito después de 'pago'
    localStorage.removeItem("carrito");
    window.location.href = "index.html"; // o cualquier otra página de agradecimiento
  }

