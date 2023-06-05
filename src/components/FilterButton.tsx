import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { colors } from '../themes/colors';

export default function FilterButton() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box   sx={{
        backgroundColor: colors.tertiary,
        color: "#545454",
      }}>
      <FormControl fullWidth>
        <InputLabel></InputLabel>
        <Select
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>Popularity</MenuItem>
          <MenuItem value={20}>Date</MenuItem>
          <MenuItem value={30}>Comments</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}