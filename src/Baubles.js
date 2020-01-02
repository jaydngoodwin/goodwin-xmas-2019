import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components'
import { baubleSvgs, baublePositions, uniqueModalTypes, gtys, trivia, jokes } from './constants'
import { useStore } from './store'

const swing = keyframes`
  50% { transform: rotate(3deg)}
  100% { transform: rotate(-3deg); }
`

const BaubleImage = styled.img`
  height: 8%;
  width: auto;
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};

  &:hover {
    animation: ${swing} ease-in-out 1s infinite alternate;
    transform-origin: top;
  }
`

const Bauble = (props) => {
    const { showUniqueModal, showGTYModal, showTriviaModal, showJokeModal } = useStore()

    return (
        <BaubleImage src={props.image} {...props.position} onClick={() => {
            switch (props.modalType) {
                case "BJ":
                case "AE":
                case "MS":
                case "J":
                case "STD":
                case "HE":
                    showUniqueModal(props.modalType)
                    break
                case "GTY":
                    showGTYModal(props.gty)
                    break
                case "TRIVIA":
                    showTriviaModal(props.trivia)
                    break
                case "JOKE":
                    showJokeModal(props.joke)
                    break
                default:
                    throw new Error(`Invalid modal type`)
            }
        }}/>
    )
}

const Baubles = () => {
    const [baubles, setBaubles] = useState([])
    useEffect(() => {
        setBaubles(
            uniqueModalTypes.concat(Array(3).fill("GTY")).concat(Array(3).fill("TRIVIA")).concat(Array(3).fill("JOKE")).map((modalType, i) => (
                <Bauble 
                    key={i}
                    image={baubleSvgs[Math.floor(Math.random()*baubleSvgs.length)]}
                    position={baublePositions.splice(Math.floor(Math.random()*baublePositions.length), 1)[0]}
                    modalType={modalType}
                    gty={modalType === "GTY" ? gtys.splice(Math.floor(Math.random()*gtys.length), 1)[0] : ''}
                    trivia={modalType === "TRIVIA" ? trivia.splice(Math.floor(Math.random()*trivia.length), 1)[0] : ''}
                    joke={modalType === "JOKE" ? jokes.splice(Math.floor(Math.random()*jokes.length), 1)[0] : {}}
                />
            ))
        )
    }, [])

    return (
        <React.Fragment>
            {baubles}
        </React.Fragment>
    )
}

export default Baubles