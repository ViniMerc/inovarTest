import { AppBar, Avatar, Button, Stack, Toolbar } from "@mui/material";
import { Hexagon } from "react-feather";
import { colors } from "../themes/colors";
import Search from "./Search";

export default function NavBar() {
  return (
    <AppBar
      sx={{
        boxShadow: "none",
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
          <Hexagon size={24} color="orange" style={{ marginLeft: "300px" }} />
          <Button
            sx={{
              backgroundColor: colors.tertiary,
              color: "#545454",
            }}
          >
            =
          </Button>
          <Search />
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button
            sx={{
              backgroundColor: colors.primary,
              marginRight: "300px",
              color: colors.tertiary,
            }}
          >
            + Add Post
          </Button>
          <Stack direction="row" spacing={2}>
            <Avatar
              alt="Remy Sharp"
              src="https://material-ui.com/static/images/avatar/1.jpg"
            />
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
