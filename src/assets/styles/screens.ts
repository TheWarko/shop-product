const breakpoints = {
  xsmall: "480px", // Mobile
  small: "768px", // Tablet
  medium: "1024px", // Laptop
  large: "1200px", // Desktop
};

export const screens = {
  xsmall: `(max-width: ${breakpoints.xsmall})`,
  small: `(min-width: ${breakpoints.xsmall})`,
  medium: `(min-width: ${breakpoints.small})`,
  large: `(min-width: ${breakpoints.medium})`,
  xlarge: `(min-width: ${breakpoints.large})`,
};
