import React from 'react'

export type ButtonProps = {
  onClick: () => void,
  className?: string,
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  className,
  children
}) => (
  <button onClick={onClick} className={className}>
    {children}
  </button>
)