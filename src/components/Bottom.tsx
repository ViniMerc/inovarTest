import { AppBar, Stack, Toolbar, Typography } from "@mui/material";

import HexagonIcon from "./HexagonIcon";

export default function Bottom() {
  return (
    <AppBar
      sx={{
        height: 40,
        mt: 2,
        mb: 4,
        boxShadow: "none",
        backgroundColor: "transparent",
        position: "static",
        maxWidth: "80%",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Stack direction="row" spacing={2}>
          <HexagonIcon />
          <Stack direction="column" spacing={2}>
            <Typography color={"black"}>The Ux Library</Typography>
            <Typography color={"grey"}>
              Community curated design content & discussion
            </Typography>
          </Stack>
        </Stack>

        <Stack direction="row" spacing={2}>
          <Typography color={"grey"}>Facebook</Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
