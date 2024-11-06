<template>
  <canvas ref="display_canvas" width="600" height="600"></canvas>
</template>

<script setup>
import { ref, onMounted, watch, defineExpose } from 'vue'
import Canvas from '@/js/classes/Canvas'
import Control from '@/js/stores/control'
import Worker from '@/js/worker?worker'

const systemWorker = new Worker()
const display_canvas = ref()
const display = new Canvas(display_canvas)
const link = document.createElement('canvas')

onMounted(() => {
  const offScreenCanvas = link.transferControlToOffscreen()
  systemWorker.postMessage({ method: 'setup', canvas: offScreenCanvas }, [offScreenCanvas])
  displayUpdate()
})

function displayUpdate() {
  display.copy(link)
  requestAnimationFrame(displayUpdate)
}

systemWorker.addEventListener('message', (e) => {
  console.log(e.data.message)
})

watch(
  () => [Control.value.width, Control.value.height],
  (e) => {
    const [width, height] = e
    systemWorker.postMessage({
      method: 'setDimensions',
      width: width,
      height: height
    })
  }
)
watch(
  () => Control.value.isLooping,
  () => {
    if (Control.value.isLooping) {
      systemWorker.postMessage({ method: 'stopLoop' })
    } else {
      systemWorker.postMessage({ method: 'startLoop' })
    }
  }
)

defineExpose({
  download: () => systemWorker.postMessage({ method: 'download' }),
  reset: () => systemWorker.postMessage({ method: 'reset' }),
  info: () => systemWorker.postMessage({ method: 'info' })
})
</script>
