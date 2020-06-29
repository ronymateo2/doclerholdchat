import { ChatMessage } from "../model/chat-message";
import { LocalStorageRepository } from "./local-storage-repository";

const initialChatMessages: ChatMessage[] = [
    { userid: 'guest01', userName: 'guest01', content: "asdasdad basadasdasdaada badadadada", createdAt: { hours: 11, minutes: 59 } },
    { userid: 'guest01', userName: 'guest01', content: "bababaa", createdAt: { hours: 11, minutes: 59 } },
    { userid: 'rmateo', userName: 'rmateo', content: "bababaa", createdAt: { hours: 11, minutes: 59 } },
    { userid: 'rmateo', userName: 'rmateo', content: "bababaa", createdAt: { hours: 11, minutes: 59 } },
    { userid: 'rmateo', userName: 'rmateo', content: "bababaa", createdAt: { hours: 11, minutes: 59 } }]


export const messageServiceImp = (repository: LocalStorageRepository): MessageService => {

    const add = async (msg: ChatMessage): Promise<ChatMessage[]> => {
        const messages = await get(msg.userid)
        const newMessages = [...messages, msg]
        update(newMessages)
        return await get(msg.userid)
    }

    const get = async (userId: string): Promise<ChatMessage[]> => {
        const value = repository.getItem('user-messages')
        if (value) return JSON.parse(value) as ChatMessage[]
        return [...initialChatMessages];
    }

    const update = (messages: ChatMessage[]) => {
        repository.setItem('user-messages', JSON.stringify(messages))
    }

    return ({
        add,
        get
    });
}

export interface MessageService {
    add(message: ChatMessage): Promise<ChatMessage[]>
    get(userId: string): Promise<ChatMessage[]>
}