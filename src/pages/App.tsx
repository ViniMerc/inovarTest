import { CssBaseline, Grid, ThemeProvider } from "@mui/material";
import NavBar from "../components/NavBar";
import PostList from "../components/Server";
import Fonts from "../themes/Fonts";

function App() {
  return (
    <ThemeProvider theme={Fonts}>
      <Grid container>
        <CssBaseline />
        <NavBar />
        <PostList />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
