import React from 'react'
import Input from '../component/Input'
import Radio from '../component/Radio'
import Select from '../component/Select'
import { languageList } from '../model/language'

export default function Settings() {
    const interfaceTypeOptions = [{ value: 'ligth', label: 'Ligth' }, { value: 'dark', label: 'Dark' }]
    const clockDisplayOptions = [{ value: '12', label: '12 Hours' }, { value: '24', label: '24 Hours' }]
    const messagesOptions = [{ value: 'on', label: 'On' }, { value: 'off', label: 'Off' }]
    const languageOptions = languageList.map(l => ({ value: l.code, label: l.name }))

    return (
        <form id="settings">
            <Input label="User Name"></Input>
            <Radio label="Interface type" name="interfaceType" options={interfaceTypeOptions}  ></Radio>
            <Radio label="Clock display" name="clockDisplay" options={clockDisplayOptions}  ></Radio>
            <Radio label="Send Message on CRTL + ENTER" name="sendMessage" options={messagesOptions}  ></Radio>
            <Select label="Language" value='sq' options={languageOptions}></Select>
            <input className="submitBtn" type="submit" value="Reset to Defaults"></input>
        </form>
    )
}