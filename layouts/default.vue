<template>
  <div class="font-['Open_Sans'] layout-container relative">
    <AtomsCrtBase />
    <AppHeader />
    <AppSkipLinks />
    <AppMainContent>
      <slot></slot>
    </AppMainContent>
  </div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '@/store/global';

// COMPOSABLES
const route = useRoute();
const { state, toggleMenu } = useGlobalStore();

// WATCHERS
// Ensure scrolling on body is disabled when menu is open
watch(() => state.isMenuVisible, (value) => {
  const bodyEl = document.querySelector('body');
  value
    ? bodyEl?.classList.add('overflow-hidden')
    : bodyEl?.classList.remove('overflow-hidden');
});

// Close menu after navigation if it's open
watch(() => route.fullPath, () => {
  if (state.isMenuVisible) {
    toggleMenu(false);
  }
}, { deep: true, immediate: true });
</script>
