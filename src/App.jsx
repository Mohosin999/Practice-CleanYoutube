import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/navbar";
import usePlaylists from "./hooks/usePlaylists";
import PlaylistCardItem from "./components/playlist-card-item";

const App = () => {
  const { playlists, error, getPlaylistById } = usePlaylists();
  console.log(playlists);
  console.log(error);

  const playlistArray = Object.values(playlists);

  return (
    <>
      <CssBaseline />
      <div>
        <Navbar getPlaylistById={getPlaylistById} />
        {playlistArray.length > 0 &&
          playlistArray.map((item) => (
            <PlaylistCardItem
              key={item.playlistId}
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

// import React, { useEffect } from "react";
// import usePlaylists from "./hooks/usePlaylists";

// const App = () => {
//   const { getPlaylistById, playlists } = usePlaylists();

//   useEffect(() => {
//     getPlaylistById("PLSNRR4BKcowCkeAxfdtTsLqwR0LJYwDaz");
//   }, []);

//   console.log("Playlist", playlists);

//   return (
//     <div>
//       <h1>Server Problems</h1>
//     </div>
//   );
// };

// export default App;
