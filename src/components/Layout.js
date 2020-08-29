import styled from "@emotion/styled";
import { space, flexbox, grid, layout, border, color } from "styled-system";

export const Box = styled.div`
  ${space};
  ${color};
  ${flexbox};
  ${layout};
  ${border}
`;

export const Flex = styled(Box)({
  display: "flex",
});

export const Grid = styled.div`
  display: grid;
  ${space};
  ${grid};
`;
