<template>
  <div class="telegram-page">
    <h3>Комманды робота</h3>
    <button class="robot-button-action" @click="help">
      Help
    </button>
    <button class="robot-button-action" @click="me">
      Me
    </button>
    <button class="robot-button-action" @click="clean">
      Clean
    </button>
<!--        audioState === null -->
    <div v-if="!audioState">
      <button  class="robot-button-action" @click="audioStartRecord">
        Start Audio
      </button>
    </div>
    <!--    audioState === start -->
    <div v-if="audioState === 'start'">
      <button class="robot-button-action" @click="audioPlayRecord">
        Play
      </button>
    </div>
    <!--    audioState === play -->
    <div v-if="audioState === 'play'">
      <button class="robot-button-action" @click="audioPauseRecord">
        Pause
      </button>
      <button class="robot-button-action" @click="audioStopRecord">
        Stop
      </button>
    </div>
    <!--    audioState === pause -->
    <div v-if="audioState === 'pause'">
      <button class="robot-button-action" @click="audioPlayRecord">
        Play
      </button>
      <button class="robot-button-action" @click="audioStopRecord">
        Stop
      </button>
    </div>
    <!--    audioState === stop -->
    <div v-if="audioState === 'stop'">
      <button class="robot-button-action" @click="audioPlayRecord">
        Play
      </button>
      <button class="robot-button-action" @click="sendPlayRecord">
        Отправить
      </button>
    </div>
    <audio style="visibility: hidden" src="" id="audioElement" controls></audio>
<!--    <audio class="audio-player" controls autoplay>-->
<!--      <source src="~/assets/mp3/SAINt_Remix.mp3" type="audio/ogg">-->
<!--      <source src="~/assets/mp3/SAINt_Remix.mp3" type="audio/mpeg">-->
<!--      Your browser does not support the audio element.-->
<!--    </audio>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      audioState: null,
      audioChunks: [],
      rec: null,
    }
  },
  mounted() {
    // console.log('input', this.$refs['audio'])
    // const audio = this.$refs['audio']
    // audio.play();
  },
  methods: {
    help() {
      // const tg = window.Telegram.WebApp
      // tg.sendDate
    },
    me() {

    },
    clean() {

    },
    audioStartRecord() {
      this.audioState = 'start'
      this.startusingBrowserMicrophone(true);
    },
    audioPauseRecord() {
      this.audioState = 'pause'
    },
    audioPlayRecord() {
      this.audioState = 'play'
    },
    audioStopRecord() {
      this.rec.stop();
      this.audioState = 'stop'
    },
    sendPlayRecord() {
      this.rec = null;
      this.audioState = null;
      console.log('send to API!!')
    },

    async getUserMedia(constraints) {
      if (window.navigator.mediaDevices) {
        return window.navigator.mediaDevices.getUserMedia(constraints);
      }

      let legacyApi =
          navigator.getUserMedia ||
          navigator.webkitGetUserMedia ||
          navigator.mozGetUserMedia ||
          navigator.msGetUserMedia;

      if (legacyApi) {
        return new Promise(function (resolve, reject) {
          legacyApi.bind(window.navigator)(constraints, resolve, reject);
        });
      } else {
        alert("user api not supported");
      }
    },
    handlerFunction(stream) {
      this.rec = new MediaRecorder(stream);
      this.rec.start();
      this.rec.ondataavailable = (e) => {
        this.audioChunks.push(e.data);
        if (this.rec.state == "inactive") {
          let blob = new Blob(this.audioChunks, { type: "audio/mp3" });
          console.log(blob);
          document.getElementById("audioElement").src = URL.createObjectURL(blob);
        }
      };
    },
    startusingBrowserMicrophone(boolean) {
      this.getUserMedia({ audio: boolean }).then((stream) => {
      this.handlerFunction(stream);
      });
    },
  }
}
</script>

<style>
.audio-player{
  display: none;
}

.telegram-page{
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.robot-button-action{
  appearance: none;
  background-color: #FFFFFF;
  border-radius: 40em;
  border-style: none;
  box-shadow: #ADCFFF 0 -12px 6px inset;
  box-sizing: border-box;
  color: #000000;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: -.24px;
  margin: 0;
  outline: none;
  padding: 1rem 1.3rem;
  //quotes: auto;
  text-align: center;
  text-decoration: none;
  transition: all .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.robot-button-action:hover {
  background-color: #FFC229;
  box-shadow: #FF6314 0 -6px 8px inset;
  transform: scale(1.125);
}

.robot-button-action:active {
  transform: scale(1.025);
}

@media (min-width: 768px) {
  .robot-button-action {
    font-size: 1.5rem;
    padding: .75rem 2rem;
  }
}
</style>
