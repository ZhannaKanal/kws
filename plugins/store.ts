
export default defineNuxtPlugin(() => {
    const friendsStore = useFriendStore();

    return {
      provide: {
        friendsStore,
      },
    };
  });