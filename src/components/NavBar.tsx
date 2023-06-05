import { AppBar, Avatar, Button, Input, Stack, Toolbar } from "@mui/material";
import { Hexagon } from "react-feather";

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
          <Button sx={{ backgroundColor: "red" }}></Button>
          <Input></Input>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button sx={{ backgroundColor: "red", marginRight:"300px" }}>+ Add Post</Button>
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
