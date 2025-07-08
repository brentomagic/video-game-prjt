import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { useColorModeValue } from "./components/ui/color-mode"; // Import useColorModeValue
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  // const asideBg = useColorModeValue("gold", "purple.900"); // Example dark mode color
  // const mainBg = useColorModeValue("lightgreen", "teal.900"); // Example dark mode color
  const gridBg = useColorModeValue("chakra-body-bg", "chakra-body-bg"); // Use semantic token for grid background

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      bg={gridBg} // Apply the semantic background color to the entire grid
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem
        area="aside"
        bg={gridBg}
        display={{ base: "none", lg: "block" }}
      >
        <GenreList />
      </GridItem>
      <GridItem area="main" bg={gridBg}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
