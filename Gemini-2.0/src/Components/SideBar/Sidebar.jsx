import React from 'react'
import './Sidebar.css'
import { IoMenuOutline } from "react-icons/io5";
import { CiSquarePlus } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";
import { CiSquareQuestion } from "react-icons/ci";
import { FaHistory } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";


export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <IoMenuOutline className='menu' size={24} color="#000" />
            <div className="new-chat">
                <CiSquarePlus size={24} color="#000" />
                <p>New Chat</p>
            </div>
            <div className="recent">
                <p className="recent-title">
                    Recent
                </p>
                <div className="recent-entry">
                    <FaRegMessage size={24} color="#000" />
                </div>
                <p>
                    What is react..
                </p>
            </div>
        </div>
        <div className="bottom">
            <div className="bottom-item recent-entry">
                <CiSquareQuestion size={24} color="#000" />
                <p>Help</p>
            </div>
            <div className="bottom-item recent-entry">
                <FaHistory size={24} color="#000" />
                <p>Activity</p>
            </div>
            <div className="bottom-item recent-entry">
                <CiSettings size={24} color="#000" />
                <p>Setting</p>
            </div>
        </div>
    </div>
  )
}
