import React from 'react'
import './Main.css'
import { FaRegUser, FaUser } from "react-icons/fa";
import { FaRegCompass } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Context } from '../../context/Context';
import { FaRobot } from "react-icons/fa";

export const Main = () => {

    const {onSent,recentPrompt,results,input,setInput,resultData}=React.useContext(Context)

  return (
    <div className="main">
        <div className="nav">
            <p>AI Assistant</p>
            <FaRegUser size={24} color="#000" />
        </div>
        <div className="main-container">
            {!results?
            <>
                <div className="greating">
                    <p><span>Hello!</span></p>
                    <p>How can I assist you today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>What is the distance between earth to moon</p>
                        <FaRegCompass className="Compass" size={35} color="#000" />
                    </div>
                    <div className="card">
                        <p>Suggest a good place to visit in europe</p>
                        <FaRegCompass className="Compass" size={35} color="#000" />
                    </div>
                    <div className="card">
                        <p>Explain the process of evolution</p>
                        <FaRegCompass className="Compass" size={35} color="#000" />
                    </div>
                    <div className="card">
                        <p>Write me a code block for inverting a list</p>
                        <FaRegCompass className="Compass" size={35} color="#000" />
                    </div>
                </div>
            
            </>:<div className="result">
                <div className="result-title">
                    <FaRegUser className='UserImage' color="#000" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <FaRobot className='robotImage'  color="#000" />
                    <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                </div>
                </div>}

            <div className="bottom-main">
                <div className="search">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="Search" />
                    <div>
                        <FaSearch onClick={()=>onSent()} className="searchImg" size={20} color="#000" />
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
