import React, { useState, useEffect, useContext, useCallback } from 'react'
import { ChatMessage, formatDay, isMyMessage } from '../model/chat-message'
import { Setting } from '../model/setting'
import { User } from '../model/user';
import ChatRigthMessage from '../component/ChatRigthMessage';
import ChatLeftMessage from '../component/ChatLeftMessage';
import { ServiceContext } from '../context/ServiceContext';


export default function Chat() {
    const context = useContext(ServiceContext)
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState<User>()
    const [messages, setMessages] = useState([] as ChatMessage[])
    const [setting, setSetting] = useState<Setting>();
    const [msg, setMsg] = useState('')

    const addMessage = () => {
        const currentDate = new Date()
        const newMsg: ChatMessage = { userid: user!.id, userName: setting!.userName, content: msg, createdAt: { hours: currentDate.getHours(), minutes: currentDate.getMinutes() } }
        setMessages([...messages, newMsg])
        setMsg('')
    }

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMsg(e.target.value);
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        addMessage();
        setMsg('');
    }

    useEffect(() => {
        const getAppData = async () => {
            setIsLoading(true);
            try {
                const user = await context.userService!.me()
                const settings = await context.settingService!.get(user!.id)
                const messages = await context.messageService!.get(user!.id)
                setUser(user)
                setSetting(settings)
                setMessages(messages)
            } catch (error) {
                // TODO: handle errors
            } finally {
                setIsLoading(false);
            }
        };
        getAppData();
    }, [user])


    useEffect(() => {
        const keydownHandler = (e: KeyboardEvent) => {
            if (e.keyCode === 13 && e.ctrlKey) {
                addMessage()
            }
        }
        window.addEventListener('keydown', keydownHandler, true)
        return () => {
            window.removeEventListener('keydown', keydownHandler, true)
        }
    })

    const messageList = messages.map((msg, id) => {
        if (isMyMessage(user!, msg)) {
            return (
                <ChatRigthMessage
                    key={id}
                    date={formatDay(msg.createdAt, setting!.clockDisplay!)}
                    content={msg.content} />)
        }
        return (<ChatLeftMessage
            key={id}
            userName={msg.userName!}
            date={formatDay(msg.createdAt, setting!.clockDisplay!)}
            content={msg.content} />)
    })

    return (
        <div className="chat"> {
            !isLoading && <>
                <section className="messages">
                    {messageList}
                </section>
                <form id="chat" onSubmit={handleSubmit}>
                    <input placeholder="Enter Message..." type="text" value={msg} onChange={onChangeHandler} ></input>
                    <button className="button" type="button" onClick={addMessage} >
                        <i className="fas fa-paper-plane fa-2x"></i>
                    </button>
                </form>
            </>
        }
        </div>
    )
}