import "styled-components";
import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: { [key in keyof typeof themeColors]: string };
    fontTypes: { [key in keyof typeof fontTypes]: any };
    fontFamily: string;
    mediaQueries: { [key in keyof typeof mediaQueries]: string };
    spacing: (x: number) => number;
  }
}

export const themeColors = {
  black: "#212121",
  blackRaisin: "#211F20",

  darkBlue: "#02224b",
  blue: "#2a26b6",
  lightBlue: "#03afb2",
  orange: "#ef6400",
  purple: "#693df8",
  yellow: "#F8F8B9",
  white: "#f2f2f2",

  background: "#1d343c",
  chat1: "#d85249"
};

const genericFontType = {
  fontFamily: "Source Sans Pro",
};

export const fontTypes = {
  heroBanner: {
    ...genericFontType,
    fontSize: 100,
    fontWeight: 600,
    lineHeight: "126px",
  },
  title: {
    ...genericFontType,
    fontSize: 40,
    fontWeight: 900,
    lineHeight: 1,
  },
  underTitle: {
    ...genericFontType,
    fontSize: 20,
    lineHeight: "30px",
    fontWeight: 900,
  },
  headline1: {
    ...genericFontType,
    fontWeight: 900,
    fontSize: 20,
    lineHeight: "30px",
  },
  body: {
    ...genericFontType,
    fontSize: 16,
    fontWeight: 450,
    lineHeight: "30px",
  },
  body2: {
    ...genericFontType,
    fontSize: 20,
    fontWeight: 450,
    lineHeight: "30px",
  },
  quotation: {
    ...genericFontType,
    fontSize: 14,
    fontWeight: 450,
    lineHeight: "30px",
    fontStyle: "italic",
  },
  caption: {
    ...genericFontType,
    fontSize: 13,
    fontWeight: 500,
    lineHeight: "16px",
  },
  captionTitle: {
    ...genericFontType,
    fontSize: 30,
    fontWeight: 500,
    lineHeight: "38px",
  },
  button: {
    ...genericFontType,
    fontSize: 20,
    lineHeight: 1,
  },
};

export const gridConfig = {
  breakpoints: {
    xl: 1920,
    lg: 1280,
    md: 980,
    sm: 736,
    xs: 480,
  },
  row: {
    padding: 7,
  },
  col: {
    padding: 7,
  },
  container: {
    padding: 7,
    maxWidth: {
      xl: 1280,
      lg: 1280,
      md: 980,
      sm: 736,
      xs: 480,
    },
  },
};

export const mediaQueries = {
  xs: `(max-width: ${gridConfig.breakpoints.xs}px)`,
  sm: `(max-width: ${gridConfig.breakpoints.sm}px)`,
  md: `(max-width: ${gridConfig.breakpoints.md}px)`,
  lg: `(max-width: ${gridConfig.breakpoints.lg}px)`,
  xl: `(max-width: ${gridConfig.breakpoints.xl}px)`,
  smUp: `(min-width: ${gridConfig.breakpoints.sm}px)`,
  mdUp: `(min-width: ${gridConfig.breakpoints.md}px)`,
  lgUp: `(min-width: ${gridConfig.breakpoints.lg}px)`,
  xlUp: `(min-width: ${gridConfig.breakpoints.xl}px)`,
};

const theme: DefaultTheme = {
  fontTypes,
  mediaQueries,
  colors: themeColors,
  fontFamily: "Open Sans",
  spacing: (number) => number * 7,
};

export default theme;
