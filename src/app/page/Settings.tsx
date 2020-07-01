import React, { useState, useEffect, useContext } from 'react'
import Input from '../component/Input'
import Radio from '../component/Radio'
import Select from '../component/Select'
import { languageList } from '../model/language'
import { Setting } from '../model/setting'
import { ServiceContext } from '../context/ServiceContext'
import { User } from '../model/user'
import { ThemeContext } from '../context/ThemeContext'
import { InterfaceType } from '../model/interface-type'
import { ClockDisplay } from '../model/clock-display'

export default function Settings() {
    const interfaceTypeOptions = [{ value: 'ligth', label: 'Ligth' }, { value: 'dark', label: 'Dark' }]
    const clockDisplayOptions = [{ value: '12', label: '12 Hours' }, { value: '24', label: '24 Hours' }]
    const messagesOptions = [{ value: 'on', label: 'On' }, { value: 'off', label: 'Off' }]
    const languageOptions = languageList.map(l => ({ value: l.code, label: l.name }))

    const svrContext = useContext(ServiceContext)
    const { updateTheme } = useContext(ThemeContext)

    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState<User>()
    const [setting, setSetting] = useState<Setting>();

    const [userName, setUserName] = useState('')
    const [interfaceType, setInterfaceType] = useState('')
    const [clockDisplay, setClockDisplay] = useState('')
    const [sendMessage, setSendMessage] = useState('')
    const [language, setLanguage] = useState('')

    useEffect(() => {
        const getSettingData = async () => {
            setIsLoading(true);
            try {
                const user = await svrContext.userService?.me()
                const settings = await svrContext.settingService!.get(user!.id)
                setUser(user)
                setSetting(settings)

                setInterfaceType(settings.inferfaceType)
                setClockDisplay(settings.clockDisplay)
                setSendMessage(settings.ctrlEnter)
                setLanguage(settings.language)
                setUserName(settings.userName)

            } catch (error) {
                // TODO: handle errors
            } finally {
                setIsLoading(false);
            }

        };
        getSettingData();
    }, [])


    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const defaultSetting = await svrContext.settingService!.getDefault()
        await updateSettings(defaultSetting)
    }

    async function updateSettings(setting: Setting) {
        await svrContext.settingService!.update(setting)
        const settings = await svrContext.settingService!.get(user!.id)
        setSetting(settings)
        setInterfaceType(settings.inferfaceType)
        setClockDisplay(settings.clockDisplay)
        setSendMessage(settings.ctrlEnter)
        setLanguage(settings.language)
        setUserName(settings.userName)
        updateTheme!(settings.inferfaceType)
    }

    const onChangeUserName = async (val: string) => {
        setUserName(val)
        await updateSettings({ ...setting!, userName: val })
    }
    const onChangeInterfaceType = async (val: string) => {
        setInterfaceType(val)
        updateTheme!(val as InterfaceType)
        await updateSettings({ ...setting!, inferfaceType: val as InterfaceType})

    }
    const onChangeClockDisplay = async (val: string) => {
        setClockDisplay(val)
        await updateSettings({ ...setting!, clockDisplay: val as ClockDisplay})
    }

    const onChangeSendMessage = async (val: string) => {
        setSendMessage(val)
        await updateSettings({ ...setting!, ctrlEnter: val })
    }

    const onChangeLanguge = async (val: string) => {
        setLanguage(val)
        await updateSettings({ ...setting!, language: val })
    }
    return (
        <>
            {!isLoading && <form id="settings" onSubmit={handleSubmit} >
                <Input label="User Name" testId="username" value={userName} onChange={onChangeUserName} ></Input>
                <Radio label="Interface type" testId="interfaceType" name="interfaceType" value={interfaceType} onChange={onChangeInterfaceType} options={interfaceTypeOptions}  ></Radio>
                <Radio label="Clock display" testId="clockDisplay" name="clockDisplay" value={clockDisplay} onChange={onChangeClockDisplay} options={clockDisplayOptions}  ></Radio>
                <Radio label="Send Message on CRTL + ENTER" testId="sendMessage" name="sendMessage" value={sendMessage} onChange={onChangeSendMessage} options={messagesOptions}  ></Radio>
                <Select label="Language" testId="language" value={language} onChange={onChangeLanguge} options={languageOptions}></Select>
                <input className="submitBtn" type="submit" value="Reset to Defaults"></input>
            </form>}
        </>
    )
}

