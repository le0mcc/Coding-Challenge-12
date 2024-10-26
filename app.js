// Task 2: Configure the JavaScript for Drawing Context
const canvas = document.querySelector("#myCanvas");  // get canvas
const ctx = canvas.getContext('2d');  // get the 2d drawing context

// Setup the canvas by drawing a background
ctx.fillStyle = '#f0f0f0';
ctx.fillRect(0,0, canvas.width, canvas.height);

// Setup Opacity
let opacity = 1;

function drawCircle(x,y) {
    ctx.fillStyle = `rgba(0, 255, 0, ${opacity})`;
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2, false);
    ctx.fill();
};

canvas.addEventListener("click", (event) => {
    drawCircle(event.offsetX, event.offsetY);
});

document.querySelector("#clearCanvas").addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

document.querySelector("#opacity").addEventListener("change", (event) => {
    opacity = event.target.value;
});

// // drawing rectangle
// ctx.strokeStyle = '#e74c3c';
// ctx.lineWidth = 5;
// ctx.strokeRect(0,0,500,500);