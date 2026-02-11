// Wu's Line Drawing Algorithm (anti-aliased)
class WuRasterizer {
    rasterize(p1, p2) {
        const pixels = [];

        let x0 = p1.x;
        let y0 = p1.y;
        let x1 = p2.x;
        let y1 = p2.y;

        const steep = Math.abs(y1 - y0) > Math.abs(x1 - x0);

        if (steep) {
            [x0, y0] = [y0, x0];
            [x1, y1] = [y1, x1];
        }

        if (x0 > x1) {
            [x0, x1] = [x1, x0];
            [y0, y1] = [y1, y0];
        }

        const dx = x1 - x0;
        const dy = y1 - y0;
        const gradient = dx === 0 ? 1 : dy / dx;

        let y = y0 + gradient;

        // First endpoint
        this.plot(pixels, steep, x0, y0);

        // Main loop
        for (let x = x0 + 1; x < x1; x++) {
            this.plot(pixels, steep, x, Math.floor(y));
            this.plot(pixels, steep, x, Math.floor(y) + 1);
            y += gradient;
        }

        // Last endpoint
        this.plot(pixels, steep, x1, y1);

        return pixels;
    }

    plot(pixels, steep, x, y) {
        if (steep) {
            pixels.push(new Point(y, x));
        } else {
            pixels.push(new Point(x, y));
        }
    }
}
