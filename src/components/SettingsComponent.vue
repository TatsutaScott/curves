<template>
  <div id="settings">
    <div id="settings_header" ref="settings_header">
      <span @click="showHide = !showHide" id="openClose">{{ showHide ? '▼' : '▲' }}</span>
      <div id="drag" v-if="showHide"></div>
    </div>
    <div id="settings_ui">
      <div id="sliders">
        <Slider name="width" v-model="Control.width" :lo="100" :hi="8000" :step="100" />
        <Slider name="height" v-model="Control.height" :lo="100" :hi="8000" :step="100" />
        <Slider name="curves" v-model="Control.curves" :lo="1" :hi="10" />
        <Slider name="points" v-model="Control.points" :lo="1" :hi="20" />
      </div>
      <div id="buttons">
        <Toggle on_text="show points" off_text="hide points" v-model="Control.showPoints"></Toggle>
        <Toggle on_text="start loop" off_text="stop loop" v-model="Control.isLooping"></Toggle>

        <Button
          @click="() => (Control.isLooping = !Control.isLooping)"
          :text="Control.isLooping ? 'Start Loop' : 'Stop loop'"
        >
        </Button>
        <Button text="download" @click="emits('download')"></Button>
        <Button text="reset" @click="emits('reset')"></Button>
        <Button text="randomize" @click="emits('randomize')"></Button>
        <Button text="info" @click="emits('info')"></Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Control from '@/js/stores/control'
import Toggle from '@/components/params/toggleComp.vue'
import Button from '@/components/params/ButtonComp.vue'
import Slider from '@/components/params/SliderComp.vue'

import { dragAndDrop } from '@/js/util/ui_util'
import { ref, defineEmits, onMounted } from 'vue'

const showHide = ref(true)
const settings_header = ref()

const emits = defineEmits(['download', 'reset', 'randomize', 'info'])
onMounted(() => dragAndDrop(settings_header.value))
</script>

<style lang="scss" scoped>
@use '@/assets/styles/util';

#settings {
  @include util.border(1px, black, 5px);
  @include util.position(20px, 20px);
  background-color: rgba(255, 255, 255, 0.125);
  width: min-content;
  padding: 1rem;
}

#settings_header {
  background-color: rgba(150, 150, 150, 0.125);
  border-radius: 5px;
  padding: 0.25rem;
  span {
    margin-left: 0.25rem;
  }
}

#sliders {
  margin: 1rem 0;
}

#buttons {
  @include util.flex(row, space-between, center);
  gap: 0.5rem 0;
}
</style>
