// NavBar.tsx
import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";
import { ColorModeButton } from "./ui/color-mode"; // Import ColorModeButton

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="4">
      {" "}
      {/* Add padding and justify content */}
      <HStack>
        <Image src={logo} boxSize="60px" />
        <Text>Nav Bar</Text>
      </HStack>
      <ColorModeButton /> {/* Add the color mode button here */}
    </HStack>
  );
};

export default NavBar;
