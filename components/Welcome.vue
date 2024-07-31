<script lang="ts" setup>
const initAnimation = () => {
  const { innerHeight } = window;
  const tl = useGsap.timeline();
  // tl.to(`#sectionRef svg`, {
  //   scale: 40,
  //   duration: 3,
  //   delay: 2,
  //   scrollTrigger: {
  //     trigger: '#sectionRef',
  //     pin: true,
  //     start: 'top top',
  //     end: `+=${innerHeight * 1.3}`,
  //     scrub: true,
  //   },
  // });
  tl.to(`#sectionRef h1`, {
    scale: 20,
    duration: 3,
    delay: 2,
    scrollTrigger: {
      trigger: '#sectionRef',
      pin: true,
      start: 'top top',
      end: `+=${innerHeight * 1.3}`,
      scrub: true,
    },
  });
  tl.from('#sectionTarget', {
    opacity: 0,
    y: 200,
    duration: 2,
    delay: 1,
  });
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
  <section
    id="sectionRef"
    class="flex justify-center items-center h-screen relative overflow-hidden"
  >
    <h1 id="sectionTarget" class="font-secondary text-[20vw] text-center">
      Welcome
    </h1>
    <!-- <svg id="sectionTarget">
        <text x="50%" y="50%" dy=".35em" text-anchor="middle" class="font-secondary text-[20vw]">
          welcome
        </text>
      </svg> -->
    <div
      id="sectionScrollDown"
      class="absolute bottom-0 scroll-down w-[50px] h-[90px] border-[3px] border-gray-500 rounded-3xl before:bg-gray-700 mb-[20px]"
    ></div>
  </section>
</template>

<style scoped>

svg {
	font-family: "Russo One", sans-serif;
	width: 100%; height: 100%;
}
svg text {
	animation: stroke 5s alternate;
	stroke-width: 2;
	stroke: #365FA0;
}


.scroll-down {
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

@keyframes stroke {
	0%   {
		fill: rgba(72,138,204,0); stroke: rgba(54,95,160,1);
		stroke-dashoffset: 25%; stroke-dasharray: 0 50%; stroke-width: 2;
	}
	70%  {fill: rgba(72,138,204,0); stroke: rgba(54,95,160,1); }
	80%  {fill: rgba(72,138,204,0); stroke: rgba(54,95,160,1); stroke-width: 3; }
	100% {
		fill: rgba(72,138,204,1); stroke: rgba(54,95,160,0);
		stroke-dashoffset: -25%; stroke-dasharray: 50% 0; stroke-width: 0;
	}
}
</style>