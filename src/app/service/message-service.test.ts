import { ChatMessage, initialChatMessages } from "../model/chat-message";
import { messageServiceImp } from "./message-service";
import LocalStorageMock from "../../__mock__/localstorage";

describe('message-service', () => {
    it('should get default values', async () => {
        const messageSrv = messageServiceImp(new LocalStorageMock(), [...initialChatMessages])
        let list = await messageSrv.get('user01')
        expect(list).toStrictEqual(initialChatMessages)
    })


    it('should get list of messages', async () => {
        const messageSrv = messageServiceImp(new LocalStorageMock(), [])
        const chmsg: ChatMessage = {
            userid: 'user01',
            userName: 'user_01',
            content: 'bla bal',
            // it should formatted by the server but for this exercise we format this value
            createdAt: {
                hours: 19, minutes: 10
            }
        }
        let list = await messageSrv.add(chmsg)
        expect(list).toStrictEqual([chmsg])
    })
})

