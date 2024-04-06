import React, { useState } from 'react'
import Item from './Item'

// fa-regular fa-thumbs-up
// fa-regular fa-thumbs-down
// fa-regular fa-star

const Main = ({data, onLike}) => {

    const clickLike = (id, like) => {
        onLike(id, like)
    }

    return (
        <div className='main'>
            {data.map(item => {
                return (
                    <Item key={item.id} item={item}/>
                )
            })}
        </div>
    )
}

export default Main