import React from 'react'
import Taskbar from './taskbar'
import useWindowStore from '../Store'
import { Rnd } from "react-rnd";
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
    id: "standardP",
    title: "Standard Portfolio",
    subtitle: "Click here for simple portfolio",
    icon: "./standardP.png",
  },
];




const Desktop = () => {
  const windows = useWindowStore((s) => s.windows);
const activeWindowId = useWindowStore((s) => s.activeWindowId);

const openWindow = useWindowStore((s) => s.openWindow);
const closeWindow = useWindowStore((s) => s.closeWindow);
const focusWindow = useWindowStore((s) => s.focusWindow);
const minimizeWindow = useWindowStore((s) => s.minimizeWindow);
const toggleMaximize = useWindowStore((s) => s.toggleMaximize);
const updatePosition = useWindowStore((s) => s.updatePosition);
const updateSize = useWindowStore((s) => s.updateSize);


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
      <Rnd
  key={win.id}
    dragHandleClassName="window-header"
    cancel='.no-drag'
  onMouseDown={() => focusWindow(win.id)}
  bounds="parent"
    disableDragging={win.isMaximized}
  enableResizing={!win.isMaximized}
  size={{
    width: win.isMaximized ? "100%" : win.size.width,
    height: win.isMaximized ? "100%" : win.size.height,
  }}
  position={{
    x: win.isMaximized ? 0 : win.position.x,
    y: win.isMaximized ? 0 : win.position.y,
  }}
  onDragStop={(e, d) => {
    updatePosition(win.id, 
       { x: d.x, y: d.y }
    );
  }}
  onResizeStop={(e, direction, ref, delta, position) => {
    updateSize(win.id, 
       {
        width: ref.offsetWidth,
        height: ref.offsetHeight,
      }
  );
  }}
  className="
    absolute
    shadow-2xl
    overflow-hidden
    bg-zinc-900
    border
  "
  style={{
    zIndex: win.zIndex,
  }}
>
        {/* ================= TITLE BAR ================= */}
        <div
          className={`
            window-header
            cursor-grab
            active:cursor-grabbing
            h-9 px-2
            flex items-center justify-between
            select-none
            ${isActive ? "bg-zinc-800" : "bg-zinc-700"}
          `}
        >
          {/* Left: Title */}
          <div className="flex h-full cursor-default items-center no-drag gap-2">
            <div className="w-4 h-4 bg-white/20 rounded-sm" />
            <span className="text-sm text-white font-medium">
              {win.title}
            </span>
          </div>

          {/* Right: Window Controls (UI only) */}
          <div className="flex no-drag items-center">
            {/* Minimize */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                minimizeWindow(win.id);
              }}
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
              onClick={(e) => {
                e.stopPropagation();
                toggleMaximize(win.id);
              }}
              className="
                w-8 h-8
                flex items-center justify-center
                hover:bg-white/10
                text-white
              "
            >
              {win.isMaximized ? "🗗" : "🗖"}
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
      </Rnd>
    );
  })}

    </div>
    <Taskbar/>
    </>
  )
}

export default Desktop



