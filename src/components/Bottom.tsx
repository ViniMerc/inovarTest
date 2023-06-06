import { Paper, Container, Typography, Box, Link } from "@mui/material";

export default function Bottom() {
  return (
    <Paper
      sx={{
        marginTop: "5px",
        width: "100%",
        position: "relative",
        bottom: 0,
        backgroundColor: "transparent",
      }}
      component="footer"
      square
      variant="outlined"
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my: 1,
          }}
        ></Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography variant="caption" color="initial">
           Footer
          </Typography>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Link sx={{ fontSize: "12px" }}>Footer</Link>|{" "}
          <Link sx={{ fontSize: "12px" }}>Footer</Link>
        </Box>
      </Container>
    </Paper>
  );
}
