import React from "react";

const section1 = ( props) => {
  return (
    <div>
       <div className="w-70  bg-green-900 m-9 h-115 rounded-2xl overflow-hidden">
          <div className="relative">
            <img className="h-60 w-full object-cover " src={props.img1} alt="profile..." />
            <div className="absolute top-45 left-1">
              <img
                className="w-20 h-20 rounded-full object-cover"
                src={props.img2}
                alt=""
              />
            </div>
          </div>
          <div className="mt-4 p-3">
            <h2 className="text-2xl text-white">{props.name} </h2>
            <h6 className="text-sm text-blue-300 ">{props.work}</h6>
            <p className="text-sm text-white">
             {props.details}
            </p>
            <div className="my-5">
              <button className="text-blue-300 hover:scale-110 border w-25 text-sm py-1">
                FOLLOW
              </button>
              <button className="text-white  hover:scale-110 border w-25 ml-2 text-sm py-1">
                MORE INFO
              </button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default section1;
