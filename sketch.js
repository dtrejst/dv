let table;

// https://p5js.org/reference/#/p5/loadTable
function preload() {
  table = loadTable('fashion_table.csv', 'csv', 'header');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('pink');
}
