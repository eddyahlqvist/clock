/* Coded by Eddy Ahlqvist - 2020 */

let clock;
let hr;
let mn;
let sc;

function setup() {
  createCanvas(430, 430);
  angleMode(DEGREES);
  clock = new Clock();
}

function draw() {
  background(0);
  hr = hour();
  mn = minute();
  sc = second();
  clock.showDial();
  clock.addZero();
  clock.showDigital();
  clock.showAnalog();
}