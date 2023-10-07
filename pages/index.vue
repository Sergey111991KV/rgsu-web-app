<template>
  <div>
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

    }
  }
}
</script>

<style>
.audio-player{
  display: none;
}
.robot-button-action{
  background: none;
  border: none;
}
</style>
