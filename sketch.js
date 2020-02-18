/* Coded by Eddy Ahlqvist - 2020 */

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);
  let hr = hour();
  let mn = minute();
  let sc = second();

  function addZero() {
    if (sc < 10) {
      sc = "0" + sc;
    }
    
    if (mn < 10) {
      mn = "0" + mn;
    }
  }
  
  addZero();

  fill(255);
  text(hr, 60, 100);
  text(mn, 80, 100);
  text(sc, 100, 100);
}