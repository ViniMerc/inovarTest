import { Button, ButtonGroup } from "@mui/material";
import { colors } from "../themes/colors";

export default function AddPostButton() {
  return (
    <ButtonGroup variant="contained">
      <Button
        sx={{
          backgroundColor: colors.primary,
          color: colors.tertiary,
          

        }}
      >
        +
      </Button>
      <Button
        sx={{
          backgroundColor: colors.primary,
        
          color: colors.tertiary,
        }}
      >
        {" "}
        Add Post
      </Button>
    </ButtonGroup>
  );
}
