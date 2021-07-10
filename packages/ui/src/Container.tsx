import React from 'react'
import styled from 'styled-components'

export type ViewProps = {
  className?: string,
}

export const View: React.FC<ViewProps> = ({
  className,
  children
}) => (
  <StyledView className={className}>
    {children}
  </StyledView>
)

const StyledView = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  margin: 0;
  padding: 0
`