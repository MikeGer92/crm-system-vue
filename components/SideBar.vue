import { NuxtLink } from '../.nuxt/components';
<template>
  <aside class="px-5 py-8 bg-sidebar h-full relative w-full">
    <NuxtLink class="mb-10 block" to="/" >    
      <NuxtImg class="mx-auto" src="../public/images/logo.svg" alt="" width="100px"/>
    </NuxtLink >
    <button class="absolute top-2 right-3 transition-colors hover:text-primary" @click="logout">
      <Icon name="line-md:logout" size="22px"/>
    </button>
     <LayoutMenu />
  </aside>
</template>



<script lang="ts" setup>
import { account } from '~/lib/appwrite';

const isLoadingStore = useIsLoadingStore()
const store = useAuthStore()
const router = useRouter()

const logout = async () => {
  isLoadingStore.set(true)
  await account.deleteSessions()
  store.clear()
  await navigateTo('/login')
  isLoadingStore.set(false)
}
</script>
<style lang="scss">
  
</style>