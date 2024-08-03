document.addEventListener('DOMContentLoaded', function () {
    const productos = [
        { nombre: 'Manzanas', precio: 100, stock: 10 },
        { nombre: 'Bananas', precio: 150, stock: 20 },
        { nombre: 'Leche', precio: 700, stock: 15 },
        { nombre: 'Pan', precio: 1300, stock: 5 },
        { nombre: 'Huevos', precio: 4500, stock: 8 },
        { nombre: 'Carne', precio: 4500, stock: 40 },
        { nombre: 'Coca Cola', precio: 4500, stock: 24 },
        { nombre: 'Yogurt', precio: 4500, stock: 17 },
    ];

    const productosLista = document.getElementById('productos-lista');

    productos.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('producto');

        const productoNombre = document.createElement('h3');
        productoNombre.textContent = producto.nombre;
        productoDiv.appendChild(productoNombre);

        const productoPrecio = document.createElement('p');
        productoPrecio.textContent = `Precio: $${producto.precio.toFixed(2)}`;
        productoDiv.appendChild(productoPrecio);

        const productoStock = document.createElement('p');
        productoStock.textContent = `Stock: ${producto.stock}`;
        productoDiv.appendChild(productoStock);

        const cantidadInput = document.createElement('input');
        cantidadInput.type = 'number';
        cantidadInput.min = '0';
        cantidadInput.max = producto.stock.toString();
        cantidadInput.value = '0';
        productoDiv.appendChild(cantidadInput);

        productosLista.appendChild(productoDiv);
    });

    document.getElementById('comprar').addEventListener('click', () => {
        let total = 0;
        let mensajeError = '';
        const inputs = document.querySelectorAll('.producto input');

        inputs.forEach((input, index) => {
            const cantidad = parseInt(input.value);
            if (cantidad < 0) {
                mensajeError += `La cantidad de ${productos[index].nombre} no puede ser negativa.<br>`;
            } else if (cantidad > productos[index].stock) {
                mensajeError += `No hay suficiente stock de ${productos[index].nombre}.<br>`;
            } else {
                total += cantidad * productos[index].precio;
            }
        });

        const mensajeDiv = document.getElementById('mensaje');
        const totalDiv = document.getElementById('total');
        if (mensajeError) {
            mensajeDiv.innerHTML = mensajeError;
            totalDiv.innerHTML = '';
        } else {
            mensajeDiv.innerHTML = '';
            totalDiv.innerHTML = `Total de la compra: $${total.toFixed(2)}`;
        }
    });
});
