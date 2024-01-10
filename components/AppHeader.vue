<template>
  <header
    class="font-['Silkscreen'] fixed top-0 right-0 left-0 bg-black text-white py-8 z-[100]">
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
    <nav class="fixed top-[112px] right-0 w-screen max-w-none md:max-w-[66.666vw] lg:max-w-[33.333vw] bg-black h-screen transition-all duration-200 z-[100]"
      :class="{
        'translate-x-full': !state.isMenuVisible,
      }"
      ref="menuMainRef">
      <ul class="text-4xl uppercase">
        <li v-for="link in menuLinks"
          :key="link.title"
          class="block border-b-2 border-white border-opacity-20">
          <NuxtLink :to="link.to"
            class="block p-8 transition-all duration-200 text-neon-white hover:bg-white hover:bg-opacity-10 focus:bg-white focus:bg-opacity-10 hover:text-neon-white-flicker focus:text-neon-white-flicker">
            {{ link.title }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useGlobalStore } from '@/store/global';

const { state, toggleMenu } = useGlobalStore();

const menuMainRef = ref<HTMLElement>();
const menuButtonRef = ref<HTMLElement>();
const menuLinks = [
  {
    title: 'About me',
    to: '/about-me',
  },
  {
    title: 'Work experience',
    to: '/work-experience',
  },
  {
    title: 'Projects',
    to: '/projects',
  },
  {
    title: 'Blog',
    to: '/blog',
  },
  {
    title: 'Contact me',
    to: '/contact-me',
  },
];

watch(() => state.isMenuVisible, (value) => {
  const bodyEl = document.querySelector('body');
  value
    ? bodyEl?.classList.add('overflow-hidden')
    : bodyEl?.classList.remove('overflow-hidden');
});

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

<style>
.fade-enter-active,
.fade-leave-active {
  @apply transition-opacity duration-500 ease-in;
}

.fade-enter-from,
.fade-leave-to {
  @apply opacity-0;
}
</style>
