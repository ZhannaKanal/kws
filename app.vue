<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
<script setup lang="ts">
const friendsStore = useFriendStore()
onMounted(() => {
      friendsStore.getCountries();
    });
</script>
