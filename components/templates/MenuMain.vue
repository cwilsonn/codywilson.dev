<template>
  <nav
    class="fixed top-[112px] right-0 w-screen max-w-none md:max-w-[66.666vw] lg:max-w-[33.333vw] bg-black h-screen transition-all duration-200 z-[100]"
    :class="{
      'translate-x-full': !state.isMenuVisible,
    }">
    <ul class="text-4xl uppercase">
      <li v-for="link in menuLinks"
        :key="link.title"
        class="block">
        <NuxtLink :to="link.to"
          class="block p-8 transition-all duration-200 border-b-2 border-neutral-600 text-neon-white hover:border-green-500 focus:border-opacity-100 focus:border-green-500 hover:bg-white hover:bg-opacity-5 focus:bg-white hover:text-neon-white-flicker focus:text-neon-white-flicker">
          {{ link.title }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { useGlobalStore } from '@/store/global';

// COMPOSABLES
const { state } = useGlobalStore();

// TEMPLATE REFS


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
