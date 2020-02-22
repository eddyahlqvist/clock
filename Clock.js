/* Coded by Eddy Ahlqvist - 2020 */

class Clock {

  addZero() {
    if (sc < 10) {
      sc = "0" + sc;
    }
    if (mn < 10) {
      mn = "0" + mn;
    }
    if (hr < 10) {
      hr = "0" + hr;
    }
  }
  
  showDigital() {
    textAlign(LEFT);
    textSize(12);
    fill(255);
    noStroke();
    text(hr + " :", 10, height - 10);
    text(mn + " :", 32, height - 10);
    text(sc, 54, height - 10);
  }

  showAnalog() {
    stroke(1);
    translate(width / 2, height / 2);

    // Minute Needle
    push();
    let mnRot = map(mn, 0, 60, 0, 360);
    rotate(mnRot);
    ellipse(0, -100, 10, 200);
    pop();

    // Hour Needle
    push();
    let hrRot = map((hr % 12) + (mn / 60), 0, 12, 0, 360);
    rotate(hrRot);
    ellipse(0, -70, 10, 130);
    pop();

    // Seconds Needle
    fill(255, 0, 0);
    push();
    let scRot = map(sc, 0, 60, 0, 360);
    rotate(scRot);
    ellipse(0, -100, 4, 200);
    pop();

    // Center Circle
    ellipse(0, 0, 20);
  }

  showDial() {
    fill(255, 0, 0, 25);
    stroke(255);
    strokeWeight(3);
    ellipse(width / 2, height / 2, 420);
    strokeWeight(1);
    fill(255);
    textSize(50);
    textAlign(CENTER, TOP);
    text("12", width / 2, 10);
    textAlign(CENTER, BASELINE);
    text("6", width / 2, height - 10);
    textAlign(LEFT, CENTER);
    text("9", 10, height / 2 + 5);
    textAlign(RIGHT, CENTER);
    text("3", width - 10, height / 2 + 5);
  }
}