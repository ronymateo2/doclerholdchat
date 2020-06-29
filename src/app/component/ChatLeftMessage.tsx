import React from 'react'

export interface ChatLeftMessageProps {
    userName: string
    date: string
    content: string
}

const ChatLeftMessage = ({ userName, date, content }: ChatLeftMessageProps) => {
    return (<div className='left'>
        <div className="user">
            <p>{userName}, {date}</p>
        </div>
        <div className="content">
            <span> {content}</span>
        </div>
    </div>)
}


export default ChatLeftMessage