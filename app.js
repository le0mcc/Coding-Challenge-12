// Task 2: Configure the JavaScript for Drawing Context
const canvas = document.querySelector("#myCanvas");  // get canvas
const ctx = canvas.getContext('2d');  // get the 2d drawing context

// Initialize variables for starting point
let startingX;
let startingY;

// Setup the canvas by drawing a background
ctx.fillStyle = '#f0f0f0';
ctx.fillRect(0,0, canvas.width, canvas.height);
ctx.strokeStyle = '#000000';
ctx.lineWidth = 5;
ctx.strokeRect(0, 0, canvas.width, canvas.height)

// Funciton for drawing line
function drawLine(x, y, endX, endY) {
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(endX,endY);
    ctx.strokeStyle = '#e74c3c';
    ctx.lineWidth = 5;
    ctx.stroke();
}

// Function for drawing rectangle
function drawRectangle(x, y, endX, endY) {
    ctx.fillStyle = '#e74c3c';
    ctx.fillRect(x,y,(endX-x),(endY-y));
};

// Function for drawing circle
function drawCircle(x, y, endX, endY) {
    ctx.fillStyle = `rgba(0, 255, 0)`;
    ctx.beginPath();
    let radius = Math.sqrt(Math.pow(endX-x,2)+Math.pow(endY-y,2))
    ctx.arc(x, y, radius, 0, Math.PI*2, false);
    ctx.fill();
};

// Task 3: Implement Shape Drawing Logic
canvas.addEventListener("mousedown", (event) => {
    startingX = event.offsetX;
    startingY = event.offsetY;
});

canvas.addEventListener("mouseup", (event) => {
    const toolSelection = document.querySelector('input[name="drawingTool"]:checked').value;
    if (toolSelection === 'line') {
        drawLine(startingX,startingY,event.offsetX,event.offsetY);
    } 
    else if (toolSelection === 'rectangle') {
        drawRectangle(startingX,startingY,event.offsetX,event.offsetY);
    }
    else if (toolSelection === 'circle') {
        drawCircle(startingX,startingY,event.offsetX,event.offsetY);
    };
});

// Use clear canvas button to clear the canvas
document.querySelector("#clearCanvas").addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});
