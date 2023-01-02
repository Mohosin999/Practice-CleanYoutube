import axios from "axios";

/**
 * Get specific playlist by given id
 * @param {string} playlistId - You must give playlistId as a string
 * @param {string} pageToken - You must give pageToken as a string
 * @param {Array} result - Result is a list of array
 * @returns - This function will returns a promise
 */
const getPlaylist = async (playlistId, pageToken = "", result = []) => {
  const key = import.meta.env.VITE_YOUTUBE_API_KEY;
  const URL = `https://www.googleapis.com/youtube/v3/playlistItems?key=${key}&part=id, contentDetails, snippet&maxResults=50&playlistId=${playlistId}&pageToken=${pageToken}`;

  const { data } = await axios.get(URL);
  result = [...result, ...data.items];

  if (data.nextPageToken) {
    result = await getPlaylist(playlistId, data.nextPageToken, result);
  }

  return result;
};

export default getPlaylist;
