const emotions = [
  {
    message: "This is for my most beautiful and prettiest Princess 💖",
    gif: "236edd320f07f4fb99a823ae19ef7c49.gif"
  },
  {
    message: "Even if we have some hard days, I will always try to make sure you feel loved and safe with me 💞",
    gif: "6721f229ec1eb83ef1110b7a0ec5572f.gif"
  },
  {
    message: "I know sometimes I talk stupid, and say upsetting things, but I just can't help the thought of losing you 😔",
    gif: "b710f21fee78da75eecb22b407658ead.gif"
  },
  {
    message: "What matters is that, in the end, we always hold on to each other and fix everything together. This careless boy cares more than he can ever explain — and he’ll do anything to protect your smile and keep you happy. 💗",
    gif: "cfcc7cc8e55482c77ff28e29facde023.gif"
  },
  {
    message: "I LOVE YOU MY SWEEET LITTLE BABY ADITU 💗",
    gif: "61665bb472cd6e7ce74c8aaf5fa182f0.gif"
  },
  {
    message: "I know I’ve done a lot of things that caused a mess... But please never forget how much I love you. I want to keep you safe and happy — always. Never give up on me, Aditu... 💔",
    gif: "4dd76056feee92a2f0e669afc2361678.gif"
  }
];

let index = 0;

window.onload = function () {
  const textBox = document.getElementById("emotionText");
  const gifBox = document.getElementById("emotionGif");
  const nextBtn = document.getElementById("nextBtn");
  const musicBtn = document.getElementById("toggleMusic");
  const bgMusic = document.getElementById("bgMusic");

  // Typing Effect
  function typeMessage(message, element) {
    element.textContent = "";
    let i = 0;
    const chars = [...message]; // Handle emojis properly
    const typing = setInterval(() => {
      element.textContent += chars[i];
      i++;
      if (i >= chars.length) clearInterval(typing);
    }, 50);
  }

  // Next button logic
  nextBtn.addEventListener("click", () => {
    const emotion = emotions[index];
    typeMessage(emotion.message, textBox);
    gifBox.src = emotion.gif;
    index = (index + 1) % emotions.length;
  });

  // Music button logic
  musicBtn.addEventListener("click", () => {
    if (bgMusic.paused) {
      bgMusic.play();
      musicBtn.textContent = "🔊 Pause Music";
    } else {
      bgMusic.pause();
      musicBtn.textContent = "🔈 Play Music";
    }
  });

  // First click triggers music autoplay
  document.body.addEventListener("click", () => {
    if (bgMusic.paused) {
      bgMusic.play();
    }
  }, { once: true });

  // Floating hearts
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 4 + Math.random() * 6 + "s";
    document.body.appendChild(heart);
  }
};
