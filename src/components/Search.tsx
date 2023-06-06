import { Input } from "@mui/material";
import { Colors } from "../themes/Colors";

export default function Search() {
  return (
    <Input
      sx={{ backgroundColor: Colors.secondary, borderRadius: 1, width: 300,
      
      }}
      placeholder="&#128269;"
      type="text"
    ></Input>
  );
}
