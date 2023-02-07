import { useState } from "react";
import getPlaylist from "../api";

const usePlaylists = () => {
  const [state, setState] = useState({
    playlists: {},
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getPlaylistById = async (playlistId, force = false) => {
    if (state.playlists[playlistId] && !force) {
      return;
    }

    setLoading(true);
    let result;

    try {
      result = await getPlaylist(playlistId);
      setError("");
    } catch (e) {
      console.log(e.response?.data?.error?.message || "Something Went Wrong");
    } finally {
      setLoading(false);
    }

    let cid, ct;

    result = result.map((item) => {
      const {
        channelId,
        channelTitle,
        title,
        description,
        thumbnails: { medium },
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

  return { getPlaylistById, playlists: state.playlists, error, loading };
};

export default usePlaylists;
