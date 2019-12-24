export type Themes = {
  colors: {
    primary: string;
    background: string;
  }
};

export const darkTheme: Themes = {
  colors: {
    primary: '#FFF',
    background: '#000',
  },
};

export const whiteTheme: Themes = {
  colors: {
    primary: '#000',
    background: '#FFF',
  },
};

export const themes = {
  dark: darkTheme,
  white: whiteTheme,
};
