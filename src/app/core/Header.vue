<template lang="pug">
v-toolbar
  v-toolbar-side-icon
  v-toolbar-title {{ $t("header.title") }}
  v-spacer
  v-toolbar-items
    v-btn(flat) Link One
    v-btn(flat) Link Two
    v-btn(flat) Link Three
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Header extends Vue {}
</script>

<style lang="stylus" scoped></style>
