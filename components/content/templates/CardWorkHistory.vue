<template>
  <div class="flex flex-wrap items-start p-8 prose-xl lg:p-16 card card--work-history gap-x-8 bg-neutral-800 max-w-none prose-invert"
    :class="{
      'border-2 border-green-500': isCurrent,
      'border-2 border-neutral-600': !isCurrent,
    }">
    <header>
      <h2 class="mt-0">{{ company }}</h2>
      <b class="font-bold text-green-500">{{ role }}</b><br/>
      {{ formatWorkHistoryDate(startDate) }} - {{ computedEndDate }}<br/>
      <h3 class="prose-headings:h4">Tools</h3>
      <ul class="px-0 mt-2 mb-8 list-none columns-2">
        <li v-for="tool in tools" class="pl-0">
          <Icon :name="tool.icon"
            size="1.25em"
            :class="`mr-1 ${tool.color || 'text-white'}`" />
          {{ tool.name }}
        </li>
      </ul>
    </header>
    <div class="ml-auto mr-0 lg:w-2/3">
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
