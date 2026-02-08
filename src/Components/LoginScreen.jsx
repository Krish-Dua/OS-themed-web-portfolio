import React from "react";
import loginBg from "../assets/login-bg.jpg";
const LoginScreen = ({ onLogin }) => {
    const [weLoading, setWeLoading] = React.useState(false);


    if(weLoading){
        return(
      <div 
      style={{ backgroundImage: `url(${loginBg})` }}
      className='w-screen h-dvh bg-cover'>
        <div className="w-full h-[80%] flex flex-col justify-center gap-10 items-center">
            <div className="flex gap-4 justify-center items-center">
                <div className="
        w-7 h-7
        rounded-full
        border-4 border-blue-500
        border-t-blue-700
        animate-spin
      "></div>
                <h2 className="text-4xl text-gray-100 font-bold">Welcome</h2>
            </div>
        </div>
      </div>
)
    }
  return (


    <div 
      style={{ backgroundImage: `url(${loginBg})` }}
     className='w-screen h-dvh  bg-cover'>
      <div className="w-full h-full flex flex-col justify-center gap-10 items-center">
        <img src={loginBg} className="h-50 w-50 object-cover shadow-2xl border-3 border-blue-500 " alt="" />
        <div>
          <p className="text-gray-100 font-bold text-3xl">Krish Dua</p>
          <p className="text-gray-200 font-bold text-2xl">Full-Stack Web Developer</p>
        </div>
        <button
          className="
    flex items-center gap-2
    px-8 py-2
    rounded-md
    bg-linear-to-b from-[#3b82f6] to-[#1e40af]
    border border-[#1e3a8a]
    text-white font-medium
    shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]
    hover:from-[#4f8df9] hover:to-[#2563eb]
    focus:outline-none focus:ring-2 focus:ring-blue-400
    active:scale-[0.98]
    transition-all duration-150
  "
          onClick={()=>{setWeLoading(true);
             setTimeout(()=>{onLogin()},1000)
            }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
