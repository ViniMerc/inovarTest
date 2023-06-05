import { CssBaseline, Grid } from "@mui/material";
import NavBar from "../components/NavBar";
import CardList from "../components/Server";

function App() {
  return (
    <Grid container>
      <CssBaseline />
      <NavBar />
      <CardList />
    </Grid>
  );
}

export default App;
