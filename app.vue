<template>
  <div>
    <VitePwaManifest />
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  script: [{ children: "console.log('Hello, world!');" }],
});
</script>

<style>
body {
  background: var(--tg-theme-bg-color);
  color: var(--tg-theme-text-color);
}
</style>
