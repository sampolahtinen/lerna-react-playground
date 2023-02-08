import React from "react";

export type TextProps = {
  className?: string;
};

export const Tag: React.FC<TextProps> = ({ className, children }) => (
  <span className={className}>{children}</span>
);
