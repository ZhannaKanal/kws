<!-- src/components/LinkedInComponent.vue -->
<template>
  <div>
    <h1>LinkedIn User Information</h1>
    <input v-model="username" placeholder="Enter LinkedIn username" />
    <button @click="getLinkedInData">Get Data</button>
    <div v-if="linkedInData.firstName">
      <p>First Name: {{ linkedInData.firstName }}</p>
      <p>{{ linkedInData.firstName }} is Country: {{ linkedInData.geo.country }}</p>
      <p>{{ linkedInData.firstName }} is City: {{ linkedInData.geo.city }}</p>
      <p>{{ linkedInData.firstName }} is Skills: {{ linkedInData.skills.name }}</p>
    </div>
    <div v-else>Hii</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      linkedInData: ref([]),
    };
  },

  methods: {
    async getLinkedInData() {
      const apiKey = "ced870b98fmshd86005d4438874cp13fba9jsn002866e9b03e"; // Replace with your RapidAPI key
      const apiUrl = "https://linkedin-data-api.p.rapidapi.com/";
      try {
        const response = await axios.get(apiUrl, {
          params: { username: this.username },
          headers: {
            "x-rapidapi-host": "linkedin-data-api.p.rapidapi.com",
            "x-rapidapi-key": apiKey,
          },
        });
        this.linkedInData = response.data;
        console.log(linkedInData);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style>
/* Add any desired styling here */
</style>
