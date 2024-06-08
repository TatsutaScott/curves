<template>
  <canvas ref="display" width="600" height="600"></canvas>
</template>

<script setup>
import { ref, onMounted, watch, defineExpose } from 'vue'
import Control from '@/js/stores/control'
import Worker from '@/js/worker?worker'

const systemWorker = new Worker()
const display = ref()

onMounted(() => {
  const offScreenCanvas = display.value.transferControlToOffscreen()
  systemWorker.postMessage({ method: 'setup', canvas: offScreenCanvas }, [offScreenCanvas])
})

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

defineExpose({
  download: () => systemWorker.postMessage({ method: 'download' }),
  reset: () => systemWorker.postMessage({ method: 'reset' }),
  info: () => systemWorker.postMessage({ method: 'info' })
})
</script>
