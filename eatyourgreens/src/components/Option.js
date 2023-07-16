import React from 'react'

//left box OR align top on mobile 

export const Option = ({label}) => {

    return (
        <div>
            <button className='btn btn-outline-warning btn-sm'>
                {label}
            </button>
        </div>
    )
}