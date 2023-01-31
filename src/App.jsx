// import React from "react";
// import CssBaseline from "@mui/material/CssBaseline";
// import Navbar from "./components/navbar";
// import usePlaylists from "./hooks/usePlaylists";
// import PlaylistCardItem from "./components/playlist-card-item";
// import { Container } from "@mui/system";
// import { Grid } from "@mui/material";

// const App = () => {
//   const { playlists, getPlaylistById } = usePlaylists();

//   const playlistArray = Object.values(playlists);

//   return (
//     <>
//       <CssBaseline />
//       <Container maxWidth={"lg"} sx={{ marginTop: 16 }}>
//         {" "}
//         // from here
//         <Navbar getPlaylistById={getPlaylistById} />
//         {playlistArray.length > 0 && (
//           <Grid container alignItems="stretch">
//             {playlistArray.map((item) => (
//               <Grid item xs={12} md={6} lg={4} mb={2}>
//                 {" "}
//                 // to here
//                 <PlaylistCardItem
//                   key={item.id}
//                   playlistThumbnail={item.playlistThumbnail}
//                   playlistTitle={item.playlistTitle}
//                   channelTitle={item.channelTitle}
//                 />
//               </Grid>
//             ))}
//           </Grid>
//         )}
//       </Container>
//     </>
//   );
// };

// export default App;

// import React from "react";

// const App = () => {
//   return (
//     <>
//       {/* <CssBaseline /> */}
//       <h2>Akash</h2>
//     </>
//   );
// };

// export default App;

// import React from "react";
// import CssBaseline from "@mui/material/CssBaseline";
// import Navbar from "./components/navbar";
// import usePlaylists from "./hooks/usePlaylists";

// const App = () => {
//   const { playlists, error, getPlaylistById } = usePlaylists();
//   console.log(playlists);
//   console.log(error);

//   return (
//     <>
//       <CssBaseline />
//       <div>
//         <Navbar getPlaylistById={getPlaylistById} />
//       </div>
//     </>
//   );
// };

// export default App;

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
              key={item.id} // playlistId = ?
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
