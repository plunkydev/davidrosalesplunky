import './style.css'
import { filasUI, addFila, removeFila } from '/src/components/filas'
import { pilasUI, addPila, removePila } from '/src/components/pilas'
import { listaEnlazadaUi, addNodo, removeNodo } from '/src/components/lista_enlazada'

const dataContainer = document.getElementById('dataContainer');
const dataBtnFilas = document.getElementById('dataBtnFilas');
const dataBtnPila = document.getElementById('dataBtnPila');
const dataBtnLinkedList = document.getElementById('dataBtnLinkedList');

dataBtnFilas.addEventListener('click', () => {
    dataContainer.innerHTML = filasUI();
    document.getElementById('addcola').addEventListener('click', addFila);
    document.getElementById('removeCola').addEventListener('click', removeFila);
});

dataBtnPila.addEventListener('click', () => {
    dataContainer.innerHTML = pilasUI();
    document.getElementById('addPila').addEventListener('click', addPila);
    document.getElementById('removePila').addEventListener('click', removePila);
});

dataBtnLinkedList.addEventListener('click', () => {
    dataContainer.innerHTML = listaEnlazadaUi();
    document.getElementById('btnAddNodo').addEventListener('click', addNodo);
    document.getElementById('btnRemoveNodo').addEventListener('click', removeNodo);
});