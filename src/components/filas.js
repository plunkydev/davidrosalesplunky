import { queue } from '../dataTypes/queue'
const filasUI = () => {
    const filaContainer = `<div class="filaContainer" id="filaContainer">
            <div class="colaInfo" id="colaInfo">
                <h2>Cola, Fila o Queue</h2>
                <p>Caracterizada por ser una secuencia de elementos en la que la operación de inserción (enqueue) se realiza por un extremo y la operación de extracción (dequeue) por el otro. La cola es un ejemplo de estructura de datos <strong>FIFO</strong>(first in, first out)</p>
            </div>
            <div class="uiFila" id="uiFila">
                <label for="cola">
                    Cola
                    <input type="number" placeholder="Numero" id="cola" name="cola">
                </label>
                <button class="dataBtn" type="button" id="addcola">Agregar a la cola</button>
                <div class="datacola" id="datacola"></div>
                <button class="dataBtn" type="button" id="removeCola">Remover de la cola</button>
            </div>
        </div>`
    return filaContainer;
}

const addFila = () => {
    if (document.getElementById('cola').value === '') return;
    const dataCola = document.getElementById('datacola');
    const valorCola = document.getElementById('cola').value;

    queue.enqueue(valorCola);

    const addCola = document.createElement('span');
    addCola.classList.add('border', 'fade-lento', 'oculto');
    addCola.innerHTML = `${queue.peekEnd()}`;

    dataCola.appendChild(addCola);

    void addCola.offsetWidth;

    addCola.classList.remove('oculto');

    document.getElementById('cola').value = '';
}

const removeFila = () => {
    const dataCola = document.getElementById('datacola');

if (queue.isEmpty()) return;

const primerItem = dataCola.firstChild;
if (!primerItem) return;

primerItem.classList.add('fade-lento');

void primerItem.offsetWidth;
primerItem.classList.add('oculto');

setTimeout(() => {
    queue.dequeue();
    dataCola.removeChild(primerItem);
}, 1000);

document.getElementById('cola').value = '';
}

export { filasUI, addFila, removeFila }