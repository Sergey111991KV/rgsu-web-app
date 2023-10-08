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
    <button class="robot-button-action" @click="audioStartRecord">
      Start Audio
    </button>
<!--    <audio-recorder-->
<!--        upload-url="YOUR_API_URL"-->
<!--        :attempts="3"-->
<!--        :time="2"-->

<!--        :before-recording="callback"-->
<!--        :pause-recording="callback"-->
<!--        :after-recording="callback"-->
<!--        :select-record="callback"-->
<!--        :before-upload="callback"-->
<!--        :successful-upload="callback"-->
<!--        :failed-upload="callback"/>-->
<!--    <button @click="audioPauseRecord">-->
<!--      Pause-->
<!--    </button>-->
<!--    <button @click="audioPlayRecord">-->
<!--      Play-->
<!--    </button>-->
<!--    <button @click="audioStopRecord">-->
<!--      Stop-->
<!--    </button>-->
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
      audioState: null
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
    },
    audioPauseRecord() {

    },
    audioPlayRecord() {

    },
    audioStopRecord() {

    },
    callback (data) {
      console.debug(data)
    }
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
  quotes: auto;
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
