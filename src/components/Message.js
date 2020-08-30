import React from "react";
import { Message as SMessage } from "semantic-ui-react";

const Message = ({ children, isHidden }) => (
  <SMessage hidden={isHidden}>{children}</SMessage>
);

export default Message;
