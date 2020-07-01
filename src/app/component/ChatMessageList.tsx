import React from "react"
import ChatRigthMessage from "./ChatRigthMessage"
import ChatLeftMessage from "./ChatLeftMessage"
import { ChatMessage, isMyMessage, formatTime } from "../model/chat-message"
import { User } from "../model/user"
import { Setting } from "../model/setting"

interface MessageListProp {
    messages: ChatMessage[],
    user: User,
    setting: Setting
}

const ChatMessageList = ({ messages, user, setting }: MessageListProp) => {
    const messageList = messages.map((msg, id) => {
        if (isMyMessage(user!, msg)) {
            return (
                <ChatRigthMessage
                    key={id}
                    date={formatTime(msg.createdAt, setting!.clockDisplay!)}
                    content={msg.content} />)
        }
        return (<ChatLeftMessage
            key={id}
            userName={msg.userName!}
            date={formatTime(msg.createdAt, setting!.clockDisplay!)}
            content={msg.content} />)
    })

    return <section className="messages">
        {messageList}
    </section>
}


export default ChatMessageList