<template>
    <div>
      <SecondHeader></SecondHeader>
        <slot>
        </slot>
    </div>
</template>
<script>
import SecondHeader from "../components/SecondHeader.vue";
export default {
  components: {
    SecondHeader,
  },
  setup() {
    return {};
  },
};
</script>