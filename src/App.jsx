import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/navbar";
import usePlaylists from "./hooks/usePlaylists";
import PlaylistCardItem from "./components/playlist-card-item";

const App = () => {
  const { playlists, error, getPlaylistById } = usePlaylists();
  console.log(playlists);
  console.log(error);

  return (
    <>
      <CssBaseline />
      <div>
        <Navbar getPlaylistById={getPlaylistById} />
      </div>
    </>
  );
};

export default App;
