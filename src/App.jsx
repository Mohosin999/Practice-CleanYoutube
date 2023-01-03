import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/navbar";
import usePlaylists from "./hooks/usePlaylists";

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

// PLOrIk8frqee0yNRq9Alpd8-XFNV_bpBO7
/**
 * PLOrIk8frqee0RN1GBZ1iReBRqMlwd4Rfj
 * PLOrIk8frqee2XLZTlGTxT17f3wrJ2rLxE
 * PLOrIk8frqee2CSXdocEKsqK7BmpxduaIk
 * PLOrIk8frqee0cJw6zEGwUeQaZT3hVBRuJ
 */
