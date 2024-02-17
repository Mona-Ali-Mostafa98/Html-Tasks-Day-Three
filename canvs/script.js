window.addEventListener('load', initCanvas);

let canvas, context;
let isDrawable = false;
let radius = 10;
let increment, decrement, radiusValue, colorBar;

function initCanvas() {
    canvas = document.getElementById('mycanvas');
    context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    canvas.addEventListener('mousemove', drawCircle);
    canvas.addEventListener('mousedown', enableDrawing);
    canvas.addEventListener('mouseup', disableDrawing);

    increment = document.getElementById('increment');
    decrement = document.getElementById('decrement');
    radiusValue = document.getElementById('radiusvalue');

    increment.addEventListener('click', increaseRadius);
    decrement.addEventListener('click', decreaseRadius);

    colorBar = document.getElementById('colorbar');
    initializeColors();
}

function initializeColors() {
    const allColors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'brown', 'gray'];

    for (let i = 0; i < allColors.length; i++) {
        const createdDiv = document.createElement('div');
        createdDiv.style.backgroundColor = allColors[i];
        createdDiv.addEventListener('click', changeColor);
        createdDiv.className = 'colors';

        if (allColors[i] === localStorage.getItem('selectedcolor')) {
            createdDiv.className += ' active';
            context.fillStyle = allColors[i];
        }

        colorBar.appendChild(createdDiv);
    }
}

function changeColor(e) {
    const oldSelectedColor = document.querySelector('.active');

    if (oldSelectedColor !== null) {
        oldSelectedColor.classList.remove('active');
    }

    const newClickedOne = e.target;
    newClickedOne.classList.add('active');
    context.fillStyle = newClickedOne.style.backgroundColor;
    localStorage.setItem('selectedcolor', newClickedOne.style.backgroundColor);
}

function increaseRadius() {
    radius++;
    checkRadius(radius);
}

function decreaseRadius() {
    radius--;
    checkRadius(radius);
}

function checkRadius(newRadius) {
    if (newRadius > 50) {
        newRadius = 50;
    }

    if (newRadius < 10) {
        newRadius = 10;
    }

    radius = newRadius;
    radiusValue.innerHTML = radius;
}

function disableDrawing() {
    isDrawable = false;
}

function enableDrawing() {
    isDrawable = true;
}

function drawCircle(e) {
    if (isDrawable) {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2);
        context.fill();
        context.closePath();
    }
}