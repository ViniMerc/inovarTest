import { CssBaseline, Grid } from "@mui/material";
import NavBar from "../components/NavBar";
import PostList from "../components/Server";

function App() {
  return (
    <Grid container>
      <CssBaseline />
      <NavBar />
      <PostList />
  
    </Grid>
  );
}

export default App; 
