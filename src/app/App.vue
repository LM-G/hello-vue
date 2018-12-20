<template lang="pug">
v-app
  Header
  v-content
    #nav
      router-link(to="/") Home
      span |
      router-link(to="/earth") Earth
      span |
      router-link(to="/mars") Mars
    v-container(fluid)#main-container
      router-view
    v-footer
</template>

<script lang="ts">
import Header from '@app/core/components/Header.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Header
  }
})
export default class App extends Vue {}
</script>

<style lang="stylus">
@import '../styles/main.styl';

a
  font-weight bold
  color #2c3e50

  &.router-link-exact-active
    color #42b983
</style>
