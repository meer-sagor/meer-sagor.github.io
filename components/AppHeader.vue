<script lang="ts" setup>
const navList = ref([{
  name: 'Home',
  to: '/',
  icon: 'lucide:home',
}, {
  name: 'Works',
  to: '/works',
  icon: 'lucide:briefcase',
}, {
  name: 'Writing',
  to: '/writing',
  icon: 'lucide:library',
}, {
  name: 'About',
  to: '/about',
  icon: 'lucide:user',
}, {
  name: 'Contact',
  to: '/contact',
  icon: 'lucide:mail',
}])
</script>

<template>
  <div class="grid place-items-center">
    <header
        class="mt-[8px] rounded-full border items-center justify-center fixed bottom-0 z-50  sm:bottom-auto sm:top-0">
      <nav
          class="z-10 flex h-[50px] justify-around gap-2 p-1 transition-all duration-300 ease-in-out sm:h-[45px] sm:hover:gap-4">
        <NuxtLink v-for="link in navList"
                  :class="[ $route.path === link.to ? 'border border-white/5 bg-zinc-900/10 text-white/75 shadow-2xl shadow-white/50 backdrop-blur-3xl text-shadow-sm' : 'text-gray-500 ']"
                  :to="link.to"
                  :aria-label="link.name"
                  class="text-muted flex items-center rounded-full border border-transparent px-4 py-1 transition-all duration-300 ease-in-out hover:border-white/5 hover:bg-zinc-900/50 hover:backdrop-blur-3xl sm:px-6">
          <UIcon :name="link.icon" class="size-7"/>
        </NuxtLink>
      </nav>
    </header>

  </div>
</template>

<style scoped>

</style>