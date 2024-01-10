<template>
  <span class="inline-block text-neon-white-flicker font-['Silkscreen'] mb-2 lg:mb-4 text-xs lg:text-sm">
    <slot>
      {{ content }}
    </slot>
  </span>
</template>

<script setup lang="ts">
export type CommentFlagProps = {
  content?: string
}

defineProps<CommentFlagProps>();
</script>
