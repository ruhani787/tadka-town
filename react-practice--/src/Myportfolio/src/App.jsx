//  Two way data binding 

import { useState } from "react";
import React from "react";

const App = () => {
  const [task, settask] = useState('');
  const [detail, setdetail] = useState('')

  const add = (e) => {
    e.preventDefault();
    
    console.log("The task is:", task,detail);
    settask("");
    setdetail('')
  };
  return (
    <div className="bg-black flex flex-col md:flex-row md:gap-10 min-h-screen">
      <form className="flex p-5" onSubmit={add}>
        <div className=" flex flex-col mt-2 w-full max-w-md gap-2">
          <input
            type="text"
            className="bg-white rounded  font-bold h-10 outline-none w-full p-2"
            placeholder="Task name"
            value={task}
            onChange={(e) => {
              settask(e.target.value.toUpperCase());
            }}
          ></input>
          <textarea
            type="text"
            className="bg-white rounded h-40 outline-none  w-full p-2"
            placeholder="Write task in detail"
            value={detail}
            onChange={(e) => {
              setdetail(e.target.value);
            }}
          ></textarea>
          <button
            type="submit"
            className="bg-white rounded w-full hover:opacity-70 p-2"
          >
            Add notes
          </button>
        </div>
      </form>

      <div>
        <img
          className="rotate-y-180 w-64 md:w-80"
          src="https://static.vecteezy.com/system/resources/thumbnails/049/578/155/small/a-black-and-white-drawing-of-a-man-writing-png.png"
          alt="writing_image"
        />
      </div>
    </div>
  );
};

export default App;
