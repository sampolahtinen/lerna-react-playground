import React from "react";

export type TextProps = {
  className?: string;
};

export const Text: React.FC<TextProps> = ({ className, children }) => (
  <span className={className}>{children}</span>
);
