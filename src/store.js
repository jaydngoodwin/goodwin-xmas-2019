import React, { createContext, useContext, useReducer, useMemo } from 'react';

const StoreContext = createContext();

const initialState = {
    paused: false,
    quiet: true,
    modalType: '',
    trivia: '',
    joke: {},
    gty: ''
}

const storeReducer = (state, action) => {
    switch (action.type) {
        case 'START_MUSIC':
            return {
                ...state,
                paused: false
            }
        case 'PAUSE_MUSIC':
            return {
                ...state,
                paused: true
            }
        case 'LOUDEN_MUSIC':
            return {
                ...state,
                quiet: false
            }
        case 'QUIETEN_MUSIC':
            return {
                ...state,
                quiet: true
            }
        case 'SHOW_UNIQUE_MODAL':
            return {
                ...state,
                modalType: action.payload,
                trivia: '',
                joke: {},
                gty: '',
                paused: false,
                quiet: false
            }
        case 'SHOW_GTY_MODAL':
            return {
                ...state,
                modalType: "GTY",
                trivia: '',
                joke: {},
                gty: action.payload,
                paused: false,
                quiet: false            
            }
        case 'SHOW_TRIVIA_MODAL':
            return {
                ...state,
                modalType: "TRIVIA",
                trivia: action.payload,
                joke: {},
                gty: '',
                paused: false,
                quiet: false
            }
        case 'SHOW_JOKE_MODAL':
            return {
                ...state,
                modalType: "JOKE",
                trivia: '',
                joke: action.payload,
                gty: '',
                paused: false,
                quiet: false
            }
        case 'HIDE_MODAL':
            return {
                ...state,
                modalType: '',
                trivia: '',
                joke: {},
                gty: '',
                paused: false,
                quiet: false
            }
        default:
            throw new Error(`Unsupported action type: ${action.type}`)
    }
}

const StoreProvider = (props) => {
    const [state, dispatch] = useReducer(storeReducer, initialState)
    const value = useMemo(() => [state, dispatch], [state])
    return <StoreContext.Provider value={value} {...props}/>
}

const useStore = () => {
    const context = useContext(StoreContext)
    if (!context) {
        throw new Error(`useStore must be used within a StoreProvider`)
    }

    const [state, dispatch] = context

    const startMusic = () => {dispatch({type: 'START_MUSIC'})}
    const pauseMusic = () => {dispatch({type: 'PAUSE_MUSIC'})}
    const quietenMusic = () => {dispatch({type: 'QUIETEN_MUSIC'})}
    const loudenMusic = () => {dispatch({type: 'LOUDEN_MUSIC'})}
    const showUniqueModal = (modalType) => {dispatch({type: 'SHOW_UNIQUE_MODAL', payload: modalType})}
    const showGTYModal = (gty) => {dispatch({type: 'SHOW_GTY_MODAL', payload: gty})}
    const showTriviaModal = (trivia) => {dispatch({type: 'SHOW_TRIVIA_MODAL', payload: trivia})}
    const showJokeModal = (joke) => {dispatch({type: 'SHOW_JOKE_MODAL', payload: joke})}
    const hideModal = () => {dispatch({type: 'HIDE_MODAL'})}

    return {
        state,
        startMusic,
        pauseMusic,
        quietenMusic,
        loudenMusic,
        showUniqueModal,
        showGTYModal,
        showTriviaModal,
        showJokeModal,
        hideModal
    }
    
}

export { StoreProvider, useStore }