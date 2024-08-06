<template>
  <div>
    <pre>{{ $friendsStore.characters[0].name }}</pre>
    {{ $friendsStore.countries[0] }}
  </div>
</template>

<script>
import { storeToRefs } from "pinia";
export default {
  setup() {
    const friendsStore = useFriendStore();
    const { characters } = storeToRefs(friendsStore);


    return {};
  },
};
</script>

<style lang="scss" scoped></style>
