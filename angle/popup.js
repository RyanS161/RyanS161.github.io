function go() {
  let hrs = document.getElementById('hrs').value; //angle in hrs:mins
  let mins = document.getElementById('mins').value;
  let r = document.getElementById('rad').value; // Inches!
  let pos0 = document.getElementById('pos').value; // could be [0,1,2,3]

  let distance = 53; // distance from pivot to center
  let theta = (hrs + (mins/60)*30); //convert angle to degrees
  let angle = theta;
  let rollingDistance = 0;
  let angleRot = 0;
  let CW = 1;

  if (pos0 == 0) {
    if (theta > 45 && theta < 225) {
      CW = -1;
    } else {CW = 1;}}
  if (pos0 == 1) {
    if (theta > 135 && theta < 315) {
      CW = -1;
    } else {
      CW = 1;
    }
  }
  if (pos0 == 2) {
    if (theta > 45 && theta < 225) {CW = 1;}
    else {CW = -1;}}
  if (pos0 == 3) {
    if (theta > 135 && theta < 315) {CW = 1;}
    else {CW = -1;}}


  if (pos0 == 0) {
    if (theta <= 45) {
      angle = 45 - theta;
    } else if (45 <= theta && theta <= 225) {
      angle = theta - 45;
    } else {
      angle = 405 - theta;
    }
  } else if (pos0 == 1) {
    if (theta <= 135) {
      angle = 135 - theta;
    } else if (135 <= theta && theta <= 315) {
      angle = theta - 135;
    } else {
      angle = 495 - theta;
    }
  } else if (pos0 == 2) {
    if (theta <= 45) {
      angle = theta + 135;
    } else if (45 <= theta && theta <= 225) {
      angle = 225 - theta;
    } else {
      angle = theta - 225;
    }
  } else {
    if (theta <= 135) {
      angle = theta + 45;
    } else if (135 <= theta && theta <= 315) {
      angle = 315 - theta;
    } else {
      angle = theta - 315;
    }
  }
  console.log(angle);
  let rad = angle*(Math.PI/180);
  console.log(rad);
  let d2 = distance*distance + r*r - 2*distance*r*Math.cos(rad);
  console.log(d2);
  rollingDistance = Math.sqrt(d2);
  console.log(rollingDistance);

  let angleRotRad = Math.asin((r*Math.sin(rad))/rollingDistance);
  console.log(angleRotRad);
  angleRot = angleRotRad*(180/Math.PI);
  console.log(angleRot);

  document.getElementById('angle').innerHTML = angleRot;
  if (CW == 1) {
    document.getElementById('CW').innerHTML = "clockwise";
  } else {
    document.getElementById('CW').innerHTML = "counter-clockwise";
  }
}
