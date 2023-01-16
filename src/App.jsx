import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import usePlaylists from "./hooks/usePlaylists";
import PlaylistCardItem from "./components/playlist-card-item";
import { Container } from "@mui/system";
import { Grid, Typography } from "@mui/material";

const HomePage = ({ playlistArray }) => {
  return (
    <Container maxWidth={"lg"} sx={{ marginTop: 16 }}>
      {playlistArray.length > 0 && (
        <Grid container alignItems="stretch">
          {playlistArray.map((item) => (
            <Grid item xs={12} md={6} lg={4} mb={2}>
              <PlaylistCardItem
                playlistThumbnail={item.playlistThumbnail}
                playlistTitle={item.playlistTitle}
                channelTitle={item.channelTitle}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

const PlayerPage = () => {
  return (
    <Container maxWidth={"lg"} sx={{ marginTop: 20 }}>
      <Typography variant="h2" align="center">
        I am player🚗
      </Typography>
    </Container>
  );
};

const NotFound = () => {
  return (
    <Container maxWidth={"lg"} sx={{ marginTop: 20 }}>
      <Typography variant="h2" align="center">
        404 Page Not Found😟
      </Typography>
    </Container>
  );
};

const App = () => {
  const { playlists, getPlaylistById } = usePlaylists();

  const playlistArray = Object.values(playlists);

  return (
    <BrowserRouter>
      <CssBaseline />
      <Navbar getPlaylistById={getPlaylistById} />
      <Routes>
        <Route path="/" element={<HomePage playlistArray={playlistArray} />} />
        <Route path="/player" element={<PlayerPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
