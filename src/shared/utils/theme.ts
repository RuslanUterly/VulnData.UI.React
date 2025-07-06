import {createTheme} from "@mantine/core";
import {IconMoon, IconSun} from "@tabler/icons-react";

export const theme = createTheme({
  other: {
    icons: {
      theme: {
        light: IconSun,
        dark: IconMoon,
      },
    },
  },
  colors: {
    brand: [
      '#fde8e8',
      '#facdcd',
      '#f29b9b',
      '#ea6a6a',
      '#e23939',
      '#bc2828', // - (primary)
      '#a22222',
      '#8a1d1d',
      '#731818',
      '#5c1212',
    ],
  },

  primaryColor: 'brand',
});