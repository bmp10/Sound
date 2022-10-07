var song;
var fft;
var button;

function toggleSong() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}

function preload() {
  song = loadSound('rainbow.mp3');
}

function setup() {
  createCanvas(256, 256);
  angleMode(DEGREES);
  button = createButton('toggle');
  button.mousePressed(toggleSong);
  song.play();
  fft = new p5.FFT(0.9, 128);
}

function draw() {
  background(0);
  var spectrum = fft.analyze();
  stroke(255);
  for (var i = 0; i < spectrum.length; i++) {
    var amp = spectrum[i];
    var y = map(amp, 0, 255, height, 0)
    line(i, height, i, y)
  }
}
