let mic, fft;

function setup() {
    setInterval(() => {
        createCanvas(710, 400);
        noFill();
    
        mic = new p5.AudioIn();
        mic.start();
        fft = new p5.FFT();
        fft.setInput(mic);
    }, 1000)
}

function draw() {
    try {
        background(200);
    
        let spectrum = fft.analyze();
    
        beginShape();
        for (i = 0; i < spectrum.length; i++) {
            vertex(i, map(spectrum[i], 0, 255, height, 0));
        }
        endShape();
    } catch {}
}
