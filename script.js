// --- Emotion Message & GIF Logic ---
const emotions = [
  {
    message: "This is for my most beautiful and prettiest Princess 💖",
    gif: "236edd320f07f4fb99a823ae19ef7c49.gif" 
  },
  {
    message: "Even we have some hard days , i will always try to make sure you feel loved and safe with me 💞 ",
    gif: "6721f229ec1eb83ef1110b7a0ec5572f.gif" 
  },
  {
    message: "I know sometimes i can talk stupid , and can really say upseting things , but i just can't help the thought of lossing you ",
    gif: "b710f21fee78da75eecb22b407658ead.gif" // Add your wow gif link here
  },
  {
    message: "But what important is at the end we always held to eachother nd fix everything together , and love eachother , The thing is this careless boy, cares more than i can explain abt you and will do anything to keep you smile protected 💗",
    gif: "cfcc7cc8e55482c77ff28e29facde023.gif" // Add your sad gif link here
  },
  {
    message: "I LOVE YOU MY SWEEET LITTLE BABY ADITU 💗  ",
    gif: "61665bb472cd6e7ce74c8aaf5fa182f0.gif" // Add your angry gif link here
  }
 
];

let index = 0;

// Wait until everything is loaded before adding event listeners
window.onload = function () {
  const textBox = document.getElementById("emotionText");
  const gifBox = document.getElementById("emotionGif");
  const nextBtn = document.getElementById("nextBtn");

  const music = document.getElementById("bgMusic");
  const musicBtn = document.getElementById("toggleMusic");

  // Button to show next emotion + gif
  nextBtn.addEventListener("click", () => {
    const emotion = emotions[index];
    textBox.textContent = emotion.message;
    gifBox.src = emotion.gif;

    index = (index + 1) % emotions.length; // Loop back to start
  });

  // Music toggle button
  musicBtn.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      musicBtn.textContent = "🔊 Pause Music";
    } else {
      music.pause();
      musicBtn.textContent = "🔈 Play Music";
    }
  });

  // Auto-start music on first user click
  document.body.addEventListener("click", () => {
    music.play();
  }, { once: true });
};

// --- Floating Hearts Logic ---
setInterval(() => {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = 3 + Math.random() * 5 + 's';
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000); // remove after float
}, 500);
