import styled from "@emotion/styled";
import {
  space,
  flexbox,
  grid,
  layout,
  border,
  color,
  position,
} from "styled-system";

export const Box = styled.div`
  ${space};
  ${color};
  ${flexbox};
  ${layout};
  ${border};
  ${position};
`;

export const Flex = styled(Box)({
  display: "flex",
});

export const Grid = styled.div`
  display: grid;
  ${space};
  ${grid};
`;
