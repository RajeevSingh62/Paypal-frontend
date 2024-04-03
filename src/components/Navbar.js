import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <>
      <div className="navcontainer w-full h-[90px] bg-white border-b-2 border-gray-600 flex justify-center items-center">
        <div className="nav w-11/12 h-full flex justify-between items-center ">
          <div className="left   flex justify-between w-[40%]">
            <p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBZC6OjiaKV6z9Vl9Y5qzZ-hVnl7TmfQ87pv3O9z6UIQ&s" alt="" className=" w-10 h-10 border-2 border-black" />
            </p>
            <p className=" font-semibold text-blue-700">Personal</p>
            <p className=" font-semibold text-blue-700">Business</p>
            <p className=" font-semibold text-blue-700">Developer</p>
            <p className=" font-semibold text-blue-700">Help</p>
          </div>
          <div className="right">
            <div className="buttongroup flex gap-5">
              <Button
              className="loginbtn"
                backgroundColor="text-blue-700 border-blue-700 border-2"
                onClick={() => console.log("Blue Button clicked")}
              >
                Log In
              </Button>
              <Button
                backgroundColor=" bg-blue-700 text-white"
                onClick={() => console.log("Blue Button clicked")}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
