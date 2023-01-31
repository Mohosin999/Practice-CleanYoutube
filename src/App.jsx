import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/navbar";
import usePlaylists from "./hooks/usePlaylists";
import PlaylistCardItem from "./components/playlist-card-item";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";

const App = () => {
  const { playlists, getPlaylistById } = usePlaylists();

  const playlistArray = Object.values(playlists);

  return (
    <>
      <CssBaseline />
      <Container maxWidth={"lg"} sx={{ marginTop: 16 }}>
        <Navbar getPlaylistById={getPlaylistById} />
        {playlistArray.length > 0 && (
          <Grid container alignItems="stretch">
            {playlistArray.map((item) => (
              <Grid item xs={12} md={6} lg={4} mb={2}>
                <PlaylistCardItem
                  key={item.id}
                  playlistThumbnail={item.playlistThumbnail}
                  playlistTitle={item.playlistTitle}
                  channelTitle={item.channelTitle}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
};

export default App;
