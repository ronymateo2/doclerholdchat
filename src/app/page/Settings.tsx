import React, { useState } from 'react'
import Input from '../component/Input'
import Radio from '../component/Radio'
import Select from '../component/Select'
import { languageList } from '../model/language'
import { currentUser } from '../model/user'



export default function Settings() {
    const interfaceTypeOptions = [{ value: 'ligth', label: 'Ligth' }, { value: 'dark', label: 'Dark' }]
    const clockDisplayOptions = [{ value: '12', label: '12 Hours' }, { value: '24', label: '24 Hours' }]
    const messagesOptions = [{ value: 'on', label: 'On' }, { value: 'off', label: 'Off' }]
    const languageOptions = languageList.map(l => ({ value: l.code, label: l.name }))

    const [interfaceType, setInterfaceTye] = useState('')
    const [clockDisplay, setClockDisplay] = useState('')
    const [sendMessage, setSendMessage] = useState('')
    const [language, setLanguage] = useState('')

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
    }
    
    return (
        <form id="settings" onSubmit={handleSubmit} >
            <Input label="User Name" value={currentUser.userName} readOnly={true}></Input>
            <Radio label="Interface type" name="interfaceType" value={interfaceType} onChange={setInterfaceTye} options={interfaceTypeOptions}  ></Radio>
            <Radio label="Clock display" name="clockDisplay" value={clockDisplay} onChange={setClockDisplay} options={clockDisplayOptions}  ></Radio>
            <Radio label="Send Message on CRTL + ENTER" name="sendMessage" value={sendMessage} onChange={setSendMessage} options={messagesOptions}  ></Radio>
            <Select label="Language" value={language} onChange={setLanguage} options={languageOptions}></Select>
            <input className="submitBtn" type="submit" value="Reset to Defaults"></input>
        </form>
    )
}