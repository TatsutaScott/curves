<template>
  <div>
    <span
      :class="{ active: !props.modelValue, button: true }"
      @click="$emit('update:modelValue', !props.modelValue)"
    >
      {{ !props.modelValue ? props.off_text : props.on_text }}
    </span>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  on_text: String,
  off_text: String,
  modelValue: Boolean
})

defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped>
@use '@/assets/styles/util';

.button {
  @include util.border(1px, slategray, 5px);

  padding: 0.125rem 0.25rem;
  font-size: 10pt;
  cursor: pointer;
  box-sizing: border-box;
}

.active {
  background: rgba(150, 150, 150, 0.125);
}
</style>
