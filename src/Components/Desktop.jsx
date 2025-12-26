import React from 'react'
import Taskbar from './taskbar'
import useWindowStore from '../Store'
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
  const windows = useWindowStore((s) => s.windows);
const activeWindowId = useWindowStore((s) => s.activeWindowId);

const openWindow = useWindowStore((s) => s.openWindow);
const closeWindow = useWindowStore((s) => s.closeWindow);
const focusWindow = useWindowStore((s) => s.focusWindow);
console.log(windows)

  return (
    <>

     <div className='w-screen relative overflow-hidden h-[93dvh] bg-[url("./Desktop-bg.jpg")] bg-cover bg-center'>
      <div className="h-[90%] w-min flex flex-wrap gap-6 flex-col">
        {DESKTOP_ICONS.map((icon) => (
          <button
            key={icon.id}
            onDoubleClick={() => openWindow(icon.id, icon.title)}
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
{windows
  .filter((w) => !w.isMinimized)
  .map((win) => {
    const isActive = activeWindowId === win.id;

    return (
      <div
        key={win.id}
        onMouseDown={() => focusWindow(win.id)}
        className={`
          absolute
          rounded-md
          shadow-2xl
          overflow-hidden
          bg-zinc-900
          border
          ${isActive ? "border-blue-500" : "border-zinc-700"}
        `}
        style={{
          top: win.position.y,
          left: win.position.x,
          width: win.size.width,
          height: win.size.height,
          zIndex: win.zIndex,
        }}
      >
        {/* ================= TITLE BAR ================= */}
        <div
          className={`
            h-9 px-2
            flex items-center justify-between
            select-none
            ${isActive ? "bg-zinc-800" : "bg-zinc-700"}
          `}
        >
          {/* Left: Title */}
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-white/20 rounded-sm" />
            <span className="text-sm text-white font-medium">
              {win.title}
            </span>
          </div>

          {/* Right: Window Controls (UI only) */}
          <div className="flex items-center">
            {/* Minimize */}
            <button
              className="
                w-8 h-8
                flex items-center justify-center
                hover:bg-white/10
                text-white
              "
            >
              ─
            </button>

            {/* Maximize */}
            <button
              className="
                w-8 h-8
                flex items-center justify-center
                hover:bg-white/10
                text-white
              "
            >
              ⬜
            </button>

            {/* Close */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeWindow(win.id);
              }}
              className="
                w-8 h-8
                flex items-center justify-center
                hover:bg-red-500
                text-white
              "
            >
              ✕
            </button>
          </div>
        </div>

        {/* ================= CONTENT AREA ================= */}
        <div className="h-[calc(100%-36px)] bg-zinc-950 p-4 text-gray-400 text-sm">
          {/* content will come LAST */}
          {win.title} window
        </div>
      </div>
    );
  })}

    </div>
    <Taskbar/>
    </>
  )
}

export default Desktop



