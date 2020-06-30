import React, { useState, useEffect, useContext, } from 'react'
import { ChatMessage, } from '../model/chat-message'
import { Setting } from '../model/setting'
import { User } from '../model/user';
import { ServiceContext } from '../context/ServiceContext';
import ChatMessageList from '../component/ChatMessageList';

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
            if (setting!.ctrlEnter == 'on' && e.keyCode === 13 && e.ctrlKey) {
                addMessage()
            }
        }
        window.addEventListener('keydown', keydownHandler)
        return () => {
            window.removeEventListener('keydown', keydownHandler)
        }
    })

    return (
        <>{
            !isLoading && <div className="chat">
                <ChatMessageList messages={messages} user={user!} setting={setting!}></ChatMessageList>
                <form id="chat" onSubmit={handleSubmit}>
                    <input placeholder="Enter Message..." type="text" value={msg} onChange={onChangeHandler} ></input>
                    <button className="button" type="button" onClick={addMessage} disabled={true} >
                        <i className="fas fa-paper-plane fa-2x"></i>
                    </button>
                </form>
            </div>
        }
        </>
    )
}