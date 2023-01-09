import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/navbar";
import usePlaylists from "./hooks/usePlaylists";
import PlaylistCardItem from "./components/playlist-card-item";

const App = () => {
  const { playlists, getPlaylistById } = usePlaylists();

  const playlistArray = Object.values(playlists);

  return (
    <>
      <CssBaseline />
      <div>
        <Navbar getPlaylistById={getPlaylistById} />
        {playlistArray.length > 0 &&
          playlistArray.map((item) => (
            <PlaylistCardItem
              key={item.id}
              playlistThumbnail={item.playlistThumbnail}
              playlistTitle={item.playlistTitle}
              channelTitle={item.channelTitle}
            />
          ))}
      </div>
    </>
  );
};

export default App;
