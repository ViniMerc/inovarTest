export const CategoryColors = (category: string) => {
  switch (category) {
    case "ux_ui":
      return "#09BAFB";
    case "case_study":
      return "#F4973C";
    case "product_design":
      return "#50E3AD";
    case "discussion":
      return "#4271D6";
    default:
      return "#CCCCCC";
  }
};
