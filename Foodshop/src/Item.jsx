import React from "react";
import { useState } from "react";

const Item = (props) => {
   const [count, setcount] = useState(0)
const add=()=>{
    setcount(count+1)
 console.log(`${ props.food_name}=(${count+1})Added Succesfully`)
 

}
  return (
    <div>
      <div onClick={add}
        className="bg-pink-50 w-50 h-60 rounded-3xl p-2
         hover:cursor-pointer"
      >
        <img className="rounded-3xl h-40 object-cover hover:opacity-50"
        
        src={props.foodpic} alt={props.food_name}>
        </img>

        <h1 className="text-xl ">
            
            {props.food_name}</h1>

        <h2>{props.price}</h2>
       
       
        <div className="border w-40 ml-3 mt-2 opacity-50"></div>
      </div>
      
    </div>
    
  );
  
};

export default Item;
