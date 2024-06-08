<template>
  <div id="settings">
    <button @click="() => (Control.isLooping = !Control.isLooping)">
      {{ Control.isLooping ? 'Start Loop' : 'Stop loop' }}
    </button>
  </div>
</template>

<script setup>
import Control from '@/js/stores/control'
</script>
