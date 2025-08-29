import { node } from 'webpack';
import { list } from '/src/dataTypes/linked-list.js';
const listaEnlazadaUi = () => {
    let listaEnlazadaContainer = `
        <div class="linkedLisContainer" id="linkedListContainer">
            <div class="linkedListInfo">
                <h2>Lista Enlazada (Linked List)</h2>
                <p>Una lista enlazada es una colección **<strong>linear</strong>** constutuida por una secuencia de "nodos en donde se guardan campos de datos arbitrarios y una referencia al siguiente nodo.</p>
            </div>
            <div class="uiLinkedListContainer">
                <div class="uiLinkedList">
                    <div class="addNodoContainer">
                        <label for="addNodoValue">Agregar dato
                            <input class="listInput" type="number" placeholder="Numero" id="addNodoValue">
                        </label>
                        <button class="dataBtn" id="btnAddNodo" type="button">Agregar</button>
                    </div>
                    <div class="removeNodoContainer">
                        <label for="removeNodoValue">Eliminar dato
                            <input class="listInput" type="number" placeholder="en lista" id="removeNodoValue">
                        </label>
                        <button class="dataBtn" id="btnRemoveNodo" type="button">Eliminar</button>
                    </div>
                </div>
                <div class="listCosoleContainer border" id="listCosoleContainer">
                    <p id="listConsole">Consola</p>
                </div>
                <div class="linkedListItemContainer border" id="linkedListItemContainer"></div>
            </div>
        </div>
    `
    return listaEnlazadaContainer
}

const linkedListItem = (data) => {
    return `<div class="data" id="data${data}">${data}</div>
        <div class="next" id="next">ref</div>`
}

const addNodo = () => {
    const nodeContainer = document.getElementById('linkedListItemContainer')
    list.add(document.getElementById('addNodoValue').value)
    const nodo = document.createElement('div')
    nodo.classList.add('listItem','fade-lento', 'oculto');
    nodo.id = `listItem${document.getElementById('addNodoValue').value}`
    nodo.innerHTML = linkedListItem(document.getElementById('addNodoValue').value)
    nodeContainer.appendChild(nodo)
    void nodo.offsetWidth;
    nodo.classList.remove('oculto');
    document.getElementById('addNodoValue').value = ''
    document.getElementById('listConsole').innerHTML = list.print()
}
const removeNodo = () => {
    if(!list.size) {
        document.getElementById('listConsole').innerHTML = "<p style='color: red;'>No hay datos en la lista</p>"
        setTimeout(() => {
            document.getElementById('listConsole').innerHTML = 'Consola'
        }, 4000)
    }
    const nodeContainer = document.getElementById('linkedListItemContainer')
    const nodeToRemove = document.getElementById('removeNodoValue').value
    list.remove(nodeToRemove)
    const nodeRemoved = document.getElementById(`listItem${nodeToRemove}`)
    nodeRemoved.classList.add('fade-lento')
    void nodeRemoved.offsetWidth;
    nodeRemoved.classList.add('oculto');

    setTimeout(() => {
        nodeContainer.removeChild(nodeRemoved)
        document.getElementById('listConsole').innerHTML = list.print()
    }, 500);


    document.getElementById('removeNodoValue').value = ''
}

export { listaEnlazadaUi, addNodo, removeNodo }