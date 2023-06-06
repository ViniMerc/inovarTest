import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Colors } from "../themes/Colors";
import { AlignJustify } from "react-feather";

export default function FilterButton() {
  return (
    <Box
      sx={{
        backgroundColor: Colors.tertiary,
        color: "#545454",
      }}
    >
      <FormControl fullWidth>
        <InputLabel placeholder="Filter"></InputLabel>
        <Select IconComponent={AlignJustify}>
          <MenuItem value={10}>Popularity</MenuItem>
          <MenuItem value={20}>Date</MenuItem>
          <MenuItem value={30}>Comments</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
