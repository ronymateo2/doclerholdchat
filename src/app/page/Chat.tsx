import React, { useState } from 'react'

export default function Chat() {

    const [messages, setMessages] = useState([])
 
    return (
        <div className="chat">
            <section className="messages">
                <div className="left">
                    <div className="user">
                        <p>guest001, 10:02</p>
                    </div>
                    <div className="content">
                        <span> whant to bag to nigth</span>
                    </div>
                </div>
                <div className="left">
                    <div className="user">
                        <p>guest001, 10:02</p>
                    </div>
                    <div className="content">
                        <span>I meant hang</span>
                    </div>
                </div>
                <div className="right">
                    <div className="user">
                        <p>guest001, 10:02</p>
                    </div>
                    <div className="content">
                        <span>I meant hang</span>
                    </div>
                </div>
                <div className="left">
                    <div className="user">
                        <p>guest001, 10:02</p>
                    </div>
                    <div className="content">
                        <span>I meant hang</span>
                    </div>
                </div>
            </section>
            <form id="chat">
                <input placeholder="Enter Message..." type="text"></input>
                <button className="button">
                    <i className="fas fa-paper-plane fa-2x"></i>
                </button>
            </form>
        </div>
    )
}