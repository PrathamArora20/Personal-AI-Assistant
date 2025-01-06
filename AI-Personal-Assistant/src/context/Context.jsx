import React from 'react'
import { createContext } from "react";
import run from "../config/gemini";

export const Context=createContext();

const ContextProvider=(props)=>{

    const [input, setInput] = React.useState('');
    const [recentPrompt, setRecentPrompt] = React.useState('');
    const [previousPrompts, setPreviousPrompts] = React.useState([]);
    const [results, setResults] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [resultData, setResultData] = React.useState("");



    const onSent = async()=>{
        setResultData('')
        setLoading(true)
        setResults(true)
        setRecentPrompt(input)
        const response=await run(input)
        setResultData(response)
        setLoading(false)
        setInput('')

    }


    const contextValue={
        previousPrompts,
        setPreviousPrompts,
        onSent,
        recentPrompt,
        setRecentPrompt,
        resultData,
        setResultData,
        loading,
        setLoading,
        results,
        setResults,
        input,
        setInput
    }


    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )

}

export default ContextProvider;