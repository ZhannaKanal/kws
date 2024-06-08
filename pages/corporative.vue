<template>
  <div>
    <div class="bg-container uppercase text-center">
      <p class="text-[48px] font-light">Корпоративным клиентам</p>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    definePageMeta({
      layout: "contacts",
    })

    return {};
  },
};
</script>

<style lang="" scoped>
.bg-container {
  background-image: url("~assets/images/image_60.png");
  background-size: cover;
  background-position: center;
  height: 100vh; /* Adjust the height as needed */
}
</style>
