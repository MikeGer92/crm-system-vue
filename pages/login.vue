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
          <UiButton type="button" @click="login">Login</UiButton>
          <UiButton type="button" @click="register">Register</UiButton>
        </div>
      </form>
    </div>

  </div>
</template>

<script setup lang="ts">

import { v4 as uuidv4 } from 'uuid'
import { account } from '~/lib/appwrite';
import { useAuthStore, useIsLoadingStore } from '~/store/auth.store';


useSeoMeta({
  title: 'Login'
})

const refEmail = ref('')
const refPassword = ref('')
const refName = ref('')
const authStore = useAuthStore()
const route = useRoute()

watch(refEmail, () => {
  console.log(refEmail.value)
})

const isLoadingStore = useIsLoadingStore()

const router = useRouter()

const login = async () => {
  isLoadingStore.set(true)
  await account.createEmailPasswordSession(refEmail.value, refPassword.value)
  const response = await account.get()
  if (response) {
    authStore.set({
      email: response.email,
      name: response.name,
      status: response.status
    })
  }
  refEmail.value = ''
  refName.value = ''
  refPassword.value = ''
  await navigateTo({path: '/'})
  isLoadingStore.set(false)
}

const register = async () => {
  await account.create(uuidv4(), refEmail.value, refPassword.value, refName.value)
  await login()
}

</script>

<style scoped>

</style>