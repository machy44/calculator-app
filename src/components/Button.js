import styled from "@emotion/styled";
import { color } from "styled-system";
import PropTypes from "prop-types";

const Button = styled.button`
  ${color}
`;

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
