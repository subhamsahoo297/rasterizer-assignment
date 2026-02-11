class MidpointCircleRasterizer {
    rasterize(p1, p2) {
        const pixels = [];

        const centerX = Math.floor((p1.x + p2.x) / 2);
        const centerY = Math.floor((p1.y + p2.y) / 2);

        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        const radius = Math.floor(Math.sqrt(dx * dx + dy * dy) / 2);

        let x = 0;
        let y = radius;
        let d = 1 - radius;

        while (x <= y) {
            plotCirclePoints(centerX, centerY, x, y, pixels);

            if (d < 0) {
                d += 2 * x + 3;
            } else {
                d += 2 * (x - y) + 5;
                y--;
            }
            x++;
        }

        return pixels;
    }
}

function plotCirclePoints(cx, cy, x, y, pixels) {
    pixels.push(new Point(cx + x, cy + y));
    pixels.push(new Point(cx - x, cy + y));
    pixels.push(new Point(cx + x, cy - y));
    pixels.push(new Point(cx - x, cy - y));
    pixels.push(new Point(cx + y, cy + x));
    pixels.push(new Point(cx - y, cy + x));
    pixels.push(new Point(cx + y, cy - x));
    pixels.push(new Point(cx - y, cy - x));
}
