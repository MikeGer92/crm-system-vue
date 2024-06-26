<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="
      cn(
        'rounded-lg  bg-card text-card-foreground animation border border-transparent transition-colors hover:border-[#252c83d]',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>

@keyframes show {
  from {
    @apply border-[#252c83d];
    transform: scale(0.5);
    translate: 300px;
    opacity: 0.4;
  }
  90% {
    @apply border-[#252c83d];
  }
  to {
    @apply border-transparent;
    transform: scale(1);
    translate: 0;
    opacity: 1;
  }
}

.animation {
  animation: show 0.33s ease-in-out
}

</style>
