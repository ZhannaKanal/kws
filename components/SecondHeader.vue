<template>
  <header class="text-[white] uppercase">
    <div class="bg-[#222222]">
      <div class="flex items-center max-w-[1300px] w-full mx-auto py-12">
        <div class="lg:hidden flex justify-start px-6">
          <img class="" src="~/assets/images/image_1.png" alt="" />
        </div>
        <div class="flex-[1_1_auto] flex justify-center">
          <img src="~/assets/images/KWS.png" draggable="false" alt="" />
        </div>
        <div class="opacity-0 justify-end px-6">
          <img class="" src="~/assets/images/image_1.png" alt="" />
        </div>
      </div>
      <div
        class="max-w-[1300px] w-full mx-auto px-[210px] hidden block lg:flex gap-[80px] justify-between py-2 text-[16px] text-[white] font-light font-[]"
      >
        <nuxt-link to="/member"
          ><p class="hover:text-[#7F7F7F]">О нас</p></nuxt-link
        >
        <nuxt-link to="/contacts"
          ><p class="hover:text-[#7F7F7F]">Услуги</p></nuxt-link
        >
        <nuxt-link to="/corporative"
          ><p class="hover:text-[#7F7F7F]">Бренды</p></nuxt-link
        >
        <nuxt-link to="/event"
          ><p class="hover:text-[#7F7F7F]">События</p></nuxt-link
        >
        <nuxt-link to="/contact"
          ><p class="hover:text-[#7F7F7F]">Контакты</p></nuxt-link
        >
        <div class="flex gap-2 items-center hover:text-[#7F7F7F]">
          <p>RU</p>
          <img
            class="w-[12px] h-[6px]"
            src="~/assets/images/chooser.png"
            draggable="false"
            alt=""
          />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
