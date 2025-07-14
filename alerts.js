export function mostrarAlerta(mensaje, tipo) {
    const form = document.querySelector('#form');
    const alertas = document.querySelectorAll('.alerta');
    
    alertas.forEach(alerta => alerta.remove());

    const errorMsg = document.createElement('P');
    errorMsg.classList.add('alerta', 'font-medium', 'text-center', 'p-2', 'text-white', 'rounded-2xl', 'w-full');
    if (tipo == 'red') {
        errorMsg.classList.add('bg-red-600');
    } else if (tipo === 'green') {
        errorMsg.classList.add('bg-green-600');
    } else {
        errorMsg.classList.add('bg-yellow-600');
    }
    errorMsg.textContent = mensaje;
    document.querySelector('#alertaContainer').appendChild(errorMsg);

    setTimeout(() => {
        errorMsg.remove();
    }, 3000);
}

export function eliminarAlertas() {
    const form = document.querySelector('#form');
    const alertas = form.querySelectorAll('.alerta');
    alertas.forEach(alerta => alerta.remove());
}