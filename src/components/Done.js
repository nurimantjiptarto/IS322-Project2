import React from 'react'
import TaskItem from './TaskItem'

export const Done = ({items,setItems,updateStatus}) => {
    return (

            <div className="done">
                <h1>Done</h1>
                {
                        items && items.map(item=>{
                            if(item && item.column==='done')
                                return <TaskItem task={item} onClick={updateStatus} columnIdx={3}/>
                        })
                    }
    
            </div>

    )
}