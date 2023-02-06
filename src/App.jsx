import React, { useEffect } from "react";
import usePlaylists from "./hooks/usePlaylists";

const App = () => {
  const { getPlaylistById, playlists } = usePlaylists();

  useEffect(() => {
    getPlaylistById("PLSNRR4BKcowCkeAxfdtTsLqwR0LJYwDaz");
  }, []);

  console.log("Playlist", playlists);

  return (
    <div>
      <h1>Server Problems</h1>
    </div>
  );
};

export default App;
