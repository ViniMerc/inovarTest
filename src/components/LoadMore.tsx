import { Button } from "@mui/material";
import { Colors } from "../themes/Colors";

export default function LoadMore () {
  return (
<Button  
sx={{
    width: "100%",
    height: "50px",
    borderRadius: "0px",
    backgroundColor: Colors.quaternary,
    color: Colors.primary,
    textTransform: "none",
    fontSize: "18px",
    fontWeight: "bold",
    fontFamily: "Roboto",
    marginTop: "10px",
    marginBottom: 0,
    boxShadow: "0px 0.2px 0px 0px #000000",
    }}
    variant="contained"
    >
Load more    </Button>

  )
} 