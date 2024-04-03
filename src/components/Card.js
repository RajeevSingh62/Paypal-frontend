import React from "react";

const Card = () => {
  return (
    <>
      <div className="card flex w-[350px] px-4 py-2 border-[1px] items-center gap-5 rounded-xl shadow-md">
        <div className="left">
          <img src="https://www.vhv.rs/dpng/d/600-6006842_call-center-icon-call-center-vector-hd-png.png" alt="" className=" w-12 h-12 rounded-full" />
        </div>
        <div className="right">
          <div className="title  font-bold"> Resolution Center</div>
          <div className="para">Resolve transaction or account issues.</div>
        </div>
      </div>
      <div className="card flex w-[350px] px-4 py-2 border-[1px] items-center gap-5 rounded-xl shadow-md">
        <div className="left">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuR9nNXEOz5-V3ENXjhTNyQDbhhwgTDnXCnmIkXSRHaA&s" alt="" className=" w-12 h-12 rounded-full" />
        </div>
        <div className="right">
          <div className="title  font-bold"> Ask the community</div>
          <div className="para">Find answer or join the conversation</div>
        </div>
      </div>
      <div className="card flex w-[350px] px-4 py-2 border-[1px] items-center gap-5 rounded-xl shadow-md">
        <div className="left">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsFqD7win1crirQX1fqu285isayosBvAxZfrmZj_lx_w&s" alt="" className=" w-12 h-12 rounded-full" />
        </div>
        <div className="right">
          <div className="title  font-bold">Message center</div>
          <div className="para">Send ,recieve and view your paypal message</div>
        </div>
      </div>
    </>
  );
};

export default Card;
