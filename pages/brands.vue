<template>
  <div class="max-w-[1120px] w-full mx-auto text-center my-[70px]">
    <p class="text-[30px] font-extralight">БРЕНДЫ</p>
    <div class="bg-[#010101] h-[1px] max-w-[100px] w-full mx-auto my-8"></div>
    <p class="max-w-[1024px] w-full mx-auto text-[20px] font-light">
      В группу KWS входит 75 знаменитых Домов, специализирующихся в шести разных
      сферах. <br />
      Уважение к традициям способствует поддержке уникального наследия каждого
      бренда <br />
      и максимально высоких стандартов качества производимой продукции.
    </p>
    <div class="block md:flex justify-between my-12">
      <div class="text-[20px] font-light">
        <p>100</p>
        <div
          class="bg-[#010101] h-[1px] max-w-[80px] w-full mx-auto my-4"
        ></div>
        <p>
          Брендов <br />
          с богатой историей <br />
          и вкусов
        </p>
      </div>
      <div class="text-[20px] font-light">
        <p>40</p>
        <div
          class="bg-[#010101] h-[1px] max-w-[80px] w-full mx-auto my-4"
        ></div>
        <p>Домов</p>
      </div>
      <div class="text-[20px] font-light">
        <p>100</p>
        <div
          class="bg-[#010101] h-[1px] max-w-[80px] w-full mx-auto my-4"
        ></div>
        <p>
          Брендов <br />
          с богатой историей
        </p>
      </div>
    </div>
  </div>
  <div>
    <div
      class="bg-[url('~/assets/images/image_65.png')] bg-cover h-[50vh] uppercase flex"
    >
      <div class="max-w-[1120px] w-full mx-auto">
        <p
          class="sm:text-[32px] md:text-[48px] lg:text-[56px] font-extralight text-[white] mt-[200px]"
        >
          ВИНО
        </p>
      </div>
    </div>
  </div>
  <div class="bg-[#222222] py-3">
    <div
      class="max-w-[1280px] w-full mx-auto px-12 md:px-6 lg:px-0 block lg:flex justify-start gap-[100px] uppercase bg-[#222222]"
    >
      <p class="font-light text-[#CCAD7B]">Вино</p>
      <p class="font-light text-[white]">Крепкие напитки</p>
      <p class="font-bold text-[white]">стекло и аксессуары</p>
    </div>
  </div>
  <div class="max-w-[1280px] w-full mx-auto flex gap-[100px] my-8">
    <div class="min-w-[200px]">
      <div v-if="!countryList.length" class="">
        <v-skeleton-loader
          v-for="skeleton in 21"
          :key="skeleton"
          type="list-item"
        ></v-skeleton-loader>
      </div>
      <div v-else>
        <p class="font-bold">Вcе</p>
        <p
          v-for="(country, index) in countryList"
          :key="index"
          :title="country.name"
          class="py-2"
        >
          {{ country.name }}
        </p>
      </div>
    </div>
    <div class="flex-[1_1_auto]">
      <div class="block lg:flex gap-10">
        <p>
          В группу KWS входит 75 знаменитых Домов, специализирующихся в шести
          разных сферах. <br />
          Уважение к традициям способствует поддержке уникального наследия
          каждого бренда <br />
          и максимально высоких стандартов качества производимой продукции.
        </p>
        <div
          class="flex flex-row-reverse lg:flex-row gap-4 flex-[1_1_auto] h-[64px] lg:px-4"
        >
          <div class="flex-[1_1_auto] bg-[#CCAD7B]"></div>
          <div class="w-[40px] bg-[#CCAD7B]"></div>
          <div class="w-[32px] bg-[#CCAD7B]"></div>
          <div class="w-[16px] bg-[#CCAD7B]"></div>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-5 my-8 w-full">
        <div
          v-for="(alcohol, index) in alcoholList"
          :key="index"
          class="max-h-[300px] min-h-[300px] h-full flex gap-4 flex-col h-full bg-[#F8F8F8] block p-4"
        >
          <div class="flex-[1_1_auto] bg-no-repeat" :style="{backgroundImage: `url(${alcohol.logo})`, backgroundPosition: '50%', backgroundSize: 'contain'}">
            <!-- <img class="w-full h-full object-contain" :src="alcohol.logo" alt="" /> -->
          </div>
          <p class="text-center">{{ countryList[alcohol.country_id].name }}</p>
        </div>
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

    const loader = ref(false);
    const countryList = ref([]);
    const alcoholList = ref([]);

    onMounted(() => {
      getCountry();
      getAlcohols();
    });
    const getCountry = () => {
      loader.value = true;
      axios
        .get("https://pma.kws.kz/api/brands/main/filters")
        .then(function (response) {
          countryList.value = response.data.countries;
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
          loader.value = false;
        });
    };
    const getAlcohols = () => {
      loader.value = true;
      axios
        .get("https://pma.kws.kz/api/alcohol-types/3")
        .then(function (response) {
          alcoholList.value = response.data.type.brands;
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
          loader.value = false;
        });
    };

    return { loader, countryList, alcoholList };
  },
};
</script>

<style lang="scss" scoped></style>

https://pma.kws.kz/api/brands/252