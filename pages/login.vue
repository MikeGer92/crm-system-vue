import { type } from '../.nuxt/types/imports';
import { UiButton } from '../.nuxt/components';
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
          type="password" 
          class="mb-3"
          v-model="refPassword"
        />
        <UiInput 
          placeholder="Name" 
          type="name"
          class="mb-3"
          v-model="refName"
        />
        <div class="flex items-center justify-center gap-5">
          <UiButton type="button">Login</UiButton>
          <UiButton type="button">Register</UiButton>
        </div>
      </form>
    </div>

  </div>
</template>

<script setup lang="ts">
import { useIsLoadingStore } from '~/store/auth.store';


useSeoMeta({
  title: 'Login'
})

const refEmail = ref('')
const refPassword = ref('')
const refName = ref('')

watch(refEmail, () => {
  console.log(refEmail.value)
})

const isLoadingStore = useIsLoadingStore()

const router = useRouter()

</script>

<style scoped>

</style>