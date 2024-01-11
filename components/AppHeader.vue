<template>
  <header
    class="font-['Silkscreen'] fixed top-0 right-0 left-0 bg-black text-white py-8 z-[250]">
    <div class="container relative flex items-center">
      <Transition name="fade">
        <NuxtLink to="/">
          <span class="text-4xl text-neon-white-pulsate hover:text-neon-white-flicker focus:text-neon-white-flicker">CW.DEV</span>
        </NuxtLink>
      </Transition>
      <button
        class="p-2 ml-auto text-white transition-all duration-200 rounded hover:bg-white hover:bg-opacity-10 focus:bg-white focus:bg-opacity-10"
        ref="menuButtonRef"
        @click.prevent="toggleMenu()">
        <Icon v-if="!state.isMenuVisible"
          name="tabler:menu"
          size="2em" />
        <Icon v-else
          name="tabler:x"
          size="2em" />
      </button>
    </div>
    <TemplatesMenuMain ref="menuMainRef" />
  </header>
</template>

<script setup lang="ts">
import { useGlobalStore } from '@/store/global';

// COMPOSABLES
const { state, toggleMenu } = useGlobalStore();

// TEMPLATE REFS
const menuMainRef = ref<HTMLElement>();
const menuButtonRef = ref<HTMLElement>();

// EVENT HANDLERS
onClickOutside(
  menuMainRef,
  () => {
    if (state.isMenuVisible) {
      toggleMenu(false);
    }
  },
  { ignore: [menuButtonRef] },
);
</script>
