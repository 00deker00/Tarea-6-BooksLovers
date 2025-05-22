
    /**
     * Actualiza la previsualización del carrito.
     * Se obtiene la lista almacenada en localStorage (en formato array) 
     * y se muestran hasta 3 elementos.
     */
    function updateCartPreview() {
      const previewList = document.getElementById('cart-preview-list');
      previewList.innerHTML = ''; // Limpiamos la lista previa

      // Se espera que el carrito se guarde como un array de objetos
      // con propiedades: titulo, cantidad y precio.
      const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

      const maxItems = 3;
      const items = carrito.slice(0, maxItems);

      if (items.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'Tu carrito está vacío.';
        previewList.appendChild(li);
      } else {
        items.forEach(item => {
          const li = document.createElement('li');
          // Incluso se puede mostrar la imagen si se quiere, por ejemplo:
          // li.innerHTML = `<img src="${item.imagen}" alt="${item.titulo}" style="width:30px;height:auto;">`;
          li.innerHTML = `<strong>${item.titulo}</strong><br>
                          Cantidad: ${item.cantidad} - Precio: ${parseFloat(item.precio).toFixed(2)}€`;
          previewList.appendChild(li);
        });
      }
    }

    // Referencia al contenedor que agrupa el botón y el preview
    const item4 = document.querySelector('.item4');
    const previewBox = document.getElementById('cart-preview');

    // Al pasar el ratón sobre el contenedor, se muestra el preview y se actualiza su contenido.
    item4.addEventListener('mouseenter', () => {
      updateCartPreview();
      previewBox.style.display = 'block';
    });

    // Al salir con el ratón, se oculta el cuadro emergente.
    item4.addEventListener('mouseleave', () => {
      previewBox.style.display = 'none';
    });
  