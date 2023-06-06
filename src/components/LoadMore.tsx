import { Button } from "@mui/material";
import { Colors } from "../themes/Colors";
import { Loader } from "react-feather";

export default function LoadMore() {
  return (
    <Button
      sx={{
        width: "80%",
        height: "50px",
        borderRadius: "0px",
        backgroundColor: Colors.quaternary,
        color: Colors.primary,
        textTransform: "none",
        fontSize: "18px",
        fontWeight: "bold",
        marginTop: "10px",
        marginBottom: 0,
        boxShadow: "0px 0.2px 0px 0px #000000",
      }}
      variant="contained"
    >
      <Loader></Loader>
      Load more
    </Button>
  );
}
