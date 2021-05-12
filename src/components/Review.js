import React from 'react'
import TaskItem from './TaskItem'

export const Review = ({items,setItems,updateStatus}) => {
    return (

            <div className="review" >
                <h1>Review</h1>
                    {
                        items && items.map(item=>{
                            if(item && item.column==='review')
                                return <TaskItem task={item} onClick={updateStatus} columnIdx={2}/>
                        })
                    }
    
            </div>

    )
}