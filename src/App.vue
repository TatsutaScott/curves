<template>
  <h1>Curves</h1>
  <CanvasComp ref="curves_sketch" />
  <SettingsComp
    @download="curves_sketch.download()"
    @reset="curves_sketch.reset()"
    ref="settings"
  />
</template>

<script setup>
import CanvasComp from '@/components/CanvasComponent.vue'
import SettingsComp from '@/components/SettingsComponent.vue'
import { ref } from 'vue'

const curves_sketch = ref(null)
const settings = ref(null)
</script>

<style scoped></style>
