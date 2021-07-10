import React from 'react'
import styled from 'styled-components'

export type TextProps = {
  className?: string,
}

export const Text: React.FC<TextProps> = ({
  className,
  children
}) => (
  <StyledSpan className={className}>
    {children}
  </StyledSpan>
)

const StyledSpan = styled.span`
  color: red;
  font-size: 20px;
`