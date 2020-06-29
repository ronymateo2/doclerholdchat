import React from 'react'

interface RadioProps {
    name: string
    label: string
    value?: string | boolean
    options: { value: string, label: string }[]
    onChange?: (value: string) => void
}


const onChangeHandler = (props: RadioProps): ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
        if (props.onChange)
            props.onChange(e.target.value)
    }
}

const Radio = (props: RadioProps) => (
    <>
        <h2>{props.label}</h2>
        {
            props.options.map(op => (
                <label className="sbs radio" key={op.value}>
                    <input 
                        type="radio" 
                        value={op.value} 
                        checked={props.value === op.value} 
                        name={props.name}
                        onChange={onChangeHandler(props)} />
                    {op.label}
                </label>
            ))
        }   
    </>
)

export default Radio


