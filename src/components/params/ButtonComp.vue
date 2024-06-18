<template>
  <div>
    <span class="button">{{ props.text }}</span>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  text: String
})
</script>

<style>
.button {
  border: solid slategray 1px;
  border-radius: 5px;
  padding: 0.125rem 0.25rem;
  font-size: 10pt;
  cursor: pointer;
  box-sizing: border-box;
}
</style>
