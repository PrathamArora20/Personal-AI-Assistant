import React from 'react'
import './Sidebar.css'
import { IoMenuOutline } from "react-icons/io5";
import { CiSquarePlus } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";
import { CiSquareQuestion } from "react-icons/ci";
import { MdHistory } from "react-icons/md";
import { CiSettings } from "react-icons/ci";


export const Sidebar = () => {

    const [extended, setExtended] = React.useState(false)
  return (
    <div className='sidebar'>
        <div className="top">
            <div className="new-chat-button">
                <IoMenuOutline onClick={()=>setExtended(prev=>!prev)} className='menu' size={24} color="#000" />
                <div className="new-chat">
                    <CiSquarePlus size={24} color="#000" />
                    {extended?<p>New Chat</p>:null}
                </div>
            </div>
            {extended?
            <div className="recent">
                <p className="recent-title">
                    Recent
                </p>
                <div className="recent-entry">
                    <FaRegMessage size={15} color="#000" />
                    <p>
                        What is react..
                    </p>
                </div>    
            </div>
            :null}
        </div>
        <div className="bottom">
            <div className="bottom-item recent-entry">
                <CiSquareQuestion size={24} color="#000" />
                {extended?<p>Help</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                <MdHistory size={24} color="#000" />
                {extended?<p>Activity</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                <CiSettings size={24} color="#000" />
                {extended?<p>Setting</p>:null}
            </div>
        </div>
    </div>
  )
}
