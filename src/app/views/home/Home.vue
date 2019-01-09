<template lang="pug">
  .home
    img(alt='Vue logo' src='assets/logo.png')
    HelloWorld(msg="Welcome")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './HelloWorld.vue';

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>
