import React,{useState,useEffect} from 'react'
import { InProgress } from './InProgress'
import { ToDo } from './ToDo'
import { Review } from './Review'
import { Done } from './Done'
import './main.css'


const TaskBoard = ({taskList}) => {
    const [items,setItems]=useState(taskList)
    useEffect(() => {
        setItems(taskList);
    });
    const updateStatus=(id,newStatus)=>{
        let allItems=items;
        allItems=allItems.map(item=>{
            if(item.id===id){
                console.log('in here')
                item.column=newStatus;
            }
        return item
        })
        setItems(allItems)
    }
    return (

            <div class="items">
                <div class= "row">
                
                    <div class="col-lg-3 col-xs-12">
                        <ToDo items={items} setItems={setItems} updateStatus={updateStatus}/> 
                    </div>

                    <div class="col-lg-3 col-xs-12">
                        <InProgress items={items} setItems={setItems} updateStatus={updateStatus}/>
                    </div>

                    <div class="col-lg-3 col-xs-12">
                        <Review items={items} setItems={setItems} updateStatus={updateStatus}/> 
                    </div>

                    <div class="col-lg-3 col-xs-12">
                        <Done items={items} setItems={setItems} updateStatus={updateStatus} />
                    </div>
     
                </div>  
            </div>
    )
}

export default TaskBoard

