import { AppBar, Avatar, Box, Button, Input, Paper } from "@mui/material";
import { Hexagon } from "react-feather";

export default function NavBar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        height: 100,
        width: "100%",
        padding: 0,
        margin: 0,
      }}
    >
      <Paper sx={{ boxShadow: "none" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            height: "100%",
            padding: "0 10px",
          }}
        >
          <Hexagon size={24} color="orange" style={{ marginRight: "5px" }} />
          <Button sx={{ backgroundColor: "red" }}></Button>
          <Input></Input>
          <Button sx={{ backgroundColor: "red" }}>+ Add Post</Button>
          <Avatar></Avatar>
        </Box>
      </Paper>
    </AppBar>
  );
}
