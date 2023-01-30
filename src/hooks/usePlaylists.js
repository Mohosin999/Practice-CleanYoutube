import { useState } from "react";
import getPlaylist from "../api";

const usePlaylists = () => {
  const [state, setState] = useState({
    playlists: {},
    recentPlaylists: [],
    favorite: [],
  });

  const getPlaylistId = async (playlistId, force = false) => {
    if (state.playlists[playlistId] && !force) {
      return;
    }

    let result = await getPlaylist(playlistId);
    let cid, ct;

    result = result.map((item) => {
      const {
        channelId,
        title,
        description,
        thumbnails: { medium },
        channelTitle,
      } = item.snippet;

      if (!cid) {
        cid = channelId;
      }

      if (!ct) {
        ct = channelTitle;
      }

      return {
        title,
        description,
        thumbnails: medium,
        contentDetails: item.contentDetails,
      };
    });

    setState((prev) => ({
      ...prev,
      playlists: {
        ...prev.playlists,
        [playlistId]: {
          items: result,
          playlistId: playlistId,
          channelId: cid,
          channelTitle: ct,
        },
      },
    }));
  };

  const addToRecent = (playlistId) => {
    setState((prev) => ({
      ...prev,
      recentPlaylists: [...prev, playlistId],
    }));
  };

  const addToFavorite = (playlistId) => {
    setState((prev) => ({
      ...prev,
      favorite: [...prev, playlistId],
    }));
  };

  const getPlaylistsByIds = (ids = []) => {
    return ids.map((id) => state.playlists[id]);
  };

  return {
    playlists: state.playlists,
    recentPlaylists: getPlaylistsByIds(state.recentPlaylists),
    favorite: getPlaylistsByIds(state.favorite),
    getPlaylistId,
    addToRecent,
    addToFavorite,
  };
};

export default usePlaylists;
