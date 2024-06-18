<template>
  <div class="uppercase block lg:flex gap-8">
    <div class="hidden lg:block max-w-[32px] w-full">
      <p class="mx-2">
        <nuxt-icon :name="block.iconName" filled class="w-[30px] h-[30px]" />
      </p>
      <div class="w-[1px] mx-auto h-[160px] h-full bg-[black]"></div>
    </div>
    <div
      class="block lg:hidden w-full my-4 flex flex-[1_1_auto] items-center gap-3 px-6"
    >
      <div class="max-w-[500px] w-full h-[2px] bg-[black]"></div>
      <p class="mx-2">
        <nuxt-icon :name="block.iconName" filled class="w-[30px] h-[30px]" />
      </p>
      <div class="max-w-[500px] w-full h-[2px] bg-[black]"></div>
    </div>
    <div class="text-center lg:text-start">
      <div class="">
        <p class="text-[16px] font-bold">{{ block.firstTitle }}</p>
        <p class="text-[18px] font-light py-3">{{ block.mediaContact }}</p>
      </div>
      <div class="mt-12">
        <p class="text-[16px] font-bold">{{ block.secondTitle }}</p>
        <p class="text-[18px] font-light py-3">{{ block.proposalsContact }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    block: {
      type: Object,
      required: true,
    },
    
  },
});
</script>
