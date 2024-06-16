import { componentNames } from '../.nuxt/components';
<script lang="ts" setup>

</script>

<template>
  <section class="grid">
    <SideBar />
    <div>
      <slot />
    </div>
  </section>

</template>

<style scoped >
  .grid {
    display: grid;
    grid-template-columns: 1fr 6fr;
    min-height: 100vh;
  }

</style>