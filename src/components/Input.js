import React from "react";
import styled from "@emotion/styled";
import { Input as SInput } from "semantic-ui-react";

const Input = styled(
  React.forwardRef((props, ref) => <SInput {...props} ref={ref} />)
)({
  "&  > input": {
    backgroundColor: "#F5F5F5 !important",
    borderRadius: " 0 !important",
    borderLeft: "none !important",
    borderRight: "none !important",
    fontFamily: "inherit !important",
  },
});

export default Input;
