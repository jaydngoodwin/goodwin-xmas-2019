import React from 'react'
import styled from 'styled-components'
import Modal, { ModalProvider } from 'styled-react-modal'
import { useStore } from './store';
import close from './close.svg'
import bj from './media/bj.jpg'
import ae from './media/ae.jpg'
import ms from './media/ms.jpg'
import j from './media/j.jpg'
import he from './media/he.jpg'
import he1 from './media/he1.jpg'
import he2 from './media/he2.jpg'
import he3 from './media/he3.jpg'
import he4 from './media/he4.jpg'
import he5 from './media/he5.jpg'
import he6 from './media/he6.jpg'
import he7 from './media/he7.jpg'
import std1 from './media/std1.jpg'
import std2 from './media/std2.jpg'
import aeAudio1 from './media/ae1.mp4'
import aeAudio2 from './media/ae2.mp4'
import bVideo from './media/b.mp4'
import jVideo from './media/j.mov'
import mVideo from './media/m.mp4'
import sVideo from './media/s.mp4'
import starVideo from './media/star.mp4'

const PaddedDiv = styled.div`
    padding: 10px;
`

const SideBySide = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`

const ModalGTYOption = styled.a`
    .answer {
        display: none;
    }

    &:active {
        .show {
            display: none;
        }

        .answer {
            display: inline;
        }
    }
`

const ModalJokeAnswer = styled.a`
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

const SmallModalText = styled(ModalText)`
    font-size: 1em
`

const ModalPicture = styled.img`
    width: 600px;
    display: block;
    border: 5px solid #fff;
    margin: 10px;
`

const SmallModalPicture = styled(ModalPicture)`
    width: 50px;
`

const BigModalPicture = styled(ModalPicture)`
    width: 800px;
`

const ModalCloseButton = styled.img`
    position: absolute;
    width: 10px;
    top: 10px;
    right: 10px;
`

const ModalVideo = styled.video`
    width: 600px;
    border: 5px solid #fff;
`

const ModalContent = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const StyledModal = Modal.styled`
    max-height: 90vh;
    max-width: 90vw;
    position: fixed;
    overflow: auto;
    background-color: rgba(132, 189, 90, 0.8);
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
`

