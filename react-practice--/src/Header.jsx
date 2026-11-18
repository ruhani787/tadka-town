import React from "react";

function Header() {
  return (
    <div className="flex:flex-col bg-[#66ae66] fixed top-0 w-full h-13 ">
      <ul className="flex justify-center items-center gap-8 p-2 text-[#085508] text-lg no-underline">
        <li>
          <a className="hover:underline" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="hover:underline" href="#">
            About
          </a>
        </li>
        <li>
          <a className="hover:underline" href="#">
            Contact
          </a>
        </li>
        <li>
          <a className="hover:underline" href="#">
            Projects
          </a>
        </li>
      </ul>
      <div>
        <button
          id="btn1"
          className="w-15 h-7 border-none mt-3 bg-[#5d915d] hover:bg-[#466c46]"
        >
          Login
        </button>
        <button
          id="btn2"
          className="w-15 h-7 border-none mt-3 bg-[#91e891] hover:bg-[#cbedcb]"
        >
          Signin
        </button>
      </div>
    </div>
  );
}

export default Header;
