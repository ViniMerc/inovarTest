import { Hexagon } from "react-feather";
import { Colors } from "../themes/Colors";

export default function HexagonIcon() {
  return (
    <Hexagon
      size={48}
      fill={Colors.primary}
      color={Colors.primary}
      style={{ marginLeft: "300px" }}
    />
  );
}
