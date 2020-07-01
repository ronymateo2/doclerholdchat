import { formatTime, AppDateTime, isMyMessage, ChatMessage } from './chat-message'
import { ClockDisplay } from './clock-display'
import { User } from './user'

describe('chat-message', () => {
    describe('time format', () => {
        it('should format time in 12hr format', () => {
            const clockDisplay = ClockDisplay.Twelve
            const appDateTime: AppDateTime = {
                hours: 19, minutes: 10
            }
            expect(formatTime(appDateTime, clockDisplay)).toBe('7:10 pm')
        })

        it('should format time in 24hr format', () => {
            const clockDisplay = ClockDisplay.TwentyFour
            const appDateTime: AppDateTime = {
                hours: 19, minutes: 10
            }
            expect(formatTime(appDateTime, clockDisplay)).toBe('19:10')
        })
    })

    describe('is user message', () => {
        it('should get if the message is from current user', () => {
            const user: User = {
                id: 'user01'
            }
            const chmsg: ChatMessage = {
                userid: 'user01',
                userName: 'user_01',
                content: 'bla bal',
                // it should formatted by the server but for this exercise we format this value
                createdAt: {
                    hours: 19, minutes: 10
                }
            }

            expect(isMyMessage(user, chmsg)).toBeTruthy()
        })
    })


})