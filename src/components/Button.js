import styled from "@emotion/styled";
import { color } from "styled-system";
import PropTypes from "prop-types";
import { Button as SemanticButton } from "semantic-ui-react";

const Button = styled(SemanticButton)(color);

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
