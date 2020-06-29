import React from 'react'

export interface ChatRigthMessageProps {
    date: string
    content: string
}

const ChatRigthMessage = ({ date, content }: ChatRigthMessageProps) => {
    return (<div className='right'>
        <div className="user">
            <p>{date}</p>
        </div>
        <div className="content">
            <span> {content}</span>
        </div>
    </div >)
}


export default ChatRigthMessage