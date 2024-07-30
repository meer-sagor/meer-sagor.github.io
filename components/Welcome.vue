<script lang="ts" setup>

const sectionRef = ref<HTMLDivElement>()
const sectionTarget = ref<HTMLHeadingElement>()
const sectionScrollDown = ref<HTMLHeadingElement>()

const initAnimation = ()=>{
    if(sectionTarget.value && sectionScrollDown.value){
        const tl = useGsap.timeline()
        tl.from(sectionTarget.value, {
            opacity: 0,
            y: 200,
            duration: 2,
            delay: 1,
        })
        tl.from(sectionScrollDown.value, {
            opacity: 0,
            x: 200,
            duration: 1,
        })
    }
}
onMounted(()=>{
    initAnimation()
})

</script>

<template>
    <section ref="sectionRef" class="flex justify-center items-center h-full w-full relative">
        <h1 ref="sectionTarget" class="font-secondary text-[20vw] text-center">Welcome</h1>
        <div ref="sectionScrollDown" class="absolute bottom-0 scroll-down w-[50px] h-[90px] border-[3px] border-purple-50 dark:border-gray-500 rounded-3xl before:bg-white mb-[20px]"></div>
    </section>
</template>

<style scoped>
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
</style>