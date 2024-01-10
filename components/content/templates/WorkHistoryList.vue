<template>
  <section class="flex flex-col py-16 gap-y-16">
    <CardWorkHistory v-for="(item, index) in items"
      :key="`${item.company}-${index}`"
      v-bind="item" />
  </section>
</template>

<script setup lang="ts">
import type { WorkHistoryItem } from './CardWorkHistory.vue'

export type WorkHistoryListProps = {
  items: WorkHistoryItem[],
}

defineProps<WorkHistoryListProps>();
</script>
