import {
  AppBar,
  Avatar,
  Container,
  Stack,
  Toolbar,
} from "@mui/material";
import { Hexagon } from "react-feather";
import { Colors } from "../themes/Colors";
import Search from "./Search";
import FilterButton from "./FilterButton";
import AddPostButton from "./AddPostButton";

export default function NavBar() {
  return (
    <AppBar
      sx={{
        height: 90,
        mt: 4,
        boxShadow: "0px 0.2px 0px 0px #000000",
        backgroundColor: "transparent",
        position: "static",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Stack direction="row" spacing={2}>
          <Hexagon
            size={48}
            fill={Colors.primary}
            color={Colors.primary}
            style={{ marginLeft: "300px" }}
          />

          <FilterButton />

          <Search />
        </Stack>
        <Stack direction="row" spacing={2}>
        <AddPostButton/>
          <Stack direction="row" spacing={2}>
            <Container sx={{ marginRight: "300px" }}>
              <Avatar
                variant="rounded"
                src="https://material-ui.com/static/images/avatar/1.jpg"
              />
            </Container>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
