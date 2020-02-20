/* Coded by Eddy Ahlqvist - 2020 */

class Clock {

  addZero() {
    if (sc < 10) {
      sc = "0" + sc;
    }
    if (mn < 10) {
      mn = "0" + mn;
    }
  }

  showDigital() {
    fill(255);
    text(hr + " :", 10, height - 10);
    text(mn + " :", 32, height - 10);
    text(sc, 54, height - 10);
  }

  showAnalog() {
    stroke(255);
    line(0, height / 2, width, height / 2);
    line(width / 2, height, width / 2, 0);

    noStroke();

    translate(width / 2, height / 2);


    // Minute Needle
    push();
    fill(255);
    let mnRot = map(mn, 0, 60, 0, 360);
    rotate(mnRot);
    ellipse(0, -100, 10, 200);
    pop();

    // Hour Needle
    push();
    fill(255);
    let hrRot = map((hr % 12) + (mn / 60), 0, 12, 0, 360);
    rotate(hrRot);
    ellipse(0, -50, 10, 100);
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
}