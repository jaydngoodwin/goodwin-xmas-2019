import styled, { keyframes } from 'styled-components'

const fall = keyframes`
  100% { transform: translateY(200vh); }
`

const Background = styled.div`
  border-radius: 50%;
  opacity: 0.8;
  position: absolute;
  top:-100vh;

  &:hover {
    animation: ${fall} linear infinite;
  }
`

export default Background