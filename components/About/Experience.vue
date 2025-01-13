<script setup lang="ts">
const experiences = ref([
  {
    designation: 'Software Engineer L-1',
    startDate: 2024,
    endDate: null,
    company: 'Jouleslabs'
  },
  {
    designation: 'Front-End Developer',
    startDate: 2022,
    endDate: 2024,
    company: 'Jouleslabs'
  },
  {
    designation: 'Web Developer',
    startDate: 2020,
    endDate: 2021,
    company: 'Fiverr'
  }
])
</script>

<template>
  <div class="flex flex-col gap-3">
    <h2 class="mb-2 mt-[40px] text-white-shadow font-newsreader italic text-2xl">Working <span class="text-primary-500">Experiences</span>
    </h2>
    <div class="flex flex-col gap-4">
      <div v-for="exp in experiences" :key="exp.designation">
        <h3 class="font-semibold">{{exp.designation}} <span class="mx-1"> at </span> <span>{{exp.company}}</span> </h3>
        <div class="flex gap-1">
          <p>{{exp.startDate}} - <span v-if="!exp.endDate">Today</span> <span v-if="exp.endDate">{{exp.endDate}}</span> </p>
          <!--            <span class="mx-1"> at </span>-->
          <!--            <p>{{exp.company}}</p>-->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>