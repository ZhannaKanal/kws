<template>
    <div>
        <BaseHeader></BaseHeader>
        <slot></slot>
    </div>
</template>
<script>
import BaseHeader from "../components/BaseHeader.vue";
export default {
  components: {
    BaseHeader,
  },
  setup() {
    return {};
  },
};
</script>