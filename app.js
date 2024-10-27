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

// Task 4: Add Color Selection 
let colorInput = document.getElementById("drawingColor");
let colorSelection = colorInput.value;
colorInput.addEventListener("input", (event) => {
    colorSelection=event.target.value;
});

// Funciton for drawing line
function drawLine(x, y, endX, endY) {
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(endX,endY);
    ctx.strokeStyle = colorSelection;
    ctx.lineWidth = 5;
    ctx.stroke();
}

// Function for drawing rectangle
function drawRectangle(x, y, endX, endY) {
    ctx.fillStyle = colorSelection;
    ctx.fillRect(x,y,(endX-x),(endY-y));
};

// Function for drawing circle
function drawCircle(x, y, endX, endY) {
    ctx.fillStyle = colorSelection;
    ctx.beginPath();
    let radius = Math.sqrt(Math.pow(endX-x,2)+Math.pow(endY-y,2))
    ctx.arc(x, y, radius, 0, Math.PI*2, false);
    ctx.fill();
};

// Task 3: Implement Shape Drawing Logic
// Use mousedown to determine starting point
canvas.addEventListener("mousedown", (event) => {
    startingX = event.offsetX;
    startingY = event.offsetY;
});

// Use mouseup to determine what shape to draw
canvas.addEventListener("mouseup", (event) => {
    // Use if/ else if structure to determine the drawing tool
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

// Task 4: Use clear canvas button to clear the canvas
document.querySelector("#clearCanvas").addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(0,0, canvas.width, canvas.height);
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 5;
    ctx.strokeRect(0, 0, canvas.width, canvas.height)
});
