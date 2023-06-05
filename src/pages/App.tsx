import { Container, CssBaseline } from "@mui/material";
import NavBar from "../components/NavBar";
import CardList from "../components/Server";
import Bottom from "../components/Bottom";

function App() {
  return (

    <Container maxWidth={false}>
      <CssBaseline />
      <NavBar />
      <CardList />
      <Bottom />
    </Container>
  );
}

export default App;
