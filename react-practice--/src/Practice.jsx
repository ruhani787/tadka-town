import React, { useState } from "react";
const Practice = () => {
  const [age, setage] = useState(23);
  const [like, setlike] = useState(0);
  const [task, settask] = useState("");
  const [tasks, settasks] = useState([]);
  const [change, setchange] = useState("#fff");

  const increase = () => {
    setage(age + 1);
  };
  const likebtn = () => {
    setlike(like + 1);
  };
  const dislikebtn = () => {
    setlike(like - 1);
  };
  const addtask = () => {
    if (task.trim() === "") return;
    settasks([...tasks, task]);
    settask("");
  };
  const dlttask = (index) => {
    const updatedTasks = tasks.filter((item, i) => i !== index);
    settasks(updatedTasks);
  };
  const colorchange = (e) => {
    setchange(e.target.value);
  };

  return (
    <div className="flex flex-wrap w-280  mt-3 p-2">
      {/* increase age  */}
      <div className="p-5 m-6 w-50 h-50 rounded-3xl text-center bg-amber-100">
        <h1 className="text-4xl font-bold underline">{age}</h1>
        <button
          className="mt-6 border-2 hover:text-sm hover:text-red-500 p-2 rounded-xl font-bold"
          onClick={increase}
        >
          Increase Age
        </button>
      </div>
      {/* like dislike  */}
      <div>
        <div className="p-5 m-6 w-50 h-50 rounded-3xl text-center bg-amber-100">
          <h1 className="text-2xl font-bold ">Like={like}</h1>
          <div className="flex mt-6 justify-between">
            <button
              className="mt-2 border-2 p-1 font-bold rounded-full hover:bg-red-500"
              onClick={likebtn}
            >
              Like
            </button>
            <button
              className="mt-2 border-2 p-1 font-bold rounded-full hover:bg-red-500"
              onClick={dislikebtn}
            >
              Dislike
            </button>
          </div>
        </div>
      </div>
      {/* input color  */}
    <div style={{backgroundColor:change}}
     className='w-50 rounded-3xl h-50'>
    </div><br></br>
     <input type='color' 
      className=" m-5 hover:opacity-50 border-2 " 
      value={change} 
      onChange={colorchange} ></input>
      {/* todo app  */}
      <div className="bg-amber-100 w-150 mt-6 rounded-3xl p-3">
        <h1 className="text-2xl ml-50 underline"> My To-Do App</h1>

        <input
          className="bg-white p-2 "
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={(e) => {
            settask(e.target.value);
          }}
        ></input>

        <button
          className="bg-black text-white hover:opacity-60 p-1 rounded-full ml-2"
          onClick={addtask}
        >
          {" "}
          Add
        </button>
        <ul className="mt-2 ">
          {tasks.map((item, index) => (
            <li key={index}>
              {item}
              {""}
              <button
                className="bg-amber-300 text-white hover:opacity-60 p-1 rounded-full ml-2"
                onClick={() => dlttask(index)}
              >
                {" "}
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Practice;
