<script lang="ts" setup>
const socialLinks = ref([

    {
        name: "Linkedin",
        to: 'https://www.linkedin.com/in/meer-sagor',
        icon: 'ri:linkedin-fill'
    },
    {
        name: 'Email',
        to: 'mailto:meersagor.contact@gmail.com',
        icon: 'lucide:mail'
    },
    {
        name: "Github",
        to: 'https://www.github.com/meer-sagor',
        icon: 'proicons:github'
    },
    {
        name: "Facebook",
        to: 'https://www.facebook.com/meer.msagor',
        icon: 'basil:facebook-solid'
    },
])
</script>

<template>
    <div class="flex justify-center gap-[12px] items-center ">
        <NuxtLink v-for="social in socialLinks" :key="social.to" :aria-label="social.name"
            class="bg-primary-500 rounded-full size-[40px] flex justify-center items-center" target="_blank"
            :to="social.to">
            <UIcon class="size-[30px]" :name="social.icon" />
        </NuxtLink>
    </div>
</template>

<style scoped></style>