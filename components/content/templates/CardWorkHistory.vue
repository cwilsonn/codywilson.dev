<template>
  <div
    class="grid items-start grid-cols-1 lg:grid-cols-[auto_auto_1fr] auto-rows-auto p-8 prose-xl lg:p-16 card card--work-history gap-x-16 bg-neutral-800 max-w-none prose-invert"
    :class="{
      'border-2 border-green-500': isCurrent,
      'border-2 border-neutral-700': !isCurrent,
    }">
    <h2 class="mt-0 lg:col-span-2 lg:col-start-1 lg:row-span-1">{{ company }}</h2>
    <div class="lg:col-span-1 lg:col-start-1 lg:row-span-1">
      <span class="font-bold">{{ role }}</span><br />
      <span>{{ formatWorkHistoryDate(startDate) }} - {{ computedEndDate }}</span><br />
    </div>
    <div class="lg:col-span-1 lg:col-start-1 lg:row-span-1">
      <h3 class="prose-headings:h4">Tools</h3>
      <ul class="px-0 mt-2 mb-8 list-none columns-2 lg:col-span-1 lg:row-span-1">
        <li v-for="tool in tools"
        class="pl-0 my-0">
          <Icon :name="tool.icon"
          size="1.25em"
          :class="`mr-1 ${tool.color || 'text-white'}`" />
          {{ tool.name }}
        </li>
      </ul>
    </div>
    <div class="w-full mb-8 border-b border-neutral-700 lg:border-r lg:w-auto lg:h-full lg:col-span-1 lg:col-start-2 lg:row-span-2 lg:row-start-2 lg:mb-0"></div>
    <div class="lg:col-start-3 lg:row-span-2 lg:row-start-2 lg:col-span-2">
      <slot>
        {{ description }}
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
export type WorkHistoryTool = {
  icon: string,
  color?: string,
  name: string,
}

export type WorkHistoryItem = {
  company: string,
  location: string,
  role: string,
  startDate: string,
  endDate?: string,
  isCurrent?: boolean,
  description: string,
  tools: Array<WorkHistoryTool>
}

const props = withDefaults(defineProps<WorkHistoryItem>(), {
  isCurrent: false,
});

const computedEndDate = computed(() => {
  if (props.isCurrent) return 'Current';
  if (props.endDate) return formatWorkHistoryDate(props.endDate);
});

function formatWorkHistoryDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
  });
}
</script>
