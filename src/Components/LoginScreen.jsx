import React from "react";
import loginBg from "../assets/login-bg.jpg";
import heroImage from "../assets/hero.png";
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
      <style>{`
        @keyframes textSweep {
          0% { background-position: 200% 50%; }
          100% { background-position: -200% 50%; }
        }
        @keyframes neonLight {
          0%, 100% { filter: brightness(0.95) saturate(1); }
          50% { filter: brightness(1.08) saturate(1.1); }
        }
      `}</style>
      <div className="w-full h-full flex flex-col justify-center gap-10 items-center">
        <img src={heroImage} className="h-70 w-70 object-cover shadow-black shadow-3xl rounded-md" alt="" />
        <div className="text-center">
          <p
            className="font-extrabold text-5xl tracking-wide text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(90deg, #e5e7eb 0%, #FFFFFF 50%, #e5e7eb 100%)",
              backgroundSize: "220% 100%",
              animation: "textSweep 2.8s linear infinite",
            }}
          >
            Krish Dua
          </p>
          <p
            className="mt-2 font-bold text-4xl tracking-[0.08em] text-transparent bg-clip-text [text-shadow:0_0_8px_rgba(147,51,234,0.45),0_0_14px_rgba(126,34,206,0.3)]"
            style={{
              backgroundImage: "linear-gradient(90deg, #581c87 0%, #7e22ce 40%, #9333ea 50%, #7e22ce 60%, #581c87 100%)",
              backgroundSize: "220% 100%",
              animation: "textSweep 3.2s linear infinite, neonLight 1.8s ease-in-out infinite",
            }}
          >
            Full Stack Developer
          </p>
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
