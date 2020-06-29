import React, { useState, useEffect, useContext } from 'react'
import { ChatMessage, formatDay, isMyMessage } from '../model/chat-message'
import { defaultSetting, Setting } from '../model/setting'
import { currentUser, User } from '../model/user';
import ChatRigthMessage from '../component/ChatRigthMessage';
import ChatLeftMessage from '../component/ChatLeftMessage';
import { ServiceContext } from '../context/ServiceContext';

const settings = defaultSetting;

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
        addMessage();
        setMsg('');
    }

    useEffect(() => {
        const getAppData = async () => {
            setIsLoading(true);
            try {
                const user = await context.userService?.me()
                const messages = await context.messageService!.get(user!.id)
                const settings = await context.settingService!.get(user!.id)
                setUser(user)
                setMessages(messages)
                setSetting(settings)
            } catch (error) {
                // TODO: handle errors
            } finally {
                setIsLoading(false);
            }

        };
        getAppData();
    }, [])


    useEffect(() => {
        document.addEventListener('keydown', keydownHandler)
        return () => {
            document.removeEventListener('keydown', keydownHandler)
        }
    }, [])

    const messageList = messages.map((msg, id) => {
        if (isMyMessage(currentUser, msg)) {
            return (
                <ChatRigthMessage
                    key={id}
                    date={formatDay(msg.createdAt, settings.clockDisplay!)}
                    content={msg.content} />)
        }
        return (<ChatLeftMessage
            key={id}
            userName={msg.userName!}
            date={formatDay(msg.createdAt, settings.clockDisplay!)}
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