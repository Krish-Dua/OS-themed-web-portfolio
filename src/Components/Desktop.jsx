import React from 'react'
import Taskbar from './taskbar'

const DESKTOP_ICONS = [
  {
    id: "projects",
    title: "Projects",
    icon: "./projects.png",
  },
  {
    id: "about",
    title: "About Me",
    icon: "./about.png",
  },
  {
    id: "skills",
    title: "Skills",
    icon: "./skills.png",
  },
  {
    id: "resume",
    title: "Resume",
    icon: "./resume.png",
  },
  {
    id: "contact",
    title: "Contact",
    icon: "./contact.png",
  },
  {
    id: "terminal",
    title: "Terminal",
    icon: "./terminal.png",
  },
  {
    id: "classic",
    title: "Standard Portfolio",
    subtitle: "Click here for simple portfolio",
    icon: "./simp-port.png",
  },
];

const Desktop = () => {
  return (
    <>
     <div className='w-screen h-[93dvh] bg-[url("./Desktop-bg.jpg")] bg-cover bg-center'>
      <div className="h-[90%] w-min flex flex-wrap gap-6 flex-col">
        {DESKTOP_ICONS.map((icon) => (
          <button
            key={icon.id}
            onClick={() => onIconClick(icon.id)}
            className="
              w-24
              flex flex-col items-center gap-1
              p-2
              rounded-md
              text-white text-xs
              hover:bg-white/10
              active:bg-white/20
              transition
              cursor-default
            "
          >
            <img
              src={icon.icon?icon.icon:"./win-strt-btn.png"}
              alt={icon.title}
              className="w-auto h-18 rounded-md object-cover"
              draggable={false}
              
            />

            <span className="text-center text-shadow-black text-shadow-2xs font-semibold text-base leading-tight">
              {icon.title}
            </span>

          </button>
        ))}
      </div>
    </div>
    <Taskbar/>
    </>
  )
}

export default Desktop



