// App.tsx
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { useColorModeValue } from "./components/ui/color-mode"; // Import useColorModeValue

function App() {
  const asideBg = useColorModeValue("gold", "purple.900"); // Example dark mode color
  const mainBg = useColorModeValue("lightgreen", "teal.900"); // Example dark mode color

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      // You might want to set a default background for the entire grid here
      // bg={useColorModeValue("gray.50", "gray.900")} // Example for overall app background
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem
        area="aside"
        bg={asideBg}
        display={{ base: "none", lg: "block" }}
      >
        Aside
      </GridItem>
      <GridItem area="main" bg={mainBg}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
