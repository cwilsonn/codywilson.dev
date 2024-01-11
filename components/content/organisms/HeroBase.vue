<template>
  <div :class="{
    'bg-black relative w-full overflow-hidden prose prose-xl prose-neutral !prose-invert max-w-none': true,
    'min-h-[calc(100vh-112px)] py-24 flex items-center justify-center': size === 'screen',
    'py-64': size === 'lg',
    'py-48': size === 'md',
    'py-24': size === 'sm',
  }">
    <div class="container z-[100] text-white">
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
        <ContentSlot :use="$slots.default"/>
      </div>
    </div>
    <AtomsStaticBase />
  </div>
</template>

<script lang="ts" setup>
// TYPES
type HeroBaseProps = {
  title?: string,
  preTitle?: string,
  size?: 'sm' | 'md' | 'lg' | 'screen',
}

// PROPS
withDefaults(defineProps<HeroBaseProps>(), {
  size: 'lg',
});
</script>
