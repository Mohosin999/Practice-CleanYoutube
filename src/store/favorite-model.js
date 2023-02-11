import { action, persist } from "easy-peasy";

const favoriteModel = persist({
  items: [],
  addToFavorite: action((state, playlistId) => {
    state.items.push(playlistId);
  }),
  removeFromFavorite: action((state, playlistId) => {
    state.items = state.items.filter((pId) => playlistId != pId);
    // akhane amra delete korar jonne filter bebohar korlam. amra chaile splice oo bebohar korte partam. kintu splice age index ber korbe, tarpor delete korbe orthat extra o(n) poriman somoy besi lagbe. so filter is good choise.
  }),
});

export default favoriteModel;
