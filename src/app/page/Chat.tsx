import React, { useState, useEffect, SyntheticEvent } from 'react'
import { ChatMessage, formatDay, isMyMessage } from '../model/chat-message'
// import { User } from '../model/user'
import { defaultSetting } from '../model/setting'

const curentUser = {
    userName: 'rmateo'
}

const settings = defaultSetting;
const chatMessages: ChatMessage[] = [
    { userName: 'guest01', content: "bababaa basdada badada", createdAt: { hours: 11, minutes: 59 } },
    { userName: 'guest01', content: "bababaa", createdAt: { hours: 11, minutes: 59 } },
    { userName: 'rmateo', content: "bababaa", createdAt: { hours: 11, minutes: 59 } },
    { userName: 'rmateo', content: "bababaa", createdAt: { hours: 11, minutes: 59 } },
    { userName: 'rmateo', content: "bababaa", createdAt: { hours: 11, minutes: 59 } }
]

export default function Chat() {
    const [messages, setMessages] = useState([...chatMessages] as ChatMessage[])
    const [msg, setMsg] = useState('')

    const addMessage = () => {
        const currentDate = new Date()
        const newMsg: ChatMessage = { userName: curentUser.userName, content: msg, createdAt: { hours: currentDate.getHours(), minutes: currentDate.getMinutes() } }
        setMessages([...messages, newMsg])
        setMsg('')
    }

    function keydownHandler(e: KeyboardEvent) {
        if (e.keyCode === 13 && e.ctrlKey) {
            addMessage()
            setMsg('')
        }
    }

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMsg(e.target.value);
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        addMessage()
    }

    useEffect(() => {
        document.addEventListener('keydown', keydownHandler)
        return () => {
            document.removeEventListener('keydown', keydownHandler)
        }
    })

    return (
        <div className="chat">
            <section className="messages">
                {
                    messages.map(m => (
                        <div className={isMyMessage(curentUser, m) ? 'right' : 'left'}>
                            <div className="user">
                                <p>{m.userName},{formatDay(m.createdAt, settings.clockDisplay!)}</p>
                            </div>
                            <div className="content">
                                <span> {m.content}</span>
                            </div>
                        </div>
                    ))
                }
            </section>
            <form id="chat" onSubmit={handleSubmit}>
                <input placeholder="Enter Message..." type="text" value={msg} onChange={onChangeHandler} ></input>
                <button className="button" type="button" onClick={addMessage} >
                    <i className="fas fa-paper-plane fa-2x"></i>
                </button>
            </form>
        </div>
    )
}