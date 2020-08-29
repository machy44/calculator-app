import React from "react";
import { Button, Text, Grid } from "./components";
import styled from "@emotion/styled";

const Span2ColumnsButton = styled(Button)({
  gridColumn: "span 2",
});

const CalcButtons = () => {
  return (
    <Grid
      mt="10px"
      gridTemplateColumns="repeat(6, 1fr)"
      gridRowGap={["4px", "6px", "8px"]}
      gridColumnGap={["4px", "6px", "8px"]}
    >
      <Button basic color="black" key={5}>
        <Text color="black">7</Text>
      </Button>
      <Button basic color="black" key={6}>
        <Text color="black">8</Text>
      </Button>
      <Button basic color="black" key={7}>
        <Text color="black">9</Text>
      </Button>
      <Button basic color="black" key={8}>
        <Text color="black">&divide;</Text>
      </Button>
      <Button basic color="black" key={2}>
        <Text color="black">Del</Text>
      </Button>
      <Button basic color="black" key={2}>
        <Text color="black">C</Text>
      </Button>
      <Button basic color="black" key={9}>
        <Text color="black">4</Text>
      </Button>
      <Button basic color="black" key={10}>
        <Text color="black">5</Text>
      </Button>
      <Button basic color="black" key={11}>
        <Text color="black">6</Text>
      </Button>
      <Button basic color="black" key={12}>
        <Text color="black">&times;</Text>
      </Button>
      <Button basic color="black" key={0}>
        <Text color="black">&#8592;</Text>
      </Button>
      <Button basic color="black" key={1}>
        <Text color="black">&#8594;</Text>
      </Button>
      <Button basic color="black" key={13}>
        <Text color="black">1</Text>
      </Button>
      <Button basic color="black" key={14}>
        <Text color="black">2</Text>
      </Button>
      <Button basic color="black" key={15}>
        <Text color="black">3</Text>
      </Button>
      <Button basic color="black" key={16}>
        <Text color="black">-</Text>
      </Button>

      <Button basic color="black" key={3}>
        <Text color="black">(</Text>
      </Button>
      <Button basic color="black" key={4}>
        <Text color="black">)</Text>
      </Button>
      <Span2ColumnsButton basic color="black" key={17}>
        <Text color="black">0</Text>
      </Span2ColumnsButton>
      <Button basic color="black" key={8}>
        <Text color="black">.</Text>
      </Button>
      <Button basic color="black" key={20}>
        <Text color="black">+</Text>
      </Button>
      <Span2ColumnsButton
        color="green"
        key={19}
      >
        <Text color="white">=</Text>
      </Span2ColumnsButton>
    </Grid>
  );
};

export default CalcButtons;
