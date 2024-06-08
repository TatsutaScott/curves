import Vec from "./Vector.js";

class Curve {
  constructor(points) {
    this.points = points;
  }
  showPoints(ctx, color) {
    ctx.fillStyle = color;
    this.points.forEach((p) => {
      const circle = new Path2D();
      circle.arc(p.x, p.y, 4, 0, 360);
      ctx.fill(circle);
    });
  }

  constructionLines(ctx, divs) {
    const segs = [];
    for (let i = 0; i <= divs; i++) {
      segs.push(this.bezier(this.points, i / divs, true));
    }
    console.log(segs);
    for (let i = 0; i < segs.length; i++) {
      for (let q = 1; q < segs[i].length; q++) {
        drawSegments(ctx, segs[i][q]);
      }
      // segs[i].forEach((q) => drawSegments(ctx, q));
    }
    // segs.forEach((s) => {
    //   s.forEach((q) => drawSegments(ctx, q));
    // });
  }

  line(ctx, divs) {
    const curvePoints = [];
    for (let i = 0; i <= divs; i++) {
      curvePoints.push(this.bezier(this.points, i / divs));
    }
    const line = new Path2D();
    line.moveTo(curvePoints[0].x, curvePoints[0].y);
    for (let i = 1; i < curvePoints.length; i++) {
      line.lineTo(curvePoints[i].x, curvePoints[i].y);
    }
    ctx.stroke(line);
  }

  functionDraw(divs, func) {
    const curvePoints = [];
    for (let i = 0; i <= divs; i++) {
      curvePoints.push(this.bezier(this.points, i / divs));
    }
    func(curvePoints);
  }

  bezier(points, t, seg = false) {
    const segments = [];
    for (let i = 0; i < points.length - 1; i++) {
      const currLevel = [];
      if (i == 0) {
        for (let q = 0; q < points.length - 1; q++) {
          currLevel.push([points[q], points[q + 1]]);
        }
        segments.push(currLevel);
      } else {
        for (let q = 0; q < segments[i - 1].length - 1; q++) {
          currLevel.push([
            Vec.interpolate(segments[i - 1][q][0], segments[i - 1][q][1], t),
            Vec.interpolate(
              segments[i - 1][q + 1][0],
              segments[i - 1][q + 1][1],
              t
            ),
          ]);
        }
        segments.push(currLevel);
      }
    }
    if (seg) {
      return segments;
    }
    return Vec.interpolate(
      segments[segments.length - 1][0][0],
      segments[segments.length - 1][0][1],
      t
    );
  }
}

function drawSegments(ctx, segments) {
  // ctx.strokeStyle = "red";
  for (let i = 0; i < segments.length; i++) {
    const line = new Path2D();
    line.moveTo(segments[i][0].x, segments[i][0].y);
    line.lineTo(segments[i][1].x, segments[i][1].y);
    ctx.stroke(line);
  }
}

export default Curve;
