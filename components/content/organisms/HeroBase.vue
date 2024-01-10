<template>
  <div :class="{
    'relative w-full overflow-hidden bg-black prose prose-xl prose-neutral !prose-invert max-w-none': true,
    'min-h-[calc(100vh-112px)] flex items-center justify-center': size === 'screen',
    'py-48': size === 'lg',
    'py-36': size === 'md',
    'py-24': size === 'sm',
  }">
    <AtomsStaticBase />
    <div class="container z-10 text-white">
      <CommentFlag :content="preTitle" />
      <h1
        :class="{
          'font-[\'IBM_Plex_Mono\'] !mt-0 text-5xl font-bold lg:text-6xl': true,
          'mb-12': $slots.default,
        }">
        <ContentSlot :use="$slots.title" unwrap="span">
          {{ title }}
        </ContentSlot>
      </h1>
      <div v-if="$slots.default"
        class="mt-8 max-w-prose lg:mt-16">
        <ContentSlot :use="$slots.default"></ContentSlot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
type HeroBaseProps = {
  title?: string,
  preTitle?: string,
  size?: 'sm' | 'md' | 'lg' | 'screen',
}

withDefaults(defineProps<HeroBaseProps>(), {
  size: 'sm',
});
</script>
