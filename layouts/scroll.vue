<template>
    <div>
        <ScrollHeader></ScrollHeader>
        <slot></slot>
        <BaseFooter></BaseFooter>
    </div>
</template>
<script>
import ScrollHeader from "../components/ScrollHeader";
import BaseFooter from "../components/BaseFooter.vue";
export default {
  components: {
    ScrollHeader,
    BaseFooter,
  },
  setup() {
    return {};
  },
};
</script>