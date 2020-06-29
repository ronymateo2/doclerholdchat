import { User } from "./user";
import { ClockDisplay } from "./clock-display";

export interface ChatMessage {
    id?: number //TODO
    userName: string
    content: string
    // it should formatted by the server but for this exercise we format this value
    createdAt: AppDateTime
}


export interface AppDateTime {
    year?: number,
    monthIndex?: number,
    day?: number,
    hours: number,
    minutes: number,
    seconds?: number
}


export const formatDay = (dt: AppDateTime, clockDisplay: string | ClockDisplay): string => {
    if (clockDisplay == ClockDisplay.TwentyFour) {
        return `${dt.hours}:${dt.minutes}`
    }
    else {
        const suffix = (dt.hours >= 12) ? 'pm' : 'am';
        const hours = (dt.hours > 12) ? dt.hours - 12 : dt.hours
        return `${hours === 0 ? 12 : hours}:${dt.minutes} ${suffix}`
    }
}

export const isMyMessage = (user: User, m: ChatMessage): boolean => {
    return user.userName == m.userName
}