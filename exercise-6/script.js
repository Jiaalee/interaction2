let squares = document.querySelectorAll(".square-1, .square-2, .square-3, .square-4");

let colors = ["#cdb4db", "#ffc8dd", "#ffafcc", "#bde0fe", "#a2d2ff", "#caf0f8", "#90e0ef", "#00b4d8", "#0077b6", "#03045e", "#edede9", "#d6ccc2", "#f5ebe0", "#e3d5ca", "#d5bdaf"];

for (let square of squares) {
    square.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}
