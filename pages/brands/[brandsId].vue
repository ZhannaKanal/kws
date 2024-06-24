<template>
  <div v-if="infoList.id">
    <div
      class="max-w-[1280px] w-full mx-auto my-[80px] flex-col-reverse lg:flex-row flex justify-between gap-[200px]"
    >
      <div class="max-w-[636px] w-full">
        <p class="font-extralight text-[30px]">
          {{ infoList.type }}
        </p>
        <p class="my-8" v-html="infoList.type.brands.id.description"></p>
      </div>
      <div class="mx-auto">
        <img :src="infoList.logo" alt="" />
      </div>
    </div>
    <div class="relative flex-[1_1_auto] max-w-[1280px] w-full mx-auto">
      <div
        class="absolute max-w-[300px] sm:max-w-[500px] md:max-w-[800px] w-full bg-[#CCAD7B] max-h-[480px] h-full right-6 top-0 z-[-1]"
      ></div>
      <div class="w-full py-6">
        <img :src="infoList.first_img" draggable="false" alt="" />
      </div>
    </div>
    <div class="bg-[#C49955] w-full">
      <p class="text-center text-white py-6" v-html="infoList.brand_info"></p>
    </div>
    <div
      class="block lg:flex justify-between max-w-[1280px] w-full mx-auto my-12"
    >
      <div class="relative flex-[1_1_auto] max-w-[700px] w-full">
        <div class="relative">
          <div
            class="absolute max-w-[300px] sm:max-w-[500px] md:max-w-[800px] w-full bg-[#CCAD7B] max-h-[480px] h-full right-0 bottom-[-30px] z-[-1]"
          ></div>
          <img :src="infoList.sec_img" draggable="false" alt="" />
        </div>
        <div
          class="my-[100px] flex flex-row-reverse lg:flex-row gap-8 max-w-[560px] w-full h-[64px]"
        >
          <div class="flex-[1_1_auto] bg-[#CCAD7B]"></div>
          <div class="w-[78px] bg-[#CCAD7B]"></div>
          <div class="w-[63px] bg-[#CCAD7B]"></div>
          <div class="w-[32px] bg-[#CCAD7B]"></div>
        </div>
      </div>
      <div class="max-w-[580px] w-full mx-auto">
        <div class="px-4">
          <p class="text-[30px] font-extralight uppercase">
            {{ infoList.secondary_title }}
          </p>
          <div class="py-4">
            {{ infoList.main_text }}
          </div>
        </div>
        <div class="flex flex-row-reverse flex-[1_1_auto] gap-4 min-h-[64px]">
          <div class="w-[18px] bg-[#CCAD7B]"></div>
          <div class="w-[36px] bg-[#CCAD7B]"></div>
          <div class="w-[45px] bg-[#CCAD7B]"></div>
          <div class="w-[63px] bg-[#CCAD7B]"></div>
          <div class="flex-[1_1_auto] bg-[#CCAD7B]"></div>
        </div>
        <div class="pt-4">
          <img :src="infoList.third_img" alt="" />
        </div>
      </div>
    </div>
    <div class="max-w-[1280px] w-full mx-auto">
      <img :src="infoList.main_img" alt="" />
    </div>
    <div
      class="max-w-[1280px] w-full mx-auto my-8 flex gap-[100px] items-center"
    >
      <p class="text-[30px] font-light">ТОВАРЫ</p>
      <div
        class="flex-[1_1_auto] bg-[white] min-h-[64px] h-full flex gap-7 order-[1] lg:order-[2]"
      >
        <div class="w-[27px] bg-[#CCAD7B]"></div>
        <div class="w-[54px] bg-[#CCAD7B]"></div>
        <div class="w-[68px] bg-[#CCAD7B]"></div>
        <div class="w-[95px] bg-[#CCAD7B]"></div>
        <div class="flex-[1_1_auto] bg-[#CCAD7B]"></div>
      </div>
    </div>
    <div class="my-12">
      <img src="https://brut.kz/storage/43847/7663.jpg" alt="">
      <!-- <v-sheet class="mx-auto"  max-width="1440">
        <v-slide-group
          v-model="model"
          class="pa-4"
          selected-class="bg-success"
          
        >
          <v-slide-group-item
            v-for="product in infoList.products"
            :key="product.id"
            v-slot="{ infoList, toggle, selectedClass }"
          >
            <v-card
              :class="['ma-1', selectedClass]"
              height="450"
              width="319"
              @click="toggle"
            >
              <div class="d-flex fill-height align-center justify-center">
                <img :src="'https://brut.kz'+product.image" alt="">
                <p>{{product.name}}</p>
              </div>
            </v-card>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet> -->
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
export default {
    setup () {
        const {brandsId} = useRoute().params

        const infoList = ref({});

        onMounted(async () => {
            await getInfo();
        });
        const getInfo = async () => {
            await axios
                .get(`https://pma.kws.kz/api/brands/${brandsId as string}`)
                .then(function (response) {
                    infoList.value = response.data;
                    console.log(infoList.value);
                })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(function () {});
                };

        return {infoList};
    }
}
</script>

<style lang="scss" scoped></style>