const CustomModal = () => {
    const { state, hideModal, startMusic, pauseMusic, quietenMusic, loudenMusic } = useStore()

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
                        <PaddedDiv>
                            <ModalText>Ben</ModalText>
                            {/* <ReactPlayer width={"40vw"} url={bVideo} loop={true} playing muted/> */}
                            <ModalVideo controls src={bVideo} onPlay={quietenMusic} onPause={loudenMusic} onEnded={loudenMusic}/>
                        </PaddedDiv>
                        <PaddedDiv>
                            <ModalText>Jake</ModalText>
                            {/* <ReactPlayer width={"40vw"} url={jVideo} loop={true} playing muted/> */}
                            <ModalVideo controls src={jVideo} onPlay={pauseMusic} onPause={startMusic} onEnded={startMusic}/>
                        </PaddedDiv>
                    </SideBySide>
                </React.Fragment>
                break
        case "AE":
            content =
                <React.Fragment>
                    <ModalPicture alt="Amy and Erin" src={ae}/>
                    <ModalText>'O Holy Night' by Amy</ModalText>
                    <audio controls src={aeAudio1} onPlay={pauseMusic} onPause={startMusic} onEnded={startMusic}/>
                    <ModalText>'Walking in the Air' by Amy & Erin</ModalText>
                    <audio controls src={aeAudio2} onPlay={pauseMusic} onPause={startMusic} onEnded={startMusic}/>
                </React.Fragment>
                break
        case "MS":
            content =
                <React.Fragment>
                    <ModalPicture alt="Matthew and Sophie" src={ms}/>
                    <SideBySide>
                        <PaddedDiv>
                            <ModalText>Matthew</ModalText>
                            {/* <ReactPlayer width={"40vw"} url={mVideo} loop={true} playing muted/> */}
                            <ModalVideo controls src={mVideo} onPlay={quietenMusic} onPause={loudenMusic} onEnded={loudenMusic}/>
                        </PaddedDiv>
                        <PaddedDiv>
                            <ModalText>Sophie</ModalText>
                            {/* <ReactPlayer width={"40vw"} url={sVideo} loop={true} playing muted/> */}
                            <ModalVideo controls src={sVideo} onPlay={pauseMusic} onPause={startMusic} onEnded={startMusic}/>
                        </PaddedDiv>
                    </SideBySide>
                </React.Fragment>
                break
        case "J":
            content =
                <React.Fragment>
                    <ModalPicture alt="Jaydn" src={j}/>
                    <ModalText>Jaydn</ModalText>
                    <SmallModalText>Every time you open the link a new set of baubles will appear with different jokes and trivia. Enjoy! xxx</SmallModalText>
                </React.Fragment>
                break
        case "STD":
            content =
                <React.Fragment>
                    <ModalText>Spot the difference</ModalText>
                    <SideBySide>
                        <BigModalPicture alt="Spot the difference 1" src={std1}/>
                        <BigModalPicture alt="Spot the difference 2" src={std2}/>
                    </SideBySide>
                </React.Fragment>
                break
        case "HE":
            content =
            <React.Fragment>
                <ModalText>Find the hidden elves</ModalText>
                <SideBySide>
                    <PaddedDiv>
                        <SmallModalPicture src={he1}/>
                    </PaddedDiv>
                    <PaddedDiv>
                        <SmallModalPicture src={he2}/>
                    </PaddedDiv>
                    <PaddedDiv>
                        <SmallModalPicture src={he3}/>
                    </PaddedDiv>
                    <PaddedDiv>
                        <SmallModalPicture src={he4}/>
                    </PaddedDiv>
                    <PaddedDiv>
                        <SmallModalPicture src={he5}/>
                    </PaddedDiv>
                    <PaddedDiv>
                        <SmallModalPicture src={he6}/>
                    </PaddedDiv>
                    <PaddedDiv>
                        <SmallModalPicture src={he7}/>
                    </PaddedDiv>
                </SideBySide>
                <BigModalPicture alt="Hidden Elves" src={he}/>

            </React.Fragment>
            break
        case "GTY":
            content =
            <React.Fragment>
                <ModalText>Guess the year</ModalText>
                <ModalPicture alt="Guess the year" src={state.gty.path}/>
                <SideBySide>
                    {state.gty.options.map((option, i) => 
                        <PaddedDiv key={i}>
                            <ModalText>
                                <ModalGTYOption>
                                    {i+1+") "}
                                    <span className="show">{option}</span>
                                    <span className="answer">{option === state.gty.answer ? "CORRECT!" : "WRONG"}</span>
                                </ModalGTYOption>
                            </ModalText>
                        </PaddedDiv>
                    )}
                </SideBySide>
                <SmallModalText>(Hold down option to reveal answer)</SmallModalText>
            </React.Fragment>
            break
        case "TRIVIA":
            content = 
                <React.Fragment>
                    <ModalText>TRIVIA</ModalText>
                    <ModalText>{state.trivia}</ModalText>
                </React.Fragment>
            break
        case "JOKE":
            content = 
                <React.Fragment>
                    <ModalText>JOKE</ModalText>
                    <ModalText>{state.joke.joke}</ModalText>
                    <ModalText>
                        <ModalJokeAnswer>
                            <span className="show">(Reveal Answer)</span>
                            <span className="answer">{state.joke.answer}</span>
                        </ModalJokeAnswer>
                    </ModalText>
                </React.Fragment>
            break
        case "STAR":
            content = <ModalVideo controls src={starVideo} onPlay={pauseMusic} onPause={startMusic} onEnded={startMusic}/>
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
                <ModalCloseButton alt="Close modal" src={close} onClick={hideModal}/>
                <ModalContent>
                    {content}
                </ModalContent>
            </StyledModal>
        </ModalProvider>
    )
}

export default CustomModal