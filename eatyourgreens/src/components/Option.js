import React from 'react'

export const Option = ({label}) => {
    return (
        <div>
            <button className='btn btn-outline-warning btn-sm'>
                {label}
            </button>
        </div>
    )
}