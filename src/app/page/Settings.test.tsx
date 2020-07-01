import React from 'react'
import Settings from './Settings'
import { act } from "react-dom/test-utils";
import { ServiceContextProps, ServiceContext } from '../context/ServiceContext'
import { messageServiceImp } from '../service/message-service'
import { initialChatMessages } from '../model/chat-message'
import { settingServiceImp } from '../service/setting-service'
import { defaultSetting } from '../model/setting'
import { userServiceImp } from '../service/user-service'
import { currentUser } from '../model/user'
import { ThemeProvider } from '../context/ThemeContext'
import { InterfaceType } from '../model/interface-type'
import LocalStorageFake from '../../__mock__/localstorage'
import { unmountComponentAtNode, render } from 'react-dom'

let container: HTMLDivElement;

describe('Settings', () => {
    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);
    });
    afterEach(() => {
        unmountComponentAtNode(container);
        container.remove();
        (container as any) = null;
    });

    it('should render', async () => {
        const storage = new LocalStorageFake()
        const provider: Partial<ServiceContextProps> = {
            messageService: messageServiceImp(storage, initialChatMessages),
            settingService: settingServiceImp(storage, defaultSetting),
            userService: userServiceImp(currentUser)
        }
        await act(async () => {
            render(
                <ServiceContext.Provider value={provider}>
                    <ThemeProvider startingTheme={InterfaceType.Ligth}>
                        <Settings></Settings>
                    </ThemeProvider>
                </ServiceContext.Provider>
                , container);
        });
        const inputUsername = (container.querySelector(`[test-id="username"]`) as HTMLInputElement)
        const radioInterfaceType = container.querySelector(`[test-id="interfaceType"]:checked`) as HTMLInputElement
        const radioClockDisplay = container.querySelector(`[test-id="clockDisplay"]:checked`) as HTMLInputElement
        const radioSendMessage = container.querySelector(`[test-id="sendMessage"]:checked`) as HTMLInputElement
        const selectLanguage = container.querySelector(`[test-id="language"]`) as HTMLInputElement

        expect(inputUsername.value).toBe(defaultSetting.userName)
        expect(radioInterfaceType.value).toBe(defaultSetting.inferfaceType)
        expect(radioClockDisplay.value).toBe(defaultSetting.clockDisplay)
        expect(radioSendMessage.value).toBe(defaultSetting.ctrlEnter)
        expect(selectLanguage.value).toBe(defaultSetting.language)
    })
})