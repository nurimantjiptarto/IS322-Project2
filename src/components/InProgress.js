import React from 'react'
import TaskItem from './TaskItem'

export const InProgress = ({items,setItems,updateStatus}) => {

    return (

            <div className="in_progress">
                <h1>In Progress</h1>
                    {
                        items && items.map(item=>{
                            if(item && item.column==='in-progress')
                                return <TaskItem task={item} onClick={updateStatus} columnIdx={1}/>
                        })
                    }
    
            </div>

    )
}