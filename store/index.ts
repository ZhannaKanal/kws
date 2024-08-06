import { acceptHMRUpdate, defineStore } from "pinia";
import axios from "axios";

export const useFriendStore = defineStore({
  id: "friends-store",
  state: () => {
    return {
      characters: [
        {
          name: "Rachel",
          line: " Maybe I will be late",
        },
      ],
      countries: [

      ],
    };
  },
  actions: {
    addCharacters(name: string, line: string) {
      this.characters.push({
        name,
        line,
      });
    },
    async getCountries() {
      
      const response = await axios
        .get("https://pma.kws.kz/api/brands/main/filters")
        this.countries = response.data.countries;
    },
  },
  getters: {
    getLineByName: (state) => {
      return (name: string) =>
        state.characters.find((character) => character.name === name);
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useFriendStore, import.meta.hot));
}
