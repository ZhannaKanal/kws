<template>
  <div>
    <div class="max-w-[1280px] w-full mx-auto my-[80px] flex justify-between gap-[200px]">
        <div class="max-w-[636px] w-full">
            <p class="font-extralight text-[30px]">Allegrini</p>
            <p class="my-8">Старинное хозяйство Allegrini ведет свою официальную винную историю с 1854 года. Настоящий подъем поместье пережило в 1960-х годах, когда его хозяин,
                Джованни Аллегрини, стал активно развивать свое винодельческое производство, постоянно внедряя нечто новое. </p>
        </div>
        <div class=" mx-auto">
            <img src="~assets/images/image_85.png" alt="">
        </div>
    </div>
    <div class="relative max-w-[1280px] w-full mx-auto">
        <div class="relative max-w-[200px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[810px] min-h-[480px] bg-[#CCAD7B] z-[-1] left-[100px] md:left-[300px]"></div>
        <img class="absolute z-[0] top-5" src="~assets/images/image_86.png" alt="">
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  setup() {
    definePageMeta({
      layout: "contacts",
      middleware: "",
    });

    return {};
  },
};
</script>

<style lang="scss" scoped></style>
