import React, { useState, useEffect, SyntheticEvent } from 'react'
import { ChatMessage, formatDay, isMyMessage } from '../model/chat-message'
import { defaultSetting } from '../model/setting'
import { currentUser } from '../model/user';

const settings = defaultSetting;
const chatMessages: ChatMessage[] = [
    { userid: 'guest01', userName: 'guest01', content: "bababaa basdada badada", createdAt: { hours: 11, minutes: 59 } },
    { userid: 'guest01', userName: 'guest01', content: "bababaa", createdAt: { hours: 11, minutes: 59 } },
    { userid: 'rmateo', userName: 'rmateo', content: "bababaa", createdAt: { hours: 11, minutes: 59 } },
    { userid: 'rmateo', userName: 'rmateo', content: "bababaa", createdAt: { hours: 11, minutes: 59 } },
    { userid: 'rmateo', userName: 'rmateo', content: "bababaa", createdAt: { hours: 11, minutes: 59 } }
]

export default function Chat() {
    const [messages, setMessages] = useState([...chatMessages] as ChatMessage[])
    const [msg, setMsg] = useState('')

    const addMessage = () => {
        const currentDate = new Date()
        const newMsg: ChatMessage = { userid: currentUser.id, userName: currentUser.userName, content: msg, createdAt: { hours: currentDate.getHours(), minutes: currentDate.getMinutes() } }
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
                        <div className={isMyMessage(currentUser, m) ? 'right' : 'left'}>
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