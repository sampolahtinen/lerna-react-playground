import React from "react";

export type TextProps = {
  className?: string;
};

export const Accordion: React.FC<TextProps> = ({ className, children }) => (
  <span className={className}>{children}</span>
);
