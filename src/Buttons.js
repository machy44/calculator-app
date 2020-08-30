import React from "react";
import { Button, Text, Grid } from "./components";
// import { uniqueId } from "lodash.uniqueid";
import styled from "@emotion/styled";

const Span2ColumnsButton = styled(Button)({
  gridColumn: "span 2",
});

const CalcButtons = ({
  handleEqual,
  handleKey,
  handleCursor,
  handleDelKey,
  handleResetKey,
}) => {
  return (
    <Grid
      mt="10px"
      gridTemplateColumns="repeat(6, 1fr)"
      gridRowGap={["4px", "6px", "8px"]}
      gridColumnGap={["4px", "6px", "8px"]}
    >
      <Button basic color="black" key={0} onClick={() => handleKey(7)}>
        <Text color="black">7</Text>
      </Button>
      <Button basic color="black" key={1} onClick={() => handleKey(8)}>
        <Text color="black">8</Text>
      </Button>
      <Button basic color="black" key={2} onClick={() => handleKey(9)}>
        <Text color="black">9</Text>
      </Button>
      <Button basic color="black" key={3} onClick={() => handleKey("/")}>
        <Text color="black">&divide;</Text>
      </Button>
      <Button basic color="black" key={4} onClick={handleDelKey}>
        <Text color="black">Del</Text>
      </Button>
      <Button basic color="black" key={5} onClick={handleResetKey}>
        <Text color="black">C</Text>
      </Button>
      <Button basic color="black" key={6} onClick={() => handleKey(4)}>
        <Text color="black">4</Text>
      </Button>
      <Button basic color="black" key={7} onClick={() => handleKey(5)}>
        <Text color="black">5</Text>
      </Button>
      <Button basic color="black" key={8} onClick={() => handleKey(6)}>
        <Text color="black">6</Text>
      </Button>
      <Button basic color="black" key={9} onClick={() => handleKey("*")}>
        <Text color="black">&times;</Text>
      </Button>
      <Button basic color="black" key={10} onClick={(e) => handleCursor(e, "minus")}>
        <Text color="black">&#8592;</Text>
      </Button>
      <Button basic color="black" key={11} onClick= {(e) => handleCursor(e, "plus")}>
        <Text color="black">&#8594;</Text>
      </Button>
      <Button basic color="black" key={12} onClick={() => handleKey(1)}>
        <Text color="black">1</Text>
      </Button>
      <Button basic color="black" key={13} onClick={() => handleKey(2)}>
        <Text color="black">2</Text>
      </Button>
      <Button basic color="black" key={14} onClick={() => handleKey(3)}>
        <Text color="black">3</Text>
      </Button>
      <Button basic color="black" key={15} onClick={() => handleKey("-")}>
        <Text color="black">-</Text>
      </Button>
      <Button basic color="black" key={16} onClick={() => handleKey("(")}>
        <Text color="black">(</Text>
      </Button>
      <Button basic color="black" key={17} onClick={() => handleKey(")")}>
        <Text color="black">)</Text>
      </Button>
      <Span2ColumnsButton basic color="black" key={18} onClick={() => handleKey(0)}>
        <Text color="black">0</Text>
      </Span2ColumnsButton>
      <Button basic color="black" key={19} onClick={() => handleKey(".")}>
        <Text color="black">.</Text>
      </Button>
      <Button basic color="black" key={20} onClick={() => handleKey("+")}>
        <Text color="black">+</Text>
      </Button>
      <Span2ColumnsButton color="green" key={21} onClick={handleEqual}>
        <Text color="white">=</Text>
      </Span2ColumnsButton>
    </Grid>
  );
};

export default CalcButtons;
