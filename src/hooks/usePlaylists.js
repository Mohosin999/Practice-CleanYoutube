import { useEffect, useState } from "react";
import getPlaylist from "../api";
import storage from "../utils/Storage";

const STORAGE_KEY = "cy__playlist__state";

const INIT_STATE = {
  playlists: {},
  recentPlaylists: [],
  favorite: [],
};

const usePlaylists = () => {
  const [state, setState] = useState(INIT_STATE);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const state = storage.get(STORAGE_KEY);
    if (state) {
      setState({ ...state });
    }
  }, []);

  useEffect(() => {
    if (state !== INIT_STATE) {
      storage.save(STORAGE_KEY, state);
    }
  }, [state]);

  /**
   * Get videos by playlistId
   * @param {string} playlistId - you must give playlistId as a string
   * @param {boolean} force - It's default value is false
   */
  const getPlaylistById = async (playlistId, force = false) => {
    if (state.playlists[playlistId] && !force) {
      return;
    }

    setLoading(true);

    try {
      const playlist = await getPlaylist(playlistId);
      setError("");
      setState((prev) => ({
        ...prev,
        playlists: {
          ...prev.playlists,
          [playlistId]: playlist,
        },
      }));
    } catch (e) {
      setError(e.response?.data?.error?.message || "Something Went Wrong");
    } finally {
      setLoading(false);
    }
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
    getPlaylistById,
    addToRecent,
    addToFavorite,
  };
};

export default usePlaylists;
