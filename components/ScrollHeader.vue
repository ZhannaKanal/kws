<template>
  <div class="fixed top-0 left-0 bg-[black]">
    <div class="max-w-[1280px] w-full mx-auto bg-[white] h-[200px] h-full">
      <img src="~assets/images/image_100.png" alt="" />
      <div
        class="max-w-[1300px] w-full mx-auto px-[210px] hidden block lg:flex gap-[80px] justify-between py-2 text-[16px] text-[white] font-light font-[]"
      >
        <nuxt-link to="/member"
          ><p class="hover:text-[#7F7F7F]">О нас</p></nuxt-link
        >
        <nuxt-link to="/corporative"
          ><p class="hover:text-[#7F7F7F]">Услуги</p></nuxt-link
        >
        <nuxt-link to="/brands"
          ><p class="hover:text-[#7F7F7F]">Бренды</p></nuxt-link
        >
        <nuxt-link to="/event"
          ><p class="hover:text-[#7F7F7F]">События</p></nuxt-link
        >
        <nuxt-link to="/contacts"
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
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
