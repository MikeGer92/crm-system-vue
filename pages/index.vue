<template>
  <div class="p-10">
    <h1 class="font-bold text-2xl mb-10">CRM System</h1>
  </div>
  <UiCard class="mb-3" draggable="false">
    <UiCardHeader role="button">name card</UiCardHeader>
    <UiCardContent>Компания</UiCardContent>
    <UiCardFooter>Date</UiCardFooter>
  </UiCard>
</template>

<script setup lang="ts">
import { type ICard, type IColumn } from '~/components/kanban/kanban.types';


useSeoMeta({
  title: 'Home | CRM'
})

const dragCardRef = ref<ICard | null>(null)
const sourceColumnRef = ref<IColumn | null>(null)

</script>



<style scoped>

</style>