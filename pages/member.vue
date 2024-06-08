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
