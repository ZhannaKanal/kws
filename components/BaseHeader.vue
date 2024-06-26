<template>
  <header class="relative text-[white] uppercase">
    <img
      class="absolute z-1 w-full min-h-[100vh] h-full"
      src="~/assets/images/main.png"
      draggable="false"
      alt=""
    />
    <div class="relative z-15">
      <div class="hover:bg-[#222222]">
        <div class="flex items-center max-w-[1300px] w-full mx-auto py-12">
          <div class="lg:hidden flex justify-start px-6">
            <img class="" src="~/assets/images/image_1.png" alt="" />
          </div>
          <div class="flex-[1_1_auto] flex justify-center">
            <img src="~/assets/images/KWS.png" draggable="false" alt="" />
          </div>
          <div class="opacity-0 justify-end px-6">
            <img class="" src="~/assets/images/image_1.png" alt="" />
          </div>
        </div>
        <div
          class="max-w-[1300px] w-full mx-auto px-[210px] hidden block lg:flex gap-[80px] justify-between py-2 text-[16px] text-[white] font-light font-[]"
        >
          <nuxt-link to="/member"
            ><p class="hover:text-[#7F7F7F]">{{$t('about')}}</p></nuxt-link
          >
          <nuxt-link to="/corporative"
            ><p class="hover:text-[#7F7F7F]">{{$t('services')}}</p></nuxt-link
          >
          <nuxt-link to="/brands"
            ><p class="hover:text-[#7F7F7F]">{{$t('brands')}}</p></nuxt-link
          >
          <nuxt-link to="/event"
            ><p class="hover:text-[#7F7F7F]">{{$t('event')}}</p></nuxt-link
          >
          <nuxt-link to="/contacts"
            ><p class="hover:text-[#7F7F7F]">{{$t('contacts')}}</p></nuxt-link
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
        class="w-full my-[230px] flex justify-center px-12 text-center text-[24px] font-light font-[]"
      >
        - Компания Kazakhstan Wines & Spirits - <br />
        ведущий импортер премиальных вин и спиртных <br />
        напитков на территории Казахстана.
      </p>
    </div>
  </header>
  
</template>

<script>
import { useI18n } from 'vue-i18n';
export default {
  name: 'BaseHeader',
  setup() {
    const {t} = useI18n({useScope: 'global'})
    return {t};
  },
};
</script>

<style lang="scss" scoped></style>
