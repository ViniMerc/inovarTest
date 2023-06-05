import { Input } from "@mui/material";
import { colors } from "../themes/colors";

export default function Search() {
  return (
    <Input
      placeholder="&#128269;"
      sx={{ backgroundColor: colors.secondary, borderRadius: 1 }}
    ></Input>
  );
}
