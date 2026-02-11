// DDA Line Drawing Algorithm implementation
class DDARasterizer {
    rasterize(p1, p2) {
        const pixels = [];

        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;

        const steps = Math.max(Math.abs(dx), Math.abs(dy));

        if (steps === 0) {
            pixels.push(new Point(p1.x, p1.y));
            return pixels;
        }

        const xInc = dx / steps;
        const yInc = dy / steps;

        let x = p1.x;
        let y = p1.y;

        for (let i = 0; i <= steps; i++) {
            pixels.push(new Point(Math.round(x), Math.round(y)));
            x += xInc;
            y += yInc;
        }

        return pixels;
    }
}
