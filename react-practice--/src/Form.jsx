import { useState } from "react";
import React from "react";
import Btn from "./Btn";

const form = () => {
  const [name, setname] = useState("");
  const [roll, setroll] = useState("");
  const [course, setcourse] = useState("");
  const [btn, setbtn] = useState(false);
  const handlesubmit = (n) => {
    console.log("Student name is:", name);
    console.log("Student roll.no is:", roll);
    console.log("Student class is:", course);
    n.preventDefault();
    setbtn(true);
    
  };

  return (
    <div>
      <div className="flex justify-center  ">
        <form
          onSubmit={handlesubmit}
          className="bg-gray-100 w-150 p-4 h-100 rounded text-center "
        >
          <h1 className="font-bold  underline text-2xl mb-5">
            Student Information
          </h1>
          <input
            type="text"
            placeholder="Enter your name"
            className="bg-gray-300 w-100 mt-1 p-2"
            value={name}
            onChange={(n) => {
              setname(n.target.value);
             
            }}
          />
          <input
            type="number"
            placeholder="Roll no. "
            className="bg-gray-300 w-100 mt-1 p-2"
            value={roll}
            onChange={(n) => {
              setroll(n.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Class"
            className="bg-gray-300 w-100 p-2 mt-1"
            value={course}
            onChange={(n) => {
              setcourse(n.target.value);
            }}
          />
          <br />
          { <button
            type="submit"
            className="bg-black text-white mt-5 p-2 rounded hover:opacity-70"
          >
            Submit
          </button> }
          <br />
           { btn && (
            <>
              <div className="border uppercase">
               <h2>Student name is:{name}</h2>
              <h2>Student roll no. is:{roll}</h2>
              <h2>Student class is:{course}</h2>
              </div>
            </>
          )} 
        
          
        </form>
      </div>
    </div>
  );
};

export default form;
