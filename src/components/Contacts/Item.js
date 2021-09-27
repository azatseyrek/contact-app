import React from 'react'

const Item = ({item}) => {
    return (
        <div className='items_list'>
            <span>{item.name}</span>
            <span className='phone_number'>{item.phone_number}</span>
        </div>

    )
}

export default Item
