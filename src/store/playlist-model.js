import { action, thunk } from "easy-peasy";
import getPlaylist from "../api";

const playlistModel = {
  items: [],
  id: "",
  title: "",
  description: "",
  thumbnail: "",
  channelId: "",
  channelTitle: "",
  // uporer ai data gulo update korte hole amader action create korte hobe
  // jodio amra jani je asynchronous task handle korar jonne action perfect na
  // but thunk abar sorasori data update korte pare na. Tai jodi amader asynchronous
  // task thake tobe amader dui layere kajta korte hobe, (1) action, (2) thunk
  setPlaylistData: action((state, payload) => {
    state = { ...payload };
    return state;
  }),
  getPlaylistData: thunk(async ({ setPlaylistData }, payload) => {
    const {
      playlistId,
      playlistTitle,
      playlistDescription,
      playlistItems,
      playlistThumbnail,
      channelId,
      channelTitle,
    } = await getPlaylist(payload);

    setPlaylistData({
      items: playlistItems,
      id: playlistId,
      title: playlistTitle,
      description: playlistDescription,
      thumbnail: playlistThumbnail,
      channelId,
      channelTitle,
    });
  }),
};

export default playlistModel;
