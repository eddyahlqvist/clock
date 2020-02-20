/* Coded by Eddy Ahlqvist - 2020 */

let clock;
let hr;
let mn;
let sc;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  clock = new Clock();
}

function draw() {
  background(0);
  hr = hour();
  mn = minute();
  sc = second();
  clock.addZero();
  clock.showDigital();
  clock.showAnalog();




}