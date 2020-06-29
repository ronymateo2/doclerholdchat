import React from 'react'

interface SelectProps {
    name?: string
    label: string
    value?: string
    options: { value: string, label: string }[]
    onChange?: (value: string) => void
}

const Select = (props: SelectProps) => (
    <label className="top">
        {props.label}
        <select value={props.value} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            if (props.onChange)
                props.onChange(e.target.value)
        }} >
            <option value=""> Please Select &#9662;</option>
            {
                props.options.map(op => (
                    <option selected={props.value === op.value} key={op.value} value={op.value}>{op.label}</option>
                ))
            }
        </select>
    </label>
)

export default Select