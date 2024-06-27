<template>
  <div class="text-center mb-2">
    <button class="transition-all opacity-5 hover:opacity-100 hover:text-[#a252c8]"
      @click="isOpenForm = !isOpenForm"
    > 
      <Icon 
        v-if="isOpenForm"
        name="radix-icons:arrow-up"
        class="fade-in-100 fade-out-0"
        size="25">
      </Icon>
      <Icon 
        v-else
        name="radix-icons:plus-circled"
        class="fade-in-100 fade-out-0"
        size="25">
      </Icon>
    </button>
  </div>
  <form></form>
</template>

<script setup lang="ts">

import { useMutation } from '@tanstack/vue-query';
import { v4 as uuidv4 } from 'uuid' 
import { DefineProps } from 'vue';
import { COLLECTION_DEALS, DB_ID } from '~/app.constants';
import type { IDeal } from '~/types/deals.types';

const isOpenForm = ref<boolean>(false)
</script>

<style scoped>

</style>