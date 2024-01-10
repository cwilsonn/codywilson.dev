<template>
  <div class="font-['Open_Sans'] layout-container">
    <AppHeader />
    <AppSkipLinks />
    <AppMainContent>
      <slot></slot>
    </AppMainContent>
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '@/store/global';

const route = useRoute();
const { state, toggleMenu } = useGlobalStore();

watch(() => route.fullPath, () => {
  if (state.isMenuVisible) {
    toggleMenu(false);
  }
}, { deep: true, immediate: true });
</script>
