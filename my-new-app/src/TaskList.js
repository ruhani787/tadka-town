const { createContext, useState } = require("react");
// create context----
 export const TaskContext=createContext();
//  create Provider----
export const TaskProvider=({children })=>{
    const[task,setTask]=useState([])
   
    const addTask=(task)=>{
        setTask(prev =>[...prev,task]);
    };
    const removeTask =(index)

}