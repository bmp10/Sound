let mic = {}
let fft = {}

function setup() {
    createCanvas(710, 400);
    noFill();

    mic = new p5.AudioIn();
    mic.start();
    
    setTimeout(() => {
        getAudioContext().resume()
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
        console.log(spectrum);
        console.log(typeof(spectrum));
        console.log(spectrum.length);
        
        //fetch("http://10.0.4.32:1234/" + '?' + (new URLSearchParams({data: spectrum})).toString())
    } catch {
        console.log('error');
    }
}
