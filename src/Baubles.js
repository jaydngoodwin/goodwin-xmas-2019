import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components'
import { baublePositions, modalTypes, trivia, jokes } from './constants'
import { useStore } from './store';

const importAll = (r) => {
    return r.keys().map(r)
}
  
const baubleSvgs = importAll(require.context('./icons/baubles', false, /\.(svg)$/))

const swing = keyframes`
  25% { transform: rotate(3deg)}
  75% { transform: rotate(-3deg); }
`

const BaubleImage = styled.img`
  height: 8%;
  width: auto;
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};

  &:hover {
    animation: ${swing} ease-in-out 1s infinite normal;
    transform-origin: top;
  }
`

const Bauble = (props) => {
    const { showUniqueModal, showTriviaModal, showJokeModal } = useStore()

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
            modalTypes.concat(Array(3).fill("TRIVIA")).concat(Array(3).fill("JOKE")).map((modalType, i) => (
                <Bauble 
                    key={i}
                    image={baubleSvgs[Math.floor(Math.random()*baubleSvgs.length)]}
                    position={baublePositions.splice(Math.floor(Math.random()*baublePositions.length), 1)[0]}
                    modalType={modalType}
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