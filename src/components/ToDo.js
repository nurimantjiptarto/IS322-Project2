import React from 'react'
import TaskItem from './TaskItem'

export const ToDo = ({items,setItems,updateStatus}) => {
    return (

            <div className="todo">
                <h1>Todo</h1>
                    {
                        items && items.map(item=>{
                            if(item && item.column==='todo')
                                return <TaskItem task={item} onClick={updateStatus} columnIdx={0}/>
                        })
                    }
            </div>
    )
}