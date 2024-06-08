<template>
    <div>
      <SecondHeader></SecondHeader>
        <slot>
        </slot>
      <BaseFooter></BaseFooter>
    </div>
</template>
<script>
import SecondHeader from "../components/SecondHeader.vue";
import BaseFooter from "../components/BaseFooter.vue";

export default {
  components: {
    SecondHeader,
    BaseFooter,
  },
  setup() {
    return {};
  },
};
</script>