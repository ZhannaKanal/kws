<template>
  <div class="max-w-[580px] w-full mx-auto my-[80px]">
    <p class="text-center text-[24px] font-light">
      Оставить заявку на обслуживание
    </p>
    <div class="bg-[#010101] h-[1px] max-w-[180px] w-full mx-auto my-8"></div>
    <div class="max-w-[320px] w-full mx-auto gap-5">
      <input
      v-model="formData.fullname"
        class="py-2 px-3 w-full border-solid border-[#C1C1C1] border-[1px] rounded-[2px] placeholder:text-[#747474] focus:outline-[#CCAD7B] text-[#CCAD7B] caret-[white]"
        id="name"
        type="text"
        placeholder="ФИО"
      />

      <input
      v-model="formData.number"
        class="my-2 py-2 px-3 w-full border-solid border-[#C1C1C1] border-[1px] rounded-[2px] placeholder:text-[#747474] focus:outline-[#CCAD7B] text-[#CCAD7B]"
        id="num"
        type="number"
        placeholder="Номер"
      />

      <input
      v-model="formData.catalog"
        class="py-2 px-3 w-full border-solid border-[#C1C1C1] border-[1px] rounded-[2px] placeholder:text-[#747474] focus:outline-[#CCAD7B] text-[#CCAD7B]"
        id="catalog"
        type="text"
        placeholder="Корпоративный каталог"
      />
      <v-btn @mouseleave="$emit('clicked', formData)" class="my-3 hover:bg-[#222222] hover:text-[white] duration-300" variant="outlined" :style="{ borderColor: '#C1C1C1', fontSize: '12px' }" rounded="sm" size="large" block>Оставить заявку</v-btn>
      
      <button
       @mouseleave="$emit('clicked', formData)"
        class="py-3 my-8 px-auto w-full border-solid border-[#C1C1C1] border-[1px] rounded-[2px] hover:bg-[#222222] hover:text-[white] duration-300"
        type="submit"
      >
        Оставить заявку
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const formData = reactive(
        {
            fullname:'Zhan Kan',
            number:'',
            catalog:''
        }
    )

    return {formData};
  },
});
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>
