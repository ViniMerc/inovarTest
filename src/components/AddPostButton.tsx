import { Button, ButtonGroup } from "@mui/material";
import { Colors } from "../themes/Colors";

export default function AddPostButton() {
  return (
    <ButtonGroup variant="contained">
      <Button
        sx={{
          backgroundColor: Colors.primary,
          color: Colors.tertiary,
        }}
      >
        +
      </Button>
      <Button
        sx={{
          backgroundColor: Colors.primary,

          color: Colors.tertiary,
        }}
      >
        Add Post
      </Button>
    </ButtonGroup>
  );
}
