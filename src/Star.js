import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useStore } from './store'
import starSvg from './icons/star.svg'

const shake = keyframes`
10%, 90% { transform: translate3d(-1px, 0, 0); }
20%, 80% { transform: translate3d(2px, 0, 0); }
30%, 50%, 70% { transform: translate3d(-3px, 0, 0); }
40%, 60% { transform: translate3d(3px, 0, 0); }
`

const StarImage = styled.img`
  height: 15%;
  width: auto;
  position: absolute;
  top: -7.5%;
  left: 42.5%;

  &:hover {
    animation: ${shake} 1s ease-out both;
  }
`

const Star = () => {
  const { showUniqueModal } = useStore()

  return (
    <StarImage src={starSvg} onClick={() => showUniqueModal("STAR")}/>
  )
}

const StyledStar = styled(Star)`
  height: 15%;
  width: auto;
  position: absolute;
  top: -7.5%;
  left: 42.5%;

  &:hover {
    animation: ${shake} 1s ease-out both;
  }
`



export {StyledStar}