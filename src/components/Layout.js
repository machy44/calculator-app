import styled from "@emotion/styled";
import { space, flexbox } from "styled-system";

export const Box = styled.div`
  ${space};
  ${flexbox};
  border: 1px solid red;
`;

export const Flex = styled(Box)({
  display: "flex",
  outline: "1px solid blue",
});

export const Grid = styled.div``;
