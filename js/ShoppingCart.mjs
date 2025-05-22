

    // Importamos la clase ShoppingCart (asegúrate de que ShoppingCart.mjs esté en el mismo directorio)
    import ShoppingCart from './ShoppingCart.mjs';

    // Creamos o cargamos el carrito; por defecto usa la key "carrito" y un IVA del 21%
    const cart = new ShoppingCart();

    /**
     * Función que renderiza el carrito en la vista.
     * Se encarga de crear los elementos dinámicamente según los artículos que estén guardados.
     */
    function renderCarrito() {
      const contenedor = document.getElementById("carrito-contenido");
      const totalContenedor = document.getElementById("total-precio");

      // Limpiamos el contenido previo
      contenedor.innerHTML = "";
      totalContenedor.innerHTML = "";

      // Si no hay artículos, mostramos un mensaje informativo
      if (cart.totalQty === 0) {
        contenedor.innerHTML = "<p>No hay artículos en tu carrito.</p>";
        return;
      }

      // Por cada artículo almacenado en el carrito, lo mostramos
      for (const [name, { qty, price, data }] of cart.cart) {
        const subtotal = qty * price;
        const div = document.createElement("div");
        div.classList.add("carrito-item");
        div.innerHTML = `
          <p><strong>${name}</strong></p>
          <p>Cantidad: ${qty}</p>
          <p>Precio unitario: ${price.toFixed(2)}€</p>
          <p>Subtotal: ${subtotal.toFixed(2)}€</p>
          <button onclick="eliminarArticulo('${name}')" tabindex="0">Eliminar</button>
        `;
        contenedor.appendChild(div);
      }

      // Mostramos el total (con IVA)
      totalContenedor.innerHTML = `<p>Total: ${cart.total.toFixed(2)}€</p>`;
    }

    /**
     * Elimina un artículo (crea una línea de pedido) del carrito por su nombre
     * y refresca la vista.
     * @param {string} name - Nombre único del producto
     */
    window.eliminarArticulo = function(name) {
      cart.remove(name);
      renderCarrito();
    }

    /**
     * Vacía el carrito tras confirmar la acción.
     */
    window.vaciarCarrito = function() {
      if (confirm("¿Estás segura de que quieres vaciar el carrito?")) {
        cart.clear();
        renderCarrito();
      }
    }

    /**
     * Simula el proceso de pago.
     * Si el carrito está vacío notifica al usuario, de lo contrario procede y limpia el carrito.
     */
    window.pagar = function() {
      if (cart.totalQty === 0) {
        alert("Tu carrito está vacío.");
        return;
      }
      alert("Gracias por tu compra. Procediendo al pago.");
      cart.clear();
      renderCarrito();
      // Aquí podrías redirigir a una página de confirmación, por ejemplo:
      // window.location.href = "gracias.html";
    }

    /**
     * Función de ayuda para agregar un artículo al carrito.
     * Esta función puede utilizarse, por ejemplo, desde una lista de productos.
     * @param {string} name - Nombre del producto
     * @param {number} price - Precio unitario (€)
     * @param {object} data - Objeto con información extra (por ejemplo, imagen, descripción)
     * @param {number} qty - Cantidad a agregar (por defecto es 1)
     */
    window.agregarArticulo = function(name, price, data = {}, qty = 1) {
      cart.add(name, price, data, qty);
      renderCarrito();
    }

    // Al cargar la página, renderizamos el carrito.
    // Para fines demostrativos, agregamos un producto de ejemplo si el carrito está vacío.
    document.addEventListener("DOMContentLoaded", () => {
      if (cart.totalQty === 0) {
        // Se añade un producto de ejemplo. En una aplicación real, esto vendría de la interacción con el catálogo.
        cart.add("Ejemplo Producto", 19.99, { descripcion: "Un producto de ejemplo" }, 2);
      }
      renderCarrito();
    });
