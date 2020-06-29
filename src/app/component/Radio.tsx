import React from 'react'

interface RadioProps {
    name: string
    label: string
    value?: string | boolean
    options: { value: string, label: string }[]
    onChange?: (value: string) => void
}

const Radio = (props: RadioProps) => (
    <>
        <h2>{props.label}</h2>
        {
            props.options.map(op => (
                <label className="sbs radio">
                    <input type="radio" key={op.value} value={op.value} checked={props.value === op.value} name={props.name}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            if (props.onChange)
                                props.onChange(e.target.value)
                        }} />
                    {op.label}
                </label>
            ))
        }
    </>
)

export default Radio