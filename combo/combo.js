document.addEventListener('DOMContentLoaded', () => {
    const opcionesCombo = ['Delivery', 'Reparto', 'Entrega', 'Nose']; // Array de opciones

    const comboCustom = document.querySelector('.comboCustom');
    const select = comboCustom.querySelector('.comboCustom__select');
    const selectText = select.querySelector('.comboCustom__span');
    const options = comboCustom.querySelector('.comboCustom__option');

    // Generar dinámicamente los elementos <li> en base al array
    opcionesCombo.forEach(opcion => {
        const li = document.createElement('li');
        li.classList.add('comboCustom__option-item');
        li.textContent = opcion;
        options.appendChild(li);

        // Agregar evento para actualizar el texto al hacer clic en una opción
        li.addEventListener('click', () => {
            selectText.classList.add('fade');

            setTimeout(() => {
                selectText.textContent = opcion;
                selectText.classList.remove('fade');
                selectText.classList.add('active');
            }, 230);
            options.classList.remove('active');
            selectText.classList.remove('active');
        });
    });

    // Toggle para mostrar/ocultar las opciones
    select.addEventListener('click', () => {
        options.classList.toggle('active');
    });

    // Cerrar el menú si se hace clic fuera del combo
    document.addEventListener('click', (e) => {
        if (!comboCustom.contains(e.target)) {
            options.classList.remove('active');
        }
    });
});
