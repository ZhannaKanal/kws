<template>
  <!-- <div class="block">
    <input v-model="formData.firstName" id="login" type="text" placeholder="firstname">

   <contact-block v-for="item in cardItems" :title="item.name" :id="item.id" @onCLick="functionFromPage"/>

  </div> -->

  <div class="">
    <div class="bg-[] px-6">
      <div class="max-w-[1120px] mx-auto py-[80px] text-center">
        <h1 class="uppercase text-[30px] font-light">наши контакты</h1>
        <div
          class="bg-[#010101] h-[1px] max-w-[200px] w-full mx-auto my-8"
        ></div>
        <div
          class="flex gap-6 lg:my-0 justify-center items-center order-[1] lg:order-[2]"
        >
          <p class="text-[black]">СЛЕДИТЕ ЗА НАМИ</p>
          <a href=""><nuxt-icon name="001/001" filled /></a>
          <a href=""><nuxt-icon name="001/002" filled /></a>
        </div>
      </div>
    </div>
    <div
      class="bg-[] max-w-[1250px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
    >
      <ContactBlock
        v-for="block in contactBlocks"
        :iconName="block.iconName"
        :firstTitle="block.firstTitle"
        :secondTitle="block.secondTitle"
        :mediaContact="block.mediaContact"
        :proposalsContact="block.proposalsContact"
      />
    </div>
    <div class="max-w-[1280px] w-full mx-auto min-h-[320px] h-full px-4 my-12">
      <img
        src="~assets/images/image_50.png"
        alt=""
        draggable="false"
        class=""
      />
    </div>
    <div class="max-w-[1280px] w-full mx-auto grid lg:grid-cols-2 mb-[80px]">
      <div></div>
      <div
        class="flex flex-row-reverse lg:flex-row gap-4 flex-[1_1_auto] h-[64px] lg:px-4"
      >
        <div class="flex-[1_1_auto] bg-[#CCAD7B]"></div>
        <div class="w-[56px] bg-[#CCAD7B]"></div>
        <div class="w-[40px] bg-[#CCAD7B]"></div>
        <div class="w-[32px] bg-[#CCAD7B]"></div>
        <div class="w-[16px] bg-[#CCAD7B]"></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  setup() {
    const route = useRoute();
    const router = useRouter();

    const cardItems = ref([
      {
        id: 2,
        name: "product 2",
      },
    ]);

    const contactBlocks = reactive([
      {
        iconName: "001/003",
        firstTitle: "СМИ и партнерам",
        secondTitle: "Для предложений",
        mediaContact: "hobbsandshow@mail.ru",
        proposalsContact: "hobbsandshow@mail.com",
      },
      {
        iconName: "001/004",
        firstTitle: "СМИ и партнерам",
        secondTitle: "Для предложений",
        mediaContact: "hobbsandshow@mail.ru",
        proposalsContact: "hobbsandshow@mail.com",
      },
      {
        iconName: "001/005",
        firstTitle: "СМИ и партнерам",
        secondTitle: "Для предложений",
        mediaContact: "hobbsandshow@mail.ru",
        proposalsContact: "hobbsandshow@mail.com",
      },
    ]);

    definePageMeta({
      layout: "contacts",
      middleware: "",
    });

    const formData = ref({
      firstName: "Kanagat",
      lastName: "Zhumagali",
    });

    const isSubmited = ref("Name");

    const login = () => {};

    onMounted(async () => {
      // fetchProducts()
    });

    onBeforeRouteUpdate((to, from) => {});

    const fetchProducts = async () => {
      const response = await fetch(
        "https://products.halyklife.kz/test/gateway/product/products"
      );
      const products = await response.json();
      console.log(products);
    };

    watch(
      () => formData.value,
      (value) => {},
      { deep: true, immediate: true }
    );

    const fullName = computed(() => {
      return `${formData.value.firstName} ${formData.value.lastName}`;
    });

    const functionFromPage = (value) => {
      console.log(value);
    };

    const a = `number ${formData.value.firstName} is false`;

    return { formData, fullName, functionFromPage, cardItems, contactBlocks };
  },
}
</script>
