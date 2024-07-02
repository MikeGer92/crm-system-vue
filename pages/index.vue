<template>
  <div class="p-10">
    <h1 class="font-bold text-2xl mb-10">CRM System</h1>
  </div>
  <div v-if="isLoading">Loading...</div>
  <div v-else>
    <div class="grid grid-cols-5 gap-10">
      <div v-for="(column, index) in data" :key="column.id">
        <div class="rounded bg-slate-700 py-1 px-5 mb-2 text-center">
          {{ column.name }}
        </div>
        <div>
          <KanbanCreateDeal :refetch="refetch" :status="column.id"></KanbanCreateDeal>
          <UiCard v-for="card in column.items" :key="card.id" class="mb-3" draggable="false">
            <UiCardHeader role="button">{{ card.name }}</UiCardHeader>
            <UiCardDescription>{{ convertCurrency(card.price) }}</UiCardDescription>
            <UiCardContent>{{ card.companyName }}</UiCardContent>
            <UiCardFooter>{{ dayjs(card.$createdAt).format('DD MMMM YYYY') }}</UiCardFooter>
          </UiCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type ICard, type IColumn } from '~/components/kanban/kanban.types';
import { useKanbanQuery } from '~/components/kanban/useKanbanQuery';
import { convertCurrency } from '~/lib/convertCurrency';
import dayjs, { Dayjs } from 'dayjs';


useSeoMeta({
  title: 'Home | CRM'
})

const dragCardRef = ref<ICard | null>(null)
const sourceColumnRef = ref<IColumn | null>(null)
const {data, isLoading, refetch} = useKanbanQuery()

</script>



<style scoped>

</style>