import React from 'react'
import './Main.css'
import { FaRegUser } from "react-icons/fa";
import { FaRegCompass } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";


export const Main = () => {
  return (
    <div className="main">
        <div className="nav">
            <p>AI Assistant</p>
            <FaRegUser size={24} color="#000" />
        </div>
        <div className="main-container">
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
            <div className="bottom-main">
                <div className="search">
                    <input type="text" placeholder="Search" />
                    <div>
                        <FaSearch className="searchImg" size={20} color="#000" />
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
