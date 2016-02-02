const imgSize = 200;
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');


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
          let polynew = (2.0 * Math.cos(sigma * m) - e) * poly - polyold;

          if (poly * polynew < 0.0) {
            n += 1;
          }
          polyold = poly;
          poly = polynew;
        }
        
      }
    }
  }
}
