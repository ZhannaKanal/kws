<template>
  <footer class="relative top-[900px] lg:top-0 bg-[#222222] text-[16px]">
    <div class="flex justify-center py-10">
      <img src="~/assets/images/KWS.png" draggable="false" alt="" />
    </div>
    <div
      class="max-w-[1300px] w-full mx-auto grid grid-rows-3 lg:grid-cols-3 items-center"
    >
      <img
        class="w-[460px] w-full order-[2] lg:order-[1] hidden lg:block"
        src="~/assets/images/line_footer.png"
        draggable="false"
        alt=""
      />
      <div class="flex gap-6 lg:my-0 justify-center order-[1] lg:order-[2]">
        <p class="text-[white]">СЛЕДИТЕ ЗА НАМИ</p>
        <a href=""
          ><img src="~/assets/images/facebook.png" draggable="false" alt=""
        /></a>
        <a href="">
          <img src="~/assets/images/insta.png" draggable="false" alt=""
        /></a>
      </div>
      <img
        class="w-[460px] w-full order-[3]"
        src="~/assets/images/line_footer.png"
        draggable="false"
        alt=""
      />
    </div>
    <div
      class="max-w-[1300px] w-full mx-auto py-6 block text-center lg:flex justify-between"
    >
      <p class="text-[#585858]">Все права защищены 2021</p>
      <p class="text-[#585858]">Разработано Digital Agency Nidge</p>
    </div>
  </footer>
</template>


<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
