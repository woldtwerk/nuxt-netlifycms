<script setup lang="ts">
interface Props {
  title: string
}

defineProps<Props>()

</script>

<template>
  <div>
    {{ title }}
    <slot />
  </div>
</template>