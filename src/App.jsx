import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { useStoreActions } from "easy-peasy";
import Navbar from "./components/navbar";
import usePlaylists from "./hooks/usePlaylists";
import PlaylistCardItem from "./components/playlist-card-item";
import { Container } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import { useEffect } from "react";

const playlistId = "PL-J2q3Ga50oNQP__onO64kAHX_z0BdLv6";

const HomePage = ({ playlistArray }) => {
  const playlist = useStoreActions((actions) => actions.playlists);

  useEffect(() => {
    playlist.getPlaylist(playlistId);
  }, []);

  return (
    <Container maxWidth={"lg"} sx={{ marginTop: 16 }}>
      {playlistArray.length > 0 && (
        <Grid container alignItems="stretch">
          {playlistArray.map((item) => (
            <Grid item xs={12} md={6} lg={4} mb={2}>
              <PlaylistCardItem
                key={item.playlistId}
                playlistId={item.playlistId}
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

const PlayerPage = ({ playlists }) => {
  const { playlistId } = useParams();
  const current = playlists[playlistId];

  if (!current) return;

  return (
    <Container maxWidth={"lg"} sx={{ marginTop: 16 }}>
      <Typography variant="h2" align="center">
        {current.playlistTitle}
      </Typography>
      <Typography variant="body1">{current.playlistDescription}</Typography>
    </Container>
  );
};

const NotFound = () => {
  return (
    <Container maxWidth={"lg"} sx={{ marginTop: 16 }}>
      <Typography variant="h2" align="center">
        404 Page Not Found
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
        <Route
          path="/player/:playlistId"
          element={<PlayerPage playlists={playlists} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
