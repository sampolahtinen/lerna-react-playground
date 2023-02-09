// import { colors } from 'sampolahtinen/tokens'
import React from "react";

export type TextProps = {
  className?: string;
};

export const Title: React.FC<TextProps> = ({ className, children }) => (
  <span style={{ color: VideoColorSpace.}} className={className}>{children}</span>
);
