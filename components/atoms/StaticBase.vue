<template>
  <div class="absolute inset-0 bg-static"></div>
</template>

<style>
@keyframes animatedBackground {
  0% { background-position: 0 0; }
  10% { background-position: -100px 100px; }
  20% { background-position: -150px -100px; }
  30% { background-position: -100px 100px; }
  40% { background-position: -100px -150px; }
  50% { background-position: -100px 200px; }
  60% { background-position: -200px -100px; }
  70% { background-position: 50px 100px; }
  80% { background-position: 100px -150px; }
  90% { background-position: 0px 200px; }
  100% { background-position: -100px 100px; }
}

.bg-static {
  @apply absolute -inset-[500px] opacity-30 bg-[length:320px_320px] [animation:animatedBackground_0.2s_linear_infinite] border-[1000px] border-[hsla(0,0%,100.0000%,0.05000)];
  background: transparent url(https://www.dropbox.com/s/h7ab1c82ctzy83n/noise.png?raw=1) 0 0;
  transition: border-top-width 0.5s ease 0.5s,
              border-left-width 0.5s ease  0.75s,
              border-bottom-width 0.5s ease 0.5s,
              border-right-width 0.5s ease 0.75s,
              border-color 0.5s ease;
}
</style>
