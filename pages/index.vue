<template>
  <div class="flex flex-col min-h-[100vh]">
    <main class="flex-[1_1_auto]">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-[50px]">
        <div class="relative pt-[100px] flex-[1_1_auto] flex justify-end">
          <div
            class="absolute w-full bg-[#CCAD7B] max-h-[529px] h-full right-0 top-0 z-[-1]"
          ></div>
          <div class="max-w-[600px] w-full">
            <img
              src="~/assets/images/first_second.png"
              draggable="false"
              alt=""
            />
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
            <div class="hidden lg:flex gap-4 max-h-[64px] h-full bg-[white]">
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
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-[50px]">
        <div
          class="relative pt-9 flex-[1_1_auto] flex justify-end order-[2] lg:order-[1]"
        >
          <div class="max-w-[600px] w-full">
            <p class="text-[30px] font-light font-[] order-[2] lg:order-[1]">
              Философия компании
            </p>
            <p class="text-[#A1A1A1] py-7 order-[3] order-[2]">
              Тандем вина и модного бренда
            </p>
            <p class="order-[4] order-[3]">
              Наша работа связана с уникальными продуктами. Вина и спиртные
              напитки ассоциируются с праздником, эмоциями, весельем и радостью.
              <br />Поэтому мы стремимся к совершенству, гарантируя высокое
              качество и эксклюзивность нашей продукции.
            </p>
            <button
              class="order-[5] lg:order-[4] my-[65px] px-[110px] py-[15px] border-[1px] border-solid border-[#C1C1C1] rounded-[2px] font-light hover:bg-[#010101] hover:border-[#010101] hover:text-[white] duration-200"
              type="button"
            >
              Ознакомиться
            </button>
            <img
              class="order-[1] lg:order-[5]"
              src="~/assets/images/third_second.png"
              draggable="false"
              alt=""
            />
          </div>
          <div
            class="absolute w-full bg-[#CCAD7B] max-h-[800px] h-full lg:bottom-[97px] right-0 z-[-1]"
          ></div>
        </div>
        <div class="relative flex-[1_1_auto] order-[1] lg:order-[2]">
          <div class="max-w-[600px] w-full flex justify-end">
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
            <img
              class=""
              src="~/assets/images/fourth_second.png"
              draggable="false"
              alt=""
            />
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
        class=" lg:max-w-[1300px] w-full mx-auto my-8 px-6 block lg:flex gap-2 lg:gap-[100px] items-center"
      >
        <p class="text-[30px] font-light hidden lg:block">СОБЫТИЯ</p>
        <div class="flex-[1_1_auto] bg-[white] min-h-[64px] h-full flex gap-7 order-[1] lg:order-[2]">
          <div class="w-[27px] bg-[#CCAD7B]"></div>
          <div class="w-[54px] bg-[#CCAD7B]"></div>
          <div class="w-[68px] bg-[#CCAD7B]"></div>
          <div class="w-[95px] bg-[#CCAD7B]"></div>
          <div class="flex-[1_1_auto] bg-[#CCAD7B]"></div>
        </div>
        <p class="text-[30px] font-light block lg:hidden">СОБЫТИЯ</p>
      </div>
      <div
        class="max-w-[1300px] w-full my-6 mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        <div>
          <img src="~/assets/images/image_13.png" draggable="false" alt="" />
          <div class="flex gap-4 items-center py-5">
            <img
              src="~/assets/images/threediffline.png"
              draggable="false"
              alt=""
            />
            <p>Dom Perignon x Lady Gaga</p>
          </div>
        </div>
        <div class="flex-[1_1_auto] block lg:flex justify-between">
          <div class="flex-[1_1_auto] lg:max-w-[274px] w-full">
            <img src="~/assets/images/image_14.png" draggable="false" alt="" />
            <div class="flex gap-4 items-center py-5">
              <img src="~/assets/images/oneline.png" draggable="false" alt="" />
              <p>Легендарные аксессуары Riedel теперь в Казахстане!</p>
            </div>
          </div>
          <div class="flex-[1_1_auto] lg:max-w-[274px] mt-[80px] w-full">
            <img src="~/assets/images/image_15.png" draggable="false" alt="" />
            <div class="flex gap-4 items-center py-5">
              <img src="~/assets/images/oneline.png" draggable="false" alt="" />
              <p>Устали от Кавы? Новая категория игристых вин Испании</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="relative max-w-[1300px] w-full mx-auto my-10 px-6 grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        <div>
          <img src="~/assets/images/image_17.png" draggable="false" alt="" />
          <div class="flex gap-4 items-center py-5">
            <img
              src="~/assets/images/threediffline.png"
              draggable="false"
              alt=""
            />
            <p>AIN Asia Awards</p>
          </div>
        </div>
        <div class="relative right-6 bottom-[0px]">
          <div class="absolute left-0 right-0 lg:bottom-0">
            <img src="~/assets/images/image_16.png" draggable="false" alt="" />
            <div class="flex gap-4 items-center py-5">
              <img
                src="~/assets/images/threediffline.png"
                draggable="false"
                alt=""
              />
              <p>Новинка Винокурни Ardbeg</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="relative lg:top-0 top-[900px] lg:max-w-[1300px] w-full lg:max-h-[80px] h-full my-[80px] mx-auto px-6 flex justify-between bg-[#C49955] text-[16px] text-[#FFFFFF]"
      >
        <img class="hidden lg:block" src="~/assets/images/threeline.png" draggable="false" alt="" />
        <div class="block lg:flex justify-between items-center gap-12 py-4 mx-auto ">
          <img class="mx-auto" src="~/assets/images/brut.png" draggable="false" alt="" />
          <p class="items-center py-6 mx-auto">
            BRUT - это проект крупнейшей дистрибьюторской
            компании Kazakhstan Wines & Spirits.
          </p>
          <button
            class="w-full lg:max-w-[320px] px-[100px] py-[15px] border-[1px] border-solid border-[#FFFFFF] rounded-[2px] font-light hover:bg-[white] hover:text-[#C49955] duration-200"
            type="button"
          >
            Перейти
          </button>
        </div>
        <img class="hidden lg:block" src="~/assets/images/threeline.png" draggable="false" alt="" />
      </div>
    </main>
  </div>
</template>
<style>
.block{
  position: relative;
}</style>