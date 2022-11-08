<template>
  <button
    :title="title ?? undefined"
  >

  </button>
</template>

<script setup lang="ts">
type Props = {
  title: string;
}

const props = withDefaults(defineProps<Props>(), {});
</script>

<script lang="ts">
export default {
  name: 'VbButton'
}
</script>