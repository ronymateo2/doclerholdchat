import React from 'react'
import { TestProps } from './test-pros'

interface SelectProps {
    name?: string
    label: string
    value?: string
    options: { value: string, label: string }[]
    onChange?: (value: string) => void
}

const onChangeHandler = (props: SelectProps): ((event: React.ChangeEvent<HTMLSelectElement>) => void) | undefined => {
    return (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (props.onChange)
            props.onChange(e.target.value)
    }
}

const options = (props: SelectProps): React.ReactNode => {
    return props.options.map(op => (
        <option key={op.value} value={op.value}>{op.label}</option>
    ))
}


const Select = (props: SelectProps & TestProps) => (
    <label className="top">
        {props.label}
        <select value={props.value}
            test-id={props.testId}
            onChange={onChangeHandler(props)} >
            <option value=""> Please Select &#9662;</option>
            {
                options(props)
            }
        </select>
    </label>
)

export default Select

