import { stak } from '/src/dataTypes/stak.js'
const pilasUI = () => {
    let pilaContainer = `
        <div class="pilaContainer" id="pilaContainer">
            <div class="pilaInfo" id="pilaInfo">
                <h2>Pila (Stack)</h2>
                <p>Lista ordenada o estructura de datos que permite almacenar y recuperar datos, el modo de acceso a sus elementos es de tipo LIFO(last in, first out)</p>
            </div>
            <div class="uiPilaContainer" id="uiPilaContainer">
                <div class="pilaItemContainer" id="pilaItemContainer"></div>
                <div class="uiPila" id="uiPila">
                    <label for="pila">
                        Pila
                        <input type="number" placeholder="Numero" id="pila" name="pila">
                    </label>
                    <button class="dataBtn" type="button" id="addPila">Agregar Pila</button>
                    <button class="dataBtn" type="button" id="removePila">Quitar de la Pila</button>
                </div>
            </div>
        </div>
    `
    return pilaContainer
}

const addPila = () => {
    if(document.getElementById('pila').value === '') return;
    if(document.getElementById('pilaItemContainer').children.length  === 5) {
        alert('Pila llena. maximo 5 elementos para representar este ejemplo');
        return;
    }
    const pilaItemContainer = document.getElementById('pilaItemContainer');
    const valorPila = document.getElementById('pila').value;

    stak.push(valorPila);

    const addPila = document.createElement('span');
    addPila.classList.add('pila', 'fade-lento', 'oculto');
    addPila.innerHTML = `${stak.peek()}`;

    pilaItemContainer.appendChild(addPila);

    void addPila.offsetWidth;

    addPila.classList.remove('oculto');

    document.getElementById('pila').value = '';
    console.log(stak.print());
}


const removePila = () => {
    if (stak.isEmpty()) return;

    const pilaItemContainer = document.getElementById('pilaItemContainer');

    const ultimoItem = pilaItemContainer.lastChild;
    if (!ultimoItem) return;

    ultimoItem.classList.add('fade-lento');

    void ultimoItem.offsetWidth;
    ultimoItem.classList.add('oculto');

    setTimeout(() => {
        stak.pop();
        pilaItemContainer.removeChild(ultimoItem);
        console.log(stak.print());
    }, 500);

    document.getElementById('pila').value = '';
    
}

export { pilasUI, addPila, removePila }