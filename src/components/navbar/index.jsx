import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import Link from "@mui/material/Link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import { Button, Container } from "@mui/material";
import PlaylistForm from "../playlist-form";

const Navbar = ({ getPlaylistById }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getPlaylistId = (playlistId) => {
    getPlaylistById(playlistId);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="default" sx={{ py: 2 }}>
        <Container maxWidth="lg">
          <Toolbar>
            <Stack sx={{ flexGrow: 1 }}>
              <Link
                to="/"
                component={RouterLink}
                sx={{ textDecoration: "none", color: "#000" }}
              >
                <Typography variant="h4">Clean YouTube</Typography>
              </Link>
              <Link
                href="https://www.stacklearner.com"
                target={"_blank"}
                sx={{ textDecoration: "none", color: "#000" }}
              >
                <Typography variant="body1">By Stack Learner</Typography>
              </Link>
            </Stack>
            <Button variant="contained" onClick={handleClickOpen}>
              Add Playlist
            </Button>
            <PlaylistForm
              open={open}
              handleClose={handleClose}
              getPlaylistId={getPlaylistId}
            />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
