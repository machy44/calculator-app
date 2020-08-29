import styled from "@emotion/styled";
import { Input as SInput } from "semantic-ui-react";

const Input = styled(SInput)({
  "&  > input": {
    backgroundColor: "#F5F5F5 !important",
    borderRadius: " 0 !important",
    borderLeft: "none !important",
    borderRight: "none !important",
  },
});

export default Input;
