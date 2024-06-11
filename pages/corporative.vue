<template>
  <div>
    <div
      class="bg-[url('~/assets/images/image_60.png')] h-[50vh] uppercase justify-center flex items-center"
    >
      <p class="sm:text-[24px] md:text-[36px] lg:text-[48px] font-light">
        Корпоративным клиентам
      </p>
    </div>
  </div>
  <div class="bg-[#222222] py-3">
    <div
      class="max-w-[1280px] w-full mx-auto px-12 md:px-6 lg:px-0 block lg:flex justify-start gap-[100px] uppercase bg-[#222222]"
    >
      <p class="font-light text-[white]">HoReCa</p>
      <p class="font-light text-[white]">Retail</p>
      <p class="font-bold text-[#CCAD7B]">Корпоративным клиентам</p>
    </div>
  </div>
  <div class="my-[80px] relative">
    <div
      class="absolute max-w-[500px] w-full bg-[#CCAD7B] max-h-[460px] h-full left-0 top-0 z-[-1]"
    ></div>
    <div class="max-w-[1280px] w-full mx-auto block lg:flex gap-[80px] py-12">
      <img src="~/assets/images/image_61.png" alt="" />
      <div class="flex-[1_1_auto]">
        <p class="text-[16px] font-normal text-[#A1A1A1]">
          Найти вино, которое человек полюбит всей душой — это вызов, и мы его
          принимаем каждый день.
        </p>
        <p class="text-[16px] text-[#000000] py-10">
          Ведущие компании страны выбирают KWS, позиционируя нас как надежного
          поставщика качественных вин и спиртных напитков, и эксклюзивных
          подарочных наборов. <br />Наши сомелье способны подобрать напиток к
          любому Вашему событию.
        </p>
        <div class="flex flex-[1_1_auto] gap-4 min-h-6">
          <div class="w-[18px] bg-[#CCAD7B]"></div>
          <div class="w-[36px] bg-[#CCAD7B]"></div>
          <div class="w-[45px] bg-[#CCAD7B]"></div>
          <div class="w-[63px] bg-[#CCAD7B]"></div>
          <div class="flex-[1_1_auto] bg-[#CCAD7B]"></div>
        </div>
        <p class="py-[80px] text-[24px] font-light">
          Мы предоставляем корпоративным <br />
          клиентам следующие привилегии:
        </p>
        <p>
          индивидуальный подход к подбору напитков: <br />
          подарочные наборы, брендирование, гравировка
        </p>
        <p class="py-8">
          доступ к лимитированным коллекциям вин и спиртным напиткам, <br />
          а также поиск редких релизов, отличающихся своей исключительностью
        </p>
        <p>проведение дегустаций, мастер-классов и т.д.</p>
        <p class="py-8">
          бережная доставка вин и спиртных напитков, и аксессуаров
        </p>
        <div class="flex flex-[1_1_auto] gap-4 flex-row-reverse min-h-6">
          <div class="w-[18px] bg-[#CCAD7B]"></div>
          <div class="w-[36px] bg-[#CCAD7B]"></div>
          <div class="w-[45px] bg-[#CCAD7B]"></div>
          <div class="w-[63px] bg-[#CCAD7B]"></div>
          <div class="flex-[1_1_auto] bg-[#CCAD7B]"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="relative mb-10">
    <div class="absolute max-w-[500px] lg:max-w-[300px] w-full bg-[#CCAD7B] max-h-[360px] h-full right-0 bottom-0 z-[-1] "></div>
    <div class="max-w-[1280px] w-full mx-auto block lg:flex gap-[80px]">
      <div class="flex-[1_1_auto]">
        <p class="font-light text-[24px]">
          Консультации персонального менеджера
        </p>
        <p class="py-8">
          Высший уровень сервиса. Наши менеджеры знают не только вкусы и
          предпочтения <br />
          своих клиентов в вине, но и даты особенных событий и праздников,
          <br />
          любимые вина и крепкие напитки партнеров по бизнесу.
        </p>
        <div class="block lg:flex gap-12 ">
          <img src="~/assets/images/image_59.png" alt="" />
          <div class="max-w-[200px] lg:w-[1px] h-[1px] lg:min-h-[188px] bg-[#CCAD7B] my-6 lg:my-0"></div>
          <div >
            <p class="text-[24px] font-light">Саят оразов</p>
            <p class="text-[#747474] py-6 text-center lg:text-start">
              “Выбор отличного вина? <br />
              Персональный менеджер сделает все за вас”
            </p>
            <button
              type="submit"
              class="w-full border-[1px] border-solid border-[#C1C1C1] py-4"
            >
              Заказать услугу
            </button>
          </div>
        </div>
        <div class="flex flex-[1_1_auto] lg:max-w-[680px] gap-4 mt-10 min-h-6">
          <div class="w-[18px] bg-[black]"></div>
          <div class="w-[36px] bg-[black]"></div>
          <div class="w-[45px] bg-[black]"></div>
          <div class="w-[63px] bg-[black]"></div>
          <div class="flex-[1_1_auto] bg-[black]"></div>
        </div>
      </div>
      <img class="min-h-[360px] h-full pt-2 pb-4 lg:pb-0 mx-auto" src="~/assets/images/image_62.png" alt="">
    </div>
  </div>
  <div>
    

  </div>
</template>

<script>
export default {
  setup() {
    definePageMeta({
      layout: "contacts",
    });

    return {};
  },
};
</script>
