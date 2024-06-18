<template>
  <div class="max-w-[700px] w-full my-10 mx-auto bg-[orange] p-10 rounded-[2px]">
    <v-progress-linear v-if="loader" color="primary" :height="6" indeterminate></v-progress-linear>
    <div v-else class="">
        <div>
            <v-card
            v-for="(todo, index) in todoList"
            :key="index"
            :title="todo.title"
            :subtitle="index+1"
            :text="todo.body"
            class="mb-5"
            ></v-card>
        </div>
    </div>
  </div>
  <div class="max-w-[700px] w-full my-10 mx-auto bg-[grey] p-10 rounded-[2px]">
    <v-progress-linear
      v-if="loader"
      color="black"
      :height="6"
      indeterminate
    ></v-progress-linear>
    <div v-else class="">
      <div>
        <v-card
          v-for="(country, index) in countryList"
          :key="index"
          :title="country.name"
          class="mb-5"
        ></v-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  setup() {
    const loader = ref(false);
    const todoList=ref([]);

    onMounted(()=> {
        getTodos();
    });

    const getTodos = () => {
        loader.value = true
      setTimeout(()=>{
        axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(function (response) {
          todoList.value = response.data.slice(0, 99);
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
            loader.value=false;
        });
      }, 2000 );
    };

    return {loader, todoList};
  },
};
</script>

<style lang="scss" scoped></style>
<!-- https://pma.kws.kz/api/brands/main/filters -->