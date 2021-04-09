import React from "react";
import { node } from "prop-types";

function Button({ children, ...props }) {
  return (
    <Button type="button" {...props}>
      {children}
    </Button>
  );
}

Button.propTypes = {
  children: node.isRequired,
};

export default Button;
