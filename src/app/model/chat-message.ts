export interface ChatMessage {
    user: string
    content: string
    // it should formatted by the server but for this exercise we format this value
    createdAt: {
        year: number,
        month: number,
        day: number,
        hour: number,
        min: number
        second: number
    }
}


export const formatDay = (m: ChatMessage) : string=> {
    return '';
}
