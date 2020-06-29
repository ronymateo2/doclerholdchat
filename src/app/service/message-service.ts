import { ChatMessage } from "../model/chat-message";
import { LocalStorageRepository } from "./local-storage-repository";

export const messageService = (repository: LocalStorageRepository) => {
    return ({
        async add(message: ChatMessage): Promise<void> {
            return repository.setItem('user-settings', JSON.stringify(message))
        },

        async get(): Promise<ChatMessage[] | undefined> {
            const value = repository.getItem('user-settings')
            if (value) return JSON.parse(value) as ChatMessage[]
            return [];
        }
    });
}