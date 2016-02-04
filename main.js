// Setup our main canvas container.
var canvasContainer = document.getElementById('canvas-container');
var contextContainer = canvasContainer.getContext('2d');

var canvasContainer2 = document.getElementById('canvas-container2');
var contextContainer2 = canvasContainer2.getContext('2d');

const imgSize = 200;

let gcd = (a, b) => {
  if (b == 0) {
    return a
  }

  return gcd(b, a % b);
}

const pi2 = Math.PI * 2.0;
const MAXX = imgSize + 1;
const MAXY = imgSize + 1;
const qmax = imgSize;

for (let q in _.range(4, qmax, 2)) {
  console.log(100 * q / qmax);

  for (let p in _.range(1, q, 2)) {
    if (gcd(p,q) <= 1) {
      let sigma = pi2 * p / q;
      let nold = 0;
      let ie = 0;

      for (ie in _.range(0, MAXY + 2)) {
        let e = 8.0 * ie / MAXY - 4.0 - 4.0 / MAXY;
        let n = 0;
        let polyold = 1.0;
        let poly = 2.0 * Math.cos(sigma) - e;

        if (polyold * poly < 0.0) {
          n += 1;
        }

        for (let m in _.range(2, q / 2)) {
          polynew = (2.0 * Math.cos(sigma * m) - e) * poly - polyold;

          if (poly * polynew < 0.0) {
            n += 1;
          }
          polyold = poly;
          poly = polynew;
        }

        polynew = (2.0 * Math.cos(sigma * q / 2.0) - e) * poly - 2.0 * polyold;

        if (poly * polynew < 0.0) {
          n += 1;
        }

        polyold = 1.0;
        poly = 2.0 - e;

        if (polyold * poly < 0.0) {
          n += 1;
        }

        polynew = (2.0 * Math.cos(sigma) - e) * poly - 2.0 * polyold;

        if (poly * polynew < 0.0) {
          n += 1;
        }

        polyold = poly;
        poly = polynew;

        for (let m in _.range(2, q / 2)) {
          polynew = (2.0 * Math.cos(sigma * m) - e) * poly - polyold;

          if (poly * polynew < 0.0) {
            n += 1;
          }

          polyold = poly;
          poly = polynew;
        }

        polynew = (2.0 * Math.cos(sigma) - e) * poly - 2.0 * polyold;

        if (poly * polynew < 0.0) {
          n += 1;
        }

        polyold = 1.0;
        poly = 2.0 - e;

        if (polyold * poly < 0.0) {
          n += 1;
        }

        polynew = (2.0 * Math.cos(sigma) - e) * poly - 2.0 * polyold;

        if (poly * polynew < 0.0) {
          n += 1;
        }

        polyold = poly;
        poly = polynew;

        for (let m in _.range(2, q / 2)) {
          polynew = (2.0 * Math.cos(sigma * m) - e) * poly - polyold;

          if (poly * polynew < 0.0) {
            n += 1;
          }

          polyold = poly;
          poly = polynew;
        }

        polynew = (2.0 * Math.cos(sigma * q / 2.0) - e) * poly - 2.0 * polyold;

        if (poly * polynew < 0.0) {
          n += 1;
        }
        if (n > nold) {
          // pixels[int(MAXY - ie), int(MAXX * p / q)] = (255, 255, 255)
          // pixels[int(MAXX * p / q), int(MAXY - ie)] = (255, 255, 255)
          contextContainer.beginPath();
          contextContainer.rect( (MAXY - ie), (MAXX * p / q), .1, .1);
          contextContainer.fillStyle = 'black';
          contextContainer.fill();
          contextContainer.stroke();

          contextContainer2.beginPath();

          contextContainer2.rect( (MAXX * p / q), (MAXY - ie), .1, .1);
          contextContainer2.fillStyle = 'red';
          contextContainer2.fill();
          contextContainer2.stroke();
        }
        nold = n;
      }
    }
  }
}
