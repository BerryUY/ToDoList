export function agregarTareaAlDom(tarea) {
    const ul = document.querySelector('#lista');
    const li = document.createElement('LI');
    const x = document.createElement('A');
    const texto = document.createElement('span');

    x.textContent = 'X';
    x.dataset.id = Date.now();
    x.classList.add('text-red-500', 'font-bold', 'text-lg', 'cursor-pointer');

    texto.textContent = tarea;

    li.classList.add('bg-pink-100', 'p-3', 'rounded', 'mb-5', 'flex', 'items-center', 'gap-2');
    li.appendChild(x);
    li.appendChild(texto);

    ul.appendChild(li);

    x.addEventListener('click', (e) => {
        e.target.parentElement.remove();
    });
}