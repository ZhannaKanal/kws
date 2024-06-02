<template>
  <div class="bg-[#EFE8DE] px-6">
    <div class="max-w-[1120px] mx-auto py-[120px] text-center">
      <h1 class="uppercase text-[30px] font-light">о наших сотрудниках</h1>
      <div class="flex justify-center py-8">
        <img src="~/assets/images/image_26.png" alt="" />
      </div>
      <p class="uppercase text-[24px] font-extralight">
        Миссия KWS - развитие винной культуры Казахстана <br />
        и создание новых трендов.
      </p>
    </div>
    <div
      class="bg-[white] max-w-[1120px] w-full mx-auto min-h-[80px] h-full"
    ></div>
  </div>
  <div class="bg-[white] flex justify-center text-center my-6 px-12">
    <div>
      <img src="~/assets/images/image_21.png" alt="" />
      <h1 class="uppercase text-[20px] font-extralight pt-3">
        Виктор Викторович
      </h1>
      <div class="flex justify-center py-2">
        <img src="~/assets/images/image_27.png" alt="" />
      </div>
      <p class="uppercase text-[#999999] text-[16px] font-light">
        Генеральный директор
      </p>
    </div>
  </div>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[1120px] w-full mx-auto mb-[80px] px-12 gap-10"
  >
    <div v-for="user in users" :key="user.id" class="text-center">
      <!-- <img class="w-full" :src="user.url" alt="" /> -->
      <img class="w-full" src="~/assets/images/image_21.png" alt="" />
      <h1 class="uppercase text-[20px] font-extralight pt-3">
        {{ user.name }}
      </h1>
      <div class="flex justify-center py-2">
        <img src="~/assets/images/image_27.png" alt="" />
      </div>
      <p class="uppercase text-[#999999] text-[16px] font-light">
        {{ user.email }}
      </p>
    </div>
    
  </div>
  <footer class="bg-[#222222] text-[16px]">
    <div class="flex justify-center py-10">
      <img src="~/assets/images/KWS.png" draggable="false" alt="" />
    </div>
    <div
      class="max-w-[1300px] w-full mx-auto grid grid-rows-3 lg:grid-cols-3 items-center"
    >
      <img
        class="w-[460px] w-full order-[2] lg:order-[1] hidden lg:block"
        src="~/assets/images/line_footer.png"
        draggable="false"
        alt=""
      />
      <div class="flex gap-6 lg:my-0 justify-center order-[1] lg:order-[2]">
        <p class="text-[white]">СЛЕДИТЕ ЗА НАМИ</p>
        <a href=""
          ><img src="~/assets/images/facebook.png" draggable="false" alt=""
        /></a>
        <a href="">
          <img src="~/assets/images/insta.png" draggable="false" alt=""
        /></a>
      </div>
      <img
        class="w-[460px] pt-10 lg:pt-0 w-full order-[3]"
        src="~/assets/images/line_footer.png"
        draggable="false"
        alt=""
      />
    </div>
    <div
      class="max-w-[1300px] w-full mx-auto py-6 block text-center lg:flex justify-between"
    >
      <p class="text-[#585858]">Все права защищены 2021</p>
      <p class="text-[#585858]">Разработано Digital Agency Nidge</p>
    </div>
  </footer>
</template>

<script>
export default {
  setup() {
    definePageMeta({
      layout: "contacts",
    })
    return {
      users: [
        { id: 1, url: '~/assets/images/image_21.png', name: 'John Doe', email: 'john@example.com' },
        { id: 2, url: '~/assets/images/image_21.png', name: 'Jane Smith', email: 'jane@example.com' },
        { id: 3, url: '~/assets/images/image_21.png', name: 'Alice Johnson', email: 'alice@example.com' },
        { id: 4, url: '~/assets/images/image_21.png', name: 'John Doe', email: 'john@example.com' },
        { id: 5, url: '~/assets/images/image_21.png', name: 'Jane Smith', email: 'jane@example.com' },
        { id: 6, url: '~/assets/images/image_21.png', name: 'Alice Johnson', email: 'alice@example.com' }
      ]
    };
  },
};
</script>

<style lang="scss" scoped></style>
