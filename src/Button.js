import React from "react";
import { node } from "prop-types";

function Button({ children }) {
  return <Button type="button">{children}</Button>;
}

Button.propTypes = {
  children: node.isRequired,
};

export default Button;
