import { TextField } from "@mui/material";
import { Colors } from "../themes/Colors";

export default function Search() {
  return (
    <TextField
      sx={{ backgroundColor: Colors.secondary, borderRadius: 1, width: 300  ,
        border: "none", outline: "none",
      }}
      placeholder="&#128269;"
      type="text"
    ></TextField>
  );
}
