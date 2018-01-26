function setup() { 
  createCanvas(700, 100);
} 

function draw() { 
  background(255);
  if (d1 != 'start'){
      let margin = 20;
      let w = width - (2 * margin);
      let cRadius = 7;
      let lineGap = cRadius + 3;
      fill(0);
      noStroke();
      textAlign(LEFT);
      text(d1, margin, height - 20);
      ellipse(margin, height - 40, cRadius, cRadius);
      textAlign(CENTER);
      text(d2, margin + 0.6*w, height -20);
      ellipse(margin + 0.6*w, height - 40, cRadius, cRadius);
      textAlign(RIGHT);
      text(d3, margin + w, height -20);
      ellipse(margin + w, height - 40, cRadius, cRadius);

      stroke(0);
      line(margin + lineGap, height - 40, margin + 0.6*w - lineGap, height - 40)
      line(margin + 0.6*w + lineGap, height - 40, margin + w - lineGap, height - 40)
  }
}
