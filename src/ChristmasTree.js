import React from 'react'
import styled from 'styled-components'
import { StyledStar as Star } from './Star'
import Baubles from './Baubles'
import Tree from './icons/tree.svg'

const TreeContainer = styled.div`
  height: 80vh;
  width: auto;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%)
`

const StyledTree = styled.img`
  height: 100%;
  width: auto;
`

const ChristmasTree = () => {
    return (
        <TreeContainer>
          <StyledTree alt="Christmas Tree" src={Tree}/>
          <Star/>
          <Baubles/>
        </TreeContainer>
    )
}

export { ChristmasTree }