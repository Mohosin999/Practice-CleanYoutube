import { action } from "easy-peasy";

const playlistModel = {
  items: [],
  title: "",
  description: "",
  thumbnail: "",
  channelId: "",
  channelTitle: "",
  // uporer ai data gulo update korte hole amader action create korte hobe
  // jodio amra jani je asynchronous task handle korar jonne action perfect na
  // but thunk abar sorasori data update korte pare na. Tai jodi amader asynchronous
  // task thake tobe amader dui layere kajta korte hobe
  setPlaylistData: action((state, payload) => {}),
};
