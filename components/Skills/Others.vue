<script lang="ts" setup>
const initAnimation = () => {
  const tl = useGsap.timeline();
  tl.to(`#others`, {
    scrollTrigger: {
      trigger: '#others',
      start: 'top 100%',
      end: 'top 70%',
      scrub: true,
    },
    y: -200,
    x: 10,
    duration: 5,
  });
};

onMounted(() => {
  initAnimation();
});


</script>

<template>
  <div id="others">
        <h3 class="font-secondary text-[2.5vw]">others</h3>
        <div id="others-tools" class="flex gap-2">
          <UAvatar v-for="u in 10" :key="u" alt="u" />
        </div>
    </div>
</template>

<style scoped>

</style>