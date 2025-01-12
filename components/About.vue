<script lang="ts" setup>
import SplitType from 'split-type';

const initAnimation = () => {
  const splitTypes = document.querySelectorAll('.reveal-type') as NodeListOf<HTMLElement>;;
  splitTypes.forEach((char, i) => {
    const text = new SplitType(char, { types: 'chars' });
    useGsap.from(text.chars, {
      scrollTrigger: {
        trigger: char,
        start: 'top 80%',
        end: 'top 20%',
        scrub: true,
      },
      opacity: 0.1,
      stagger: 0.1
    });
  });
};

onMounted(() => {
  initAnimation();
});
</script>

<template>
  <UContainer as="section" class="h-screen">
    <h2 class="text-[3rem] mb-[16px]">🚀 My Programming <span class="text-primary-500">Journey</span> </h2>
    <div class="space-y-10">
      <p class="text-[1.5rem] reveal-type">
        I started my journey as a general student, passing my SSC examination in 2019. Afterward, I joined a computer training program where I learned skills like composing, printing pictures, creating job applications, and admissions flaps. Started work in a computer store, During this time, I began thinking about how to attract more customers and provide better services at my store.
      </p>
      <p class="text-[1.5rem] reveal-type">
        When I shared my thoughts with my brother, he advised me to learn programming for building a news website, which opened a new path for me. I started learning programming while working full-time at my store. My nights were dedicated to studying <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>. With this foundation, I began taking on small projects on Fiverr.
      </p>
      <p class="text-[1.5rem] reveal-type">
        After gaining some experience and persistence over time, After gaining some experience and persistence over time, after a long time, I received an internship offer and joined on February 14, 2022. During this internship and now, I worked on various technologies, including <b>React.js</b>, <b>Next.js</b>, <b>Vue.js</b>, and <b>Nuxt.js</b>.
      </p>
      <p class="text-[1.5rem] reveal-type">
        Beyond my spellbinding code, I'm a creative troubleshooter with a hawk's eye for detail. I don't just follow project requirements; I amplify them. I seamlessly collaborate with both tech and non-tech guilds, bringing a potent work ethic and a proven record of enchanted victories.
      </p>
    </div>
  </UContainer>
</template>
