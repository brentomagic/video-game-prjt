// theme.ts
import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

// Define your custom theme configuration
const customThemeConfig = defineConfig({
  theme: {
    // You can define semantic tokens here for colors that adapt to light/dark mode
    semanticTokens: {
      colors: {
        "chakra-body-text": {
          // Wrap the string values in a 'value' object
          value: { _light: "gray.800", _dark: "gray.50" },
        },
        "chakra-body-bg": {
          // Wrap the string values in a 'value' object
          value: { _light: "white", _dark: "gray.800" },
        },
        // Example for custom colors that adapt
        primary: {
          default: { value: { _light: "blue.500", _dark: "blue.300" } },
        },
        secondary: {
          default: { value: { _light: "green.500", _dark: "green.300" } },
        },
      },
    },
    // Other theme configurations can go here
  },
});

// Create the system by merging default config with your custom config
export const theme = createSystem(defaultConfig, customThemeConfig);
