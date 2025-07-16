// NavBar.tsx
import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";
import { ColorModeButton } from "./ui/color-mode"; // Import ColorModeButton
import SearchInput from "./SearchInput";
import type { Props } from "./SearchInput";

// const NavBar = () => {
//   return (
//     <HStack justifyContent="space-between" padding="4">
//       {" "}
//       {/* Add padding and justify content */}
//       <HStack>
//         <Image src={logo} boxSize="60px" />
//         <Text>Nav Bar</Text>
//       </HStack>
//       <ColorModeButton /> {/* Add the color mode button here */}
//     </HStack>
//   );
// };

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
