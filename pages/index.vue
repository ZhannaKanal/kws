<template>
  <div class="flex flex-col">
    <div class="relative text-[white] uppercase">
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
            <nuxt-link to="/about"><p class="hover:text-[#7F7F7F]">О нас</p></nuxt-link>
            <nuxt-link to="/service"><p class="hover:text-[#7F7F7F]">Услуги</p></nuxt-link>
            <nuxt-link to="/brand"><p class="hover:text-[#7F7F7F]">Бренды</p></nuxt-link>
            <nuxt-link to="/event"><p class="hover:text-[#7F7F7F]">События</p></nuxt-link>
            <nuxt-link to="/contact"><p class="hover:text-[#7F7F7F]">Контакты</p></nuxt-link>
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
    </div>
    <div class="">
      <div class="text-[#010101]">
        <div class="flex">
          <div class="">
            <div class="relative">
              <img
                class="absolute z-2"
                src="~/assets/images/first_first.png"
                draggable="false"
                alt=""
              />
              <div class="absolute z-5">
                <img
                  src="~/assets/images/first_second.png"
                  draggable="false"
                  alt=""
                />
              </div>
            </div>
            <div class="relative top-[300px]">
              <p class="text-[30px] font-light font-[]">БРЕНДЫ</p>
              <p class="text-[#A1A1A1]">№1 по импорту тихих и игристых вин</p>
              <p>
                В коллекции KWS более 150 производителей, являющихся лидерами в
                своей сфере. Мы передаем наследие каждого бренда, уважая и
                поддерживая высокое качество их продукции.
              </p>
              <button
                class="px-[110px] py-[15px] border-[1px] border-solid border-[#C1C1C1] rounded-[2px] font-light hover:bg-[#010101] hover:border-[#010101] hover:text-[white] duration-200"
                type="button"
              >
                Ознакомиться
              </button>
            </div>
            <div class="relative bottom-0">
              <img
                src="~/assets/images/third_line.png"
                draggable="false"
                alt=""
              />
            </div>
          </div>
          <div>
            <div class="relative">
              <div class="relative z-2">
                <img
                  class="right-0"
                  src="~assets/images/second_1_1.png"
                  draggable="false"
                  alt=""
                />
                <img
                  src="~assets/images/second_1_2.png"
                  draggable="false"
                  alt=""
                />
                <img
                  src="~assets/images/second_1_3.png"
                  draggable="false"
                  alt=""
                />
                <img
                  class="right-0"
                  src="~assets/images/second_1_4.png"
                  draggable="false"
                  alt=""
                />
                <p
                  class="absolute bottom-0 right-0 text-[30px] font-light font-[]"
                >
                  О КОМПАНИИ
                </p>
              </div>
              <div class="absolute bottom-10 z-5">
                <img
                  src="~/assets/images/second_second.png"
                  draggable="false"
                  alt=""
                />
              </div>
            </div>
            <div class="text-right">
              <p class="text-[#A1A1A1]">18 лет на рынке Казахстана</p>
              <p>
                Компания KWS предлагает своим партнерам, частным клиентам и
                любителям вина богатый ассортимент спиртных напитков от
                престижных мировых брендов, а также лучшие вина от исторически
                значимых виноделен мира.
              </p>
            </div>
          </div>
        </div>
        <!-- <div class="flex">
          <div class="">
            <div class="relative">
              <p class="text-[30px] font-light font-[]">Философия компании</p>
              <p class="text-[#A1A1A1]">Тандем вина и модного бренда</p>
              <p>
                Наша работа связана с уникальными продуктами. Вина и спиртные
                напитки ассоциируются с праздником, эмоциями, весельем и
                радостью.
                <br />Поэтому мы стремимся к совершенству, гарантируя высокое
                качество и эксклюзивность нашей продукции.
              </p>
              <button
                class="px-[110px] py-[15px] border-[1px] border-solid border-[#C1C1C1] rounded-[2px] font-light hover:bg-[#010101] hover:border-[#010101] hover:text-[white] duration-200"
                type="button"
              >
                Ознакомиться
              </button>
            </div>
            <div class="relative">
              <img
                class="absolute z-2"
                src="~/assets/images/third_first.png"
                draggable="false"
                alt=""
              />

              <img
                class="absolute z-5 ml-12"
                src="~/assets/images/third_second.png"
                draggable="false"
                alt=""
              />
            </div>
          </div>
          <div class="flex flex-col">
            <div class="relative">
              <button
                class="px-[110px] py-[15px] border-[1px] border-solid border-[#C1C1C1] rounded-[2px] font-light hover:bg-[#010101] hover:border-[#010101] hover:text-[white] duration-200"
                type="button"
              >
                Ознакомиться
              </button>
            </div>
            <div class="relative">
              <img
                class="absolute z-2"
                src="~/assets/images/fourth_first.png"
                draggable="false"
                alt=""
              />
              <div class="absolute z-5 mr-12">
                <img
                  src="~/assets/images/fourth_second.png"
                  draggable="false"
                  alt=""
                />
              </div>
            </div>
            <div class="relative">
              <p class="text-[30px] font-light font-[]">КУЛЬТУРА ВИНА</p>
              <p class="text-[#A1A1A1]">Тандем вина и модного бренда</p>
              <p>
                Наша миссия - развитие винной культуры Казахстана и создание
                новых трендов.
              </p>
              <button
                class="px-[110px] py-[15px] border-[1px] border-solid border-[#C1C1C1] rounded-[2px] font-light hover:bg-[#010101] hover:border-[#010101] hover:text-[white] duration-200"
                type="button"
              >
                Ознакомиться
              </button>
            </div>
          </div>
        </div> -->
      </div>
      <!-- <div
        class="max-w-[1300px] w-full mx-auto my-10 flex items-center justify-between gap-[100px] font-[]"
      >
        <p class="text-[30px] font-light">СОБЫТИЯ</p>
        <img src="~/assets/images/long_line.png" draggable="false" alt="" />
      </div>
      <div class="flex text-[#010101] text-[16px] font-[]">
        <div>
          <img src="~/assets/images/image_13.png" draggable="false" alt="" />
          <div>
            <img
              src="~/assets/images/threediffline.png"
              draggable="false"
              alt=""
            />
            <p>Dom Perignon x Lady Gaga</p>
          </div>
        </div>
        <div>
          <div>
            <img src="~/assets/images/image_14.png" draggable="false" alt="" />
            <div>
              <img src="~/assets/images/oneline.png" draggable="false" alt="" />
              <p>Легендарные аксессуары Riedel теперь в Казахстане!</p>
            </div>
          </div>
          <div>
            <img src="~/assets/images/image_15.png" draggable="false" alt="" />
            <div>
              <img src="~/assets/images/oneline.png" draggable="false" alt="" />
              <p>Устали от Кавы? Новая категория игристых вин Испании</p>
            </div>
          </div>
        </div>
        <div>
          <img src="~/assets/images/image_17.png" draggable="false" alt="" />
          <div>
            <img
              src="~/assets/images/threediffline.png"
              draggable="false"
              alt=""
            />
            <p>AIN Asia Awards</p>
          </div>
        </div>
        <div>
          <img src="~/assets/images/image_16.png" draggable="false" alt="" />
          <div>
            <img
              src="~/assets/images/threediffline.png"
              draggable="false"
              alt=""
            />
            <p>Новинка Винокурни Ardbeg</p>
          </div>
        </div>
      </div>
      <div class="my-[100px]">
        <div
          class="max-w-[1300px] w-full max-h-[80px] h-full mx-auto px-6 flex justify-between bg-[#C49955] text-[16px] text-[#FFFFFF]"
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
      </div> -->
    </div>
    <div class="bg-[#222222] font-[] text-[FFFFFF] text-[16px]">
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
    </div>
  </div>
</template>
