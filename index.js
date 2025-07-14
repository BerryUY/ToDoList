import { mostrarAlerta, eliminarAlertas } from "./alerts.js";
import { agregarTareaAlDom } from "./lista.js";

const submitBtn = document.querySelector('#submitBtn');
const form = document.querySelector('#form');
const task = document.querySelector('#task');

cargarEventos();
function cargarEventos() {
    form.addEventListener('submit', agregarTarea);
    task.addEventListener('blur', validarInput);
}

function validarInput(e) {
    if (e.target.value.trim() === '') {
        mostrarAlerta('El campo esta vacío', 'red');
    } else {
        eliminarAlertas();
    }
}

function guardarTarea() {
    return new Promise((resolve, reject) => {
        mostrarAlerta('Agregando tarea...', 'yellow');
        setTimeout(() => {
            resolve('Tarea guardada');
        }, 1000);
    })
}

function agregarTarea(e) {
    e.preventDefault();
    const tareaTexto = task.value.trim(); 

    if (tareaTexto === '') {
        mostrarAlerta('El campo está vacío', 'red');
        return;
    }
    guardarTarea()
        .then(res => {
            mostrarAlerta(res, 'green');
            agregarTareaAlDom(tareaTexto);
            task.value = '';
        })
        .catch(err => mostrarAlerta(err, 'red'));
    
}