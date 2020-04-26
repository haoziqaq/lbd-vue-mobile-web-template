export function createBGM(src) {
  let preBGM = document.getElementById('bgm');
  preBGM && document.body.removeChild(preBGM);

  let audio = document.createElement('audio');
  audio.src = src;
  audio.loop = true;
  audio.preload = true;
  audio.id = 'bgm';

  document.addEventListener("WeixinJSBridgeReady", () => {
    audio.play();
  });
  document.body.appendChild(audio);
  audio.play();
}

export function playBGM() {
  let audio = document.getElementById('bgm');
  audio.play();
}

export function resetBGM() {
  let audio = document.getElementById('bgm');
  audio.currentTime = 0;
  audio.pause();
}

export function pauseBGM() {
  let audio = document.getElementById('bgm');
  audio.pause();
}
