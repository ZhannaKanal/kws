<template>
  <div>
    <div
      class="max-w-[1280px] w-full mx-auto my-[80px] flex-col-reverse lg:flex-row flex justify-between gap-[200px]"
    >
      <div class="max-w-[636px] w-full">
        <p class="font-extralight text-[30px] text-center lg:text-start">
          Allegrini
        </p>
        <p class="my-8">
          Старинное хозяйство Allegrini ведет свою официальную винную историю с
          1854 года. Настоящий подъем поместье пережило в 1960-х годах, когда
          его хозяин, Джованни Аллегрини, стал активно развивать свое
          винодельческое производство, постоянно внедряя нечто новое.
        </p>
      </div>
      <div class="mx-auto">
        <img src="~assets/images/image_85.png" alt="" />
      </div>
    </div>
    <div class="relative flex-[1_1_auto] max-w-[1280px] w-full mx-auto">
      <div
        class="absolute max-w-[300px] sm:max-w-[500px] md:max-w-[800px] w-full bg-[#CCAD7B] max-h-[480px] h-full right-6 top-0 z-[-1]"
      ></div>
      <div class="w-full py-6">
        <img src="~/assets/images/image_86.png" draggable="false" alt="" />
      </div>
    </div>
    <div class="bg-[#C49955] w-full">
      <p class="text-center text-white py-6">
        Управляющие винодельни: Франко Аллегрини и Марилиса Аллегрини <br />
        Площадь территории составляет около 240 км² <br />
        Главный офис – Венето , Италия
      </p>
    </div>
    <div class="block lg:flex justify-between max-w-[1280px] w-full mx-auto my-12">
      <div class="relative flex-[1_1_auto] max-w-[700px] w-full">
        <div class="relative">
          <div
            class="absolute max-w-[300px] sm:max-w-[500px] md:max-w-[800px] w-full bg-[#CCAD7B] max-h-[480px] h-full right-0 bottom-[-30px] z-[-1]"
          ></div>
          <img src="~/assets/images/image_87.png" draggable="false" alt="" />
        </div>
        <div
          class="absolute bottom-0 flex flex-row-reverse lg:flex-row gap-8 max-w-[560px] w-full h-[64px]"
        >
          <div class="flex-[1_1_auto] bg-[#CCAD7B]"></div>
          <div class="w-[78px] bg-[#CCAD7B]"></div>
          <div class="w-[63px] bg-[#CCAD7B]"></div>
          <div class="w-[32px] bg-[#CCAD7B]"></div>
        </div>
      </div>
      <div class="max-w-[580px] w-full mx-auto">
        <div class="px-4">
          <p class="text-[30px] font-extralight uppercase">О компании</p>
          <p class="py-4">
            Им принадлежит 90 га собственных виноградников в коммунах Фумане,
            Сант-Амброджо, Сан-Пьетро и Марано.
          </p>
          <p>
            Их главная отличительная особенность – это известняковые почвы,
            повышающие в винограде концентрацию сахара и сохраняющие при этом
            необходимую для создания вина кислотность.
          </p>
          <p class="py-4">
            В основе успеха - серьезные исследования в области винификации
            местных сортов винограда, а также ноу-хау и возрожденные методы,
            такие как новая форма «рипассо». Все это, в конечном итоге,
            формирует чистоту и стильное богатство букета, за которые ценят
            продукцию Аллегрини как в Италии, так и за рубежом. Сегодня в
            хозяйстве производят четыре основные марки красного вина: Recioto,
            Valpolicella, Valpolicella Superiore и Amarone. В годы хорошего
            урожая на свет выпускается около одного миллиона бутылок. Главным
            сортом считается корвина веронезе.
          </p>
        </div>
        <div class="flex flex-row-reverse flex-[1_1_auto] gap-4 min-h-[64px]">
          <div class="w-[18px] bg-[#CCAD7B]"></div>
          <div class="w-[36px] bg-[#CCAD7B]"></div>
          <div class="w-[45px] bg-[#CCAD7B]"></div>
          <div class="w-[63px] bg-[#CCAD7B]"></div>
          <div class="flex-[1_1_auto] bg-[#CCAD7B]"></div>
        </div>
        <div class="pt-4">
            <img src="~assets/images/image_88.png" alt="">
        </div>
      </div>
    </div>
    <div class="max-w-[1280px] w-full mx-auto">
        <img src="~assets/images/image_89.png" alt="">
    </div>
    <div
        class="max-w-[1280px] w-full mx-auto my-8 flex gap-[100px] items-center"
      >
        <p class="text-[30px] font-light ">ТОВАРЫ</p>
        <div class="flex-[1_1_auto] bg-[white] min-h-[64px] h-full flex gap-7 order-[1] lg:order-[2]">
          <div class="w-[27px] bg-[#CCAD7B]"></div>
          <div class="w-[54px] bg-[#CCAD7B]"></div>
          <div class="w-[68px] bg-[#CCAD7B]"></div>
          <div class="w-[95px] bg-[#CCAD7B]"></div>
          <div class="flex-[1_1_auto] bg-[#CCAD7B]"></div>
        </div>
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
