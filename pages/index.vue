<template>
  <div class="flex flex-col min-h-[100vh]">
    <header class="relative text-[white] uppercase">
      <img
        class="absolute z-1 w-full min-h-[100vh] h-full"
        src="~/assets/images/main.png"
        draggable="false"
        alt=""
      />
      <div class="relative z-15">
        <div class="hover:bg-[#222222]">
          <div class="flex justify-center py-12">
            <img src="~/assets/images/KWS.png" draggable="false" alt="" />
          </div>
          <div
            class="max-w-[1300px] w-full mx-auto px-[210px] gap-[80px] flex justify-between py-2 text-[16px] text-[white] font-light font-[]"
          >
            <nuxt-link to="/about"
              ><p class="hover:text-[#7F7F7F]">О нас</p></nuxt-link
            >
            <nuxt-link to="/service"
              ><p class="hover:text-[#7F7F7F]">Услуги</p></nuxt-link
            >
            <nuxt-link to="/brand"
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
        <p
          class="w-full my-[230px] flex justify-center text-center text-[24px] font-light font-[]"
        >
          - Компания Kazakhstan Wines & Spirits - <br />
          ведущий импортер премиальных вин и спиртных <br />
          напитков на территории Казахстана.
        </p>
      </div>
    </header>
    <main class="flex-[1_1_auto]">
      <div class="grid grid-cols-2 gap-[50px]">
        <div class="relative pt-[100px] flex-[1_1_auto] flex justify-end">
          <div
            class="absolute w-full bg-[#CCAD7B] max-h-[529px] h-full right-0 top-0 z-[-1]"
          ></div>
          <div class="max-w-[600px] w-full">
            <img src="~/assets/images/first_second.png" alt="" />
            <p class="text-[30px] py-5 font-light font-[]">БРЕНДЫ</p>
            <p class="text-[#A1A1A1] py-4">
              №1 по импорту тихих и игристых вин
            </p>
            <p>
              В коллекции KWS более 150 производителей, являющихся лидерами в
              своей сфере. Мы передаем наследие каждого бренда, уважая и
              поддерживая высокое качество их продукции.
            </p>
            <button
              class="px-[110px] my-[50px] py-[15px] border-[1px] border-solid border-[#C1C1C1] rounded-[2px] font-light hover:bg-[#010101] hover:border-[#010101] hover:text-[white] duration-200"
              type="button"
            >
              Ознакомиться
            </button>
            <div class="flex gap-4 max-h-[64px] h-full bg-[white]">
              <div class="w-[16px] bg-[#CCAD7B]"></div>
              <div class="w-[32px] bg-[#CCAD7B]"></div>
              <div class="w-[40px] bg-[#CCAD7B]"></div>
              <div class="w-[56px] bg-[#CCAD7B]"></div>
              <div class="flex-[1_1_auto] bg-[#CCAD7B]"></div>
            </div>
          </div>
        </div>
        <div class="relative flex-[1_1_auto]">
          <div
            class="absolute flex flex-col max-h-max w-[calc(100%-100px)] left-[100px] top-[85px] gap-4"
          >
            <div class="h-[16px] bg-[#CCAD7B]"></div>
            <div class="h-[32px] bg-[#CCAD7B]"></div>
            <div class="h-[60px] bg-[#C49955]"></div>
            <div class="h-[534px] bg-[#CCAD7B]"></div>
          </div>
          <div class="relative z-2 max-w-[600px] w-full pt-[297px]">
            <img
              class="h-[400px]"
              src="~/assets/images/second_second.png"
              alt=""
            />
            <div class="flex flex-col items-end">
              <p class="text-[30px] font-light py-5">О КОМПАНИИ</p>
              <p class="text-[#A1A1A1] py-5">18 лет на рынке Казахстана</p>
              <p class="max-w-[490px] text-right">
                Компания KWS предлагает своим партнерам, частным клиентам и
                любителям вина богатый ассортимент спиртных напитков от
                престижных мировых брендов, а также лучшие вина от исторически
                значимых виноделен мира.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-[50px]">
        <div class="relative pt-9 flex-[1_1_auto] flex justify-end">
          <div class="max-w-[600px] w-full">
            <p class="text-[30px] font-light font-[]">Философия компании</p>
            <p class="text-[#A1A1A1] py-7">Тандем вина и модного бренда</p>
            <p>
              Наша работа связана с уникальными продуктами. Вина и спиртные
              напитки ассоциируются с праздником, эмоциями, весельем и радостью.
              <br />Поэтому мы стремимся к совершенству, гарантируя высокое
              качество и эксклюзивность нашей продукции.
            </p>
            <button
              class="my-[65px] px-[110px] py-[15px] border-[1px] border-solid border-[#C1C1C1] rounded-[2px] font-light hover:bg-[#010101] hover:border-[#010101] hover:text-[white] duration-200"
              type="button"
            >
              Ознакомиться
            </button>
            <img class="" src="~/assets/images/third_second.png" alt="" />
          </div>
          <div
            class="absolute w-full bg-[#CCAD7B] max-h-[800px] h-full right-0 bottom-[97px] z-[-1]"
          ></div>
        </div>
        <div class="relative flex-[1_1_auto]">
          <div class="max-w-[600px] w-full">
            <button
              class="mt-9 mb-[50px] px-[110px] py-[15px] border-[1px] border-solid border-[#C1C1C1] rounded-[2px] font-light hover:bg-[#010101] hover:border-[#010101] hover:text-[white] duration-200"
              type="button"
            >
              Ознакомиться
            </button>
          </div>
          <div
            class="absolute bg-[#CCAD7B] w-full max-h-[800px] h-full left-0 z-[-1]"
          ></div>
          <div class="relative z-2 max-w-[600px] w-full">
            <img class="" src="~/assets/images/fourth_second.png" alt="" />
            <div class="flex flex-col items-end">
              <p class="text-[30px] py-5 font-light font-[]">КУЛЬТУРА ВИНА</p>
              <p class="text-[#A1A1A1] py-4">Тандем вина и модного бренда</p>
              <p>
                Наша миссия - развитие винной культуры Казахстана <br />
                и создание новых трендов.
              </p>
              <button
                class="mt-[50px] px-[110px] py-[15px] border-[1px] border-solid border-[#C1C1C1] rounded-[2px] font-light hover:bg-[#010101] hover:border-[#010101] hover:text-[white] duration-200"
                type="button"
              >
                Ознакомиться
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="max-w-[1300px] w-full mx-auto my-8 px-6 flex gap-[100px] items-center"
      >
        <p class="text-[30px] font-light">СОБЫТИЯ</p>
        <div class="bg-[white] min-h-[64px] h-full flex gap-7">
          <div class="w-[27px] bg-[#CCAD7B]"></div>
          <div class="w-[54px] bg-[#CCAD7B]"></div>
          <div class="w-[68px] bg-[#CCAD7B]"></div>
          <div class="w-[95px] bg-[#CCAD7B]"></div>
          <div class="flex-[1_1_auto] bg-[#CCAD7B]"></div>
        </div>
      </div>
      <div class="max-w-[1300px] w-full mx-auto px-6 flex gap-8">
        <div>
          <img src="~/assets/images/image_13.png" alt="" />
          <div class="flex gap-4 items-center py-5">
            <img src="~/assets/images/threediffline.png" alt="" />
            <p>Dom Perignon x Lady Gaga</p>
          </div>
        </div>
        <div class="flex-[1_1_auto] flex justify-between">
          <div class="max-w-[274px] w-full">
            <img src="~/assets/images/image_14.png" alt="" />
            <div class="flex gap-4 items-center py-5">
              <img src="~/assets/images/oneline.png" alt="" />
              <p>Легендарные аксессуары Riedel теперь в Казахстане!</p>
            </div>
          </div>
          <div class="max-w-[274px] mt-[80px] w-full">
            <img src="~/assets/images/image_15.png" alt="" />
            <div class="flex gap-4 items-center py-5">
              <img src="~/assets/images/oneline.png" alt="" />
              <p>Устали от Кавы? Новая категория игристых вин Испании</p>
            </div>
          </div>
        </div>
      </div>
      <div class="relative max-w-[1300px] w-full mx-auto my-6 px-6 flex gap-8">
        <div>
          <img src="~/assets/images/image_17.png" alt="" />
          <div class="flex gap-4 items-center py-5">
            <img src="~/assets/images/threediffline.png" alt="" />
            <p>AIN Asia Awards</p>
          </div>
        </div>
        <div class="absolute right-6 bottom-[0px]">
          <img src="~/assets/images/image_16.png" alt="" />
          <div class="flex gap-4 items-center py-5">
            <img src="~/assets/images/threediffline.png" alt="" />
            <p>Новинка Винокурни Ardbeg</p>
          </div>
        </div>
      </div>
      <div
        class="max-w-[1300px] w-full max-h-[80px] h-full my-[80px] mx-auto px-6 flex justify-between bg-[#C49955] text-[16px] text-[#FFFFFF]"
      >
        <img src="~/assets/images/threeline.png" draggable="false" alt="" />
        <div class="flex justify-between items-center gap-12">
          <img src="~/assets/images/brut.png" draggable="false" alt="" />
          <p class="items-center">
            BRUT - это проект крупнейшей дистрибьюторской<br />
            компании Kazakhstan Wines & Spirits.
          </p>
          <button
            class="px-[120px] py-[15px] border-[1px] border-solid border-[#FFFFFF] rounded-[2px] font-light hover:bg-[white] hover:text-[#C49955] duration-200"
            type="button"
          >
            Перейти
          </button>
        </div>
        <img src="~/assets/images/threeline.png" draggable="false" alt="" />
      </div>
    </main>
    <footer class="bg-[#222222] text-[16px]">
      <div class="flex justify-center py-10">
        <img src="~/assets/images/KWS.png" draggable="false" alt="" />
      </div>
      <div class="max-w-[1300px] w-full mx-auto grid grid-cols-3 items-center">
        <img class="w-[460px]" src="~/assets/images/line_footer.png" alt="" />
        <div class="flex gap-6 justify-center">
          <p class="text-[white]">СЛЕДИТЕ ЗА НАМИ</p>
          <a href=""
            ><img src="~/assets/images/facebook.png" draggable="false" alt=""
          /></a>
          <a href="">
            <img src="~/assets/images/insta.png" draggable="false" alt=""
          /></a>
        </div>
        <img class="w-[460px]" src="~/assets/images/line_footer.png" alt="" />
      </div>
      <div class="max-w-[1300px] w-full mx-auto py-6 flex justify-between">
        <p class="text-[#585858]">Все права защищены 2021</p>
        <p class="text-[#585858]">Разработано Digital Agency Nidge</p>
      </div>
    </footer>
  </div>
</template>
