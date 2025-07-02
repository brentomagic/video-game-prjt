"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";
import { theme } from "@/theme"; // Import your custom theme from theme.ts

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={theme}>
      {" "}
      {/* Change defaultSystem to your imported theme */}
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
