const colors = {
  black: "0, 0, 0",
  white: "255, 255, 255",
  green: "52, 168, 83",
};

const opacity = {
  none: "0",
  subtler: "10%",
  subtle: "25%",
  medium: "50%",
  strong: "75%",
  stronger: "90%",
  solid: "100%",
};

const text = {
  s: {
    size: "0.875rem",
    height: "110%",
    weight: "400",
    spacing: "1%",
  },
  m: {
    size: "1rem",
    weight: "400",
    spacing: "0",
    height: "100%",
  },
  l: {
    size: "1,125rem",
    weight: "700",
    spacing: "-1%",
    height: "95%",
  },
  xl: {
    size: "3rem",
    weight: "900",
    spacing: "-2%",
    height: "90%",
  },
};

const radius = {
  none: "0",
  subtle: "2px",
  medium: "4px",
  pill: "1rem",
  strong: "27px",
  circle: "50%",
};

const highlights = {
  s: {
    size: "0.875rem",
  },
  m: {
    size: "1rem",
  },
  l: {
    size: "1,125rem",
  },
  xl: {
    size: "3rem",
  },
};
const spacing = {
  xs: "0.25rem",
  s: "0.5rem",
  m: "1rem",
  l: "2rem",
  xl: "4rem",
  xxl: "8rem",
};

export const images = {
  xs: "0.875rem",
  s: "4rem",
  m: "8rem",
  l: "13rem",
};

export const tokens = {
  spacing,
  images,
  text,
  opacity,
  colors,
  radius,
  highlights,
};

export default tokens;