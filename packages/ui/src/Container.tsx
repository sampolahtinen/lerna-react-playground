import React from 'react'
import styled from 'styled-components'

export type ContainerProps = {
  className?: string,
}

export const Container: React.FC<ContainerProps> = ({
  className,
  children
}) => (
  <StyledContainer className={className}>
    {children}
  </StyledContainer>
)

const StyledContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  background: #00000059;
  width: 500px;
  min-height: 500px;
  padding: 32px;
`