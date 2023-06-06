export const FormattedCategory = (category: string) => {
    switch (category) {
      case 'ux_ui':
        return 'UX Theory';
      case 'case_study':
        return 'Case Study';
      case 'product_design':
        return 'Product Design';
      case 'discussion':
        return 'Opinion';
      default:
        return category;
    }
  };
  