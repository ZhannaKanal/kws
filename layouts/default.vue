<template>
    <div>
        <BaseHeader></BaseHeader>
        <slot></slot>
        <BaseFooter></BaseFooter>
    </div>
</template>
<script>
import BaseHeader from "../components/BaseHeader.vue";
import BaseFooter from "../components/BaseFooter.vue";
export default {
  components: {
    BaseHeader,
    BaseFooter,
  },
  setup() {
    return {};
  },
};
</script>