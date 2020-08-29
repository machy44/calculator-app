import React from "react";
import { Checkbox as SemanticCheckbox } from "semantic-ui-react";
import styled from "@emotion/styled";

const Toggle = styled((props) => <SemanticCheckbox {...props} toggle />)({});


export default Toggle;
