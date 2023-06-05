import { Input } from "@mui/material";
import { colors } from "../themes/colors";

export default function Search() {
  return (
    <Input
      sx={{ backgroundColor: colors.secondary, borderRadius: 1, width: 300,
      
      }}
      placeholder="&#128269;"
      type="text"
    ></Input>
  );
}
