<script lang="ts" setup>
const initAnimation = () => {
  const tl = useGsap.timeline();
  tl.from(`#skill-section #skill-heading`, {
    scrollTrigger: {
      trigger: '#skill-section',
      start: 'top 100%',
      end: 'top 70%',
      scrub: true,
    },
    x: -500,
    opacity: 0.2,
    onComplete: () => {
      tl.to(`#skill-section #skill-heading`, {
        scrollTrigger: {
          trigger: '#skill-section',
          start: 'top 60%',
          end: 'top 50%',
          scrub: true,
        },
        y: -200,
        x: -500,
        scale: 0.4,
        duration: 2,
      });
    },
  });
  tl.to(`#skill-section #skill-sub-heading`, {
    scrollTrigger: {
      trigger: '#skill-section',
      start: 'top 60%',
      end: 'top 40%',
      scrub: true,
    },
    y: -350,
    x: -350,
    scale: 0.4,
    duration: 2,
  });
};

onMounted(() => {
  initAnimation();
});
</script>

<template>
  <UContainer as="section" id="skill-section" class="h-screen">
    <h2 id="skill-heading" class="font-secondary text-[12vw] text-center">
      Skills
    </h2>
    <h2 id="skill-sub-heading" class="font-secondary text-[3vw]">
      I like to take responsibility to craft aesthetic user experience using
      modern frontend architecture.
    </h2>

    <SkillsFrontend />
    <SkillsInterface />
    <SkillsOthers />
  </UContainer>
</template>

<style scoped></style>
