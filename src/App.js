import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import './App.css';
import {StoreProvider} from './store'
import BackgroundMusic from './BackgroundMusic'
import { ChristmasTree } from './ChristmasTree'
import CustomModal from './CustomModal'
import background from './background.jpg'
import 'normalize.css'

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    width: 100%;
  }
  body {
    height: 100%;
    width: 100%;
    background-image: url(${background});
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
  }
`

const StyledTitle = styled.h1`
  color: #fff;
  font-family: 'Pacifico', cursive;
  text-align: center;
  line-height: 15vh;
  font-size: calc(3vw);
  margin:0;
`

const App = () => {
  return (
    <StoreProvider>
      <GlobalStyle/>
      <StyledTitle>Merry Christmas Nanny and Grandad!</StyledTitle>
        <BackgroundMusic/>
        <CustomModal/>
      <ChristmasTree/>
    </StoreProvider>
  )
}

export default App;
