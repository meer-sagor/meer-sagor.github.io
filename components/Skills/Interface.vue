<script lang="ts" setup>
const initAnimation = () => {
  const tl = useGsap.timeline();
  tl.to(`#interface`, {
    scrollTrigger: {
      trigger: '#interface',
      start: 'top 100%',
     end: 'top 70%',
      scrub: true,
    },
    y: -300,
    x: 10,
    duration: 5,
  });
};

onMounted(() => {
  initAnimation();
});


</script>

<template>
  <div id="interface">
        <h3 class="font-secondary text-[2.5vw]">user interface</h3>
        <div id="interface-tools" class="flex gap-2">
          <UAvatar v-for="u in 10" :key="u" alt="u" />
        </div>
    </div>
</template>

<style scoped>

</style>