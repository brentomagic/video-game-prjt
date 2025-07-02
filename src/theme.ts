import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

// Define your custom theme configuration
const customThemeConfig = defineConfig({
  theme: {
    semanticTokens: {
      colors: {
        "chakra-body-text": {
          value: { _light: "gray.800", _dark: "gray.200" }, // Lighter gray for text in dark mode
        },
        "chakra-body-bg": {
          value: { _light: "white", _dark: "gray.700" }, // Changed to gray.700 for a darker grey in dark mode
        },
        primary: {
          default: { value: { _light: "blue.500", _dark: "blue.300" } },
        },
        secondary: {
          default: { value: { _light: "green.500", _dark: "green.300" } },
        },
      },
    },
  },
});

// Create the system by merging default config with your custom config
export const theme = createSystem(defaultConfig, customThemeConfig);
