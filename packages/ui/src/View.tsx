import React from 'react'
import styled from 'styled-components'
import { Container } from './Container'
import { Text, Butotn } from '@monorepo/core'

export type ViewProps = {
  className?: string,
}

export const View: React.FC<ViewProps> = ({
  className,
  children
}) => {
  const handleClick = () => console.log('clicked!')

  return (
    <StyledView className={className}>
      <Container>
        <Text>
          Testing
        </Text>
        <Button onClick={handleClick}>Button 1</Button>
      </Container>
    </StyledView>
  )
}

const StyledView = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  margin: 0;
  padding: 0
`