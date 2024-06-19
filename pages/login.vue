import { type } from '../.nuxt/types/imports';
<template>
  <div class="flex items-center justify-center min-h-screen w-full">
    <div class="rounded bg-sidebar w-1/4 p-5">
      <h1 class="text-2xl font-bold text-center mb-5">Login</h1>

      <form>
        <UiInput 
          placeholder="Email" 
          type="email" 
          class="mb-3"
          v-model="refEmail"
        />
        <UiInput 
          placeholder="Password" 
          type="string" 
          class="mb-3"
          v-model="refPassword"
        />
        <UiInput 
          placeholder="Name" 
          type="string" 
          class="mb-3"
          v-model="refName"
        />

      </form>
    </div>

  </div>
</template>

<script setup lang="ts">

useSeoMeta({
  title: 'Login'
})

const refEmail = ref('')
const refPassword = ref('')
const refName = ref('')

watch(refEmail, () => {
  console.log(refEmail.value)
})

</script>

<style scoped>

</style>