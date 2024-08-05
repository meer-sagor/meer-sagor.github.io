<script lang="ts" setup>
const initAnimation = () => {
  const tl = useGsap.timeline();
  tl.to(`#frontend`, {
    scrollTrigger: {
      trigger: '#frontend',
      start: 'top 100%',
      end: 'top 70%',
      scrub: true,
    },
    y: -350,
    x: 10,
    duration: 5,
  });
};

onMounted(() => {
  initAnimation();
});


</script>

<template>
  <div id="frontend">
        <h3 class="font-secondary text-[2.5vw]">Frontend development</h3>
        <div id="frontend-tools" class="flex gap-2">
          <UAvatar v-for="u in 10" :key="u" alt="u" />
        </div>
    </div>
</template>

<style scoped>

</style>