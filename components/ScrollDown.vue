<script setup lang="ts">
const initAnimation = () => {
  const { innerHeight } = window;
  const tl = useGsap.timeline();
  tl.from('#sectionScrollDown', {
    opacity: 0,
    x: 200,
    duration: 1,
    onComplete: ()=>{
      tl.to('#sectionScrollDown', {
        y: -600,
        scale: 10,
        opacity: 0,
        duration: 5,
        scrollTrigger: {
          trigger: '#sectionScrollDown',
          pin: true,
          start: 'top 85%',
          end: `+=${innerHeight * 1.3}`,
          scrub: true,
        },
      });
    }
  });
};

onMounted(() => {
  initAnimation();
});
</script>

<template>
    <div  id="sectionScrollDown"
        class="absolute scroll-down w-[50px] h-[90px] border-[3px] border-gray-500 rounded-3xl before:bg-gray-700"
    ></div>
</template>

<style scoped>
.scroll-down {
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  &::before {
    content: '';
    width: 12px;
    height: 12px;
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    opacity: 1;
    animation: wheel 2s infinite;
    -webkit-animation: wheel 2s infinite;
  }
}

@keyframes wheel {
  to {
    opacity: 0;
    top: 60px;
  }
}

@-webkit-keyframes wheel {
  to {
    opacity: 0;
    top: 60px;
  }
}
</style>