import { useState } from "react";
import getPlaylist from "../api";

const usePlaylists = () => {
  const [state, setState] = useState({
    playlists: {},
    recentPlaylists: [],
    favorite: [],
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  /**
   * Get videos by playlistId
   * @param {string} playlistId - you must give playlistId as a string
   * @param {boolean} force - It's default value is false
   */
  const getPlaylistId = async (playlistId, force = false) => {
    if (state.playlists[playlistId] && !force) {
      return;
    }

    setLoading(true);
    let result;

    try {
      result = await getPlaylist(playlistId);
      setError("");
    } catch (e) {
      setError(e.response?.data?.error?.message || "Something Went Wrong");
    } finally {
      setLoading(false);
    }

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

  /**
   * Add to recentPlaylists
   * @param {string} playlistId - you must give playlistId as a string
   */
  const addToRecent = (playlistId) => {
    setState((prev) => ({
      ...prev,
      recentPlaylists: [...prev, playlistId],
    }));
  };

  /**
   * Add to favorite
   * @param {string} playlistId - you must give playlistId as a string
   */
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
    error,
    loading,
    getPlaylistId,
    addToRecent,
    addToFavorite,
  };
};

export default usePlaylists;
