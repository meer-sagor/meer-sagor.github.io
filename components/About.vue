<script lang="ts" setup>
import SplitType from 'split-type';

const initAnimation = () => {
  const splitTypes = document.querySelectorAll('.reveal-type') as NodeListOf<HTMLElement>;;
  splitTypes.forEach((char, i) => {
    const text = new SplitType(char, { types: 'chars' });
    console.log('text', text);
    useGsap.from(text.chars, {
      scrollTrigger: {
        trigger: char,
        start: 'top 80%',
        end: 'top 20%',
        scrub: true,
        markers: true,
      },
      opacity: 0.1,
      stagger: 0.1,
    });
  });
};

onMounted(() => {
  initAnimation();
});
</script>

<template>
  <UContainer as="section" class="h-screen grid place-items-center">
    <p class="text-[5em] reveal-type">
      I enjoy the challenge of transforming complex design concepts into
      functional web applications
    </p>
    <p class="text-[5em] reveal-type">
      and working collaboratively with other developers and designers.
    </p>
  </UContainer>
</template>
