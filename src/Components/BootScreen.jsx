import React from "react";

const BootScreen = ({ onFinish }) => {
  return (
    <div className="w-screen h-dvh bg-black ">
      <video  className="w-full h-full object-cover"  src="./Starting-windows.mp4" autoPlay muted onEnded={onFinish}></video>
    </div>
  );
};

export default BootScreen;
