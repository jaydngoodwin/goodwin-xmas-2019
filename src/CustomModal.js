import React from 'react'
import styled from 'styled-components'
import Modal, { ModalProvider } from 'styled-react-modal'
import Sound from 'react-sound'
import ReactPlayer from 'react-player'
import { useStore } from './store';
import bj from './bj.jpg'
import ae from './ae.jpg'
import ms from './ms.jpg'
import j from './j.jpg'
import he from './he.jpg'
import std1 from './std1.jpg'
import std2 from './std2.jpg'
import aeAudio1 from './ae1.mp4'
import aeAudio2 from './ae2.mp4'
import aeAudio3 from './ae3.mp4'
import bVideo from './b.mp4'
import jVideo from './j.mov'

const SideBySide = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const ModalAnswer = styled.a`
    .answer {
        display: none;
    }

    &:hover {
        .show {
            display: none;
        }

        .answer {
            display: inline;
        }
    }
`

const ModalText = styled.h1`
    font-family: 'Solway', serif;
    color: #fff;
    text-align: center
`

const ModalPicture = styled.img`
    height: 50vh;
    display:block;
    border: 2px solid #fff;
`

const StyledModal = Modal.styled`
    height: 90vh;
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: 'rgba(255,255,255,0.5';
`

const CustomModal = () => {
    const { state, hideModal } = useStore()

    if (!state.modalType) {
        return null
    }

    let content;
    switch (state.modalType) {
        case "BJ":
            content =
                <React.Fragment>
                    <ModalPicture alt="Ben and Jake" src={bj}/>
                    <SideBySide>
                        <ReactPlayer url={bVideo}/>
                        <ReactPlayer url={jVideo}/>
                    </SideBySide>
                </React.Fragment>
                break
        case "AE":
            content =
                <React.Fragment>
                    <ModalPicture alt="Amy and Erin" src={ae}/>
                    <SideBySide>
                    <Sound
                        url={aeAudio1}
                        playStatus={Sound.status.PAUSED}
                        volume={75}
                    />
                    <Sound
                        url={aeAudio2}
                        playStatus={Sound.status.PAUSED}
                        volume={75}
                    />
                    <Sound
                        url={aeAudio3}
                        playStatus={Sound.status.PAUSED}
                        volume={75}
                    />
                    </SideBySide>
                </React.Fragment>
                break
        case "MS":
            content =
                <React.Fragment>
                    <ModalPicture alt="Matthew and Sophie" src={ms}/>
                    <SideBySide>
                        
                    </SideBySide>
                </React.Fragment>
                break
        case "J":
            content =
                <React.Fragment>
                    <ModalPicture alt="Jaydn" src={j}/>
                </React.Fragment>
                break
        case "STD":
            content =
                <React.Fragment>
                    <SideBySide>
                        <ModalPicture alt="Spot the difference 1" src={std1}/>
                        <ModalPicture alt="Spot the difference 2" src={std2}/>
                    </SideBySide>
                </React.Fragment>
                break
        case "HE":
            content =
            <React.Fragment>
                <ModalPicture alt="Hidden Elves" src={he}/>
            </React.Fragment>
            break
        case "TRIVIA":
            content = 
                <React.Fragment>
                    <ModalText>{state.trivia}</ModalText>
                </React.Fragment>
            break
        case "JOKE":
            content = 
                <React.Fragment>
                    <ModalText>{state.joke.joke}</ModalText>
                    <ModalText><ModalAnswer><span className="show">(Show Answer)</span><span className="answer">{state.joke.answer}</span></ModalAnswer></ModalText>
                </React.Fragment>
            break
        default:
            throw new Error(`Invalid modal type`)
    }

    return (
        <ModalProvider>
            <StyledModal
                isOpen={state.modalType}
                onBackgroundClick={hideModal}
                onEscapeKeydown={hideModal}>
                {content}
            </StyledModal>
        </ModalProvider>
    )
}

export default CustomModal