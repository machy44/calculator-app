import React from "react";
import { Box, Flex, Button, Text, Checkbox } from "./components";

const App = () => {
  return (
    <Flex flexDirection="column" p={["xs", "sm", "md"]}>
      <Checkbox />
      <Box p="10px 20px">calculator</Box>
      <Button bg="green">
        <Text color="white">=</Text>
      </Button>
      <Button>+</Button>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button>{"("}</Button>
    </Flex>
  );
};

export default App;
