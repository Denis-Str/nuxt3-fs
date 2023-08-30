<template>
  <NuxtLayout>
    <task-filters />
  </NuxtLayout>
</template>

<script setup>
import {TaskFilters} from "~/features/task-filters";
</script>

<style scoped lang="scss">
.color {
  color: $primary;
}
</style>