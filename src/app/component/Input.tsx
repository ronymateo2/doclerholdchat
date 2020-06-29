import React from 'react'

interface InputProps {
    label: string
    value?: string
    readOnly?: boolean
    onChange?: (value: string) => void
}

const Input = (props: InputProps) => (
    <label className="top">{props.label}
        <input type="text" readOnly={props.readOnly} autoComplete="off" value={props.value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (props.onChange)
                props.onChange(e.target.value)
        }} ></input>
    </label>
)

export default Input