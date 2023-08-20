import React, { createContext, useReducer } from 'react'
import { reducer } from './reducer'

const InitialDate = {
    cart : []
}

export const Cartcontext = createContext("Initial Value")

export default function CartContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, InitialDate)
    return (
        <Cartcontext.Provider value={{ state, dispatch }}>
            {children}
        </Cartcontext.Provider>
    )
}

