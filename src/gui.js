let selection;
var selectedElement;
var interval;
function createElement(tag, className, text) {
    const element = document.createElement(tag);
    element.className = className;
    element.textContent = text;
    return element;
}

function onMouseMove(event) {
    if (event.target.tagName == "HTML" || event.target.tagName == "BODY") {
        return;
    }
    selection.style.left = event.target.offsetLeft + 'px';
    selection.style.top = event.target.offsetTop + 'px';
    selection.style.width = event.target.offsetWidth + 'px';
    selection.style.height = event.target.offsetHeight + 'px';
    console.log(event.target);
}

function removeSelection(event) {
    selection.remove()
    clearInterval(interval);
}

function clickElement(event) {
    selectedElement.click();
}

function onMouseClick(event) {
    selectedElement = event.target;
    selection.style.opacity = 0.2;
    selection.style.pointerEvents = 'all';
    selection.addEventListener('click', removeSelection);

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('click', onMouseClick);

    interval = setInterval(clickElement, 10);
}



export function startselection() {
    selection = createElement('div', 'autoclicker-selection');
    document.body.appendChild(selection);

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('click', onMouseClick);
}
