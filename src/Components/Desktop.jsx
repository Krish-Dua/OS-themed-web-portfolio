import React from "react";
import Taskbar from "./taskbar";
import useWindowStore from "../Store";
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
const SNAP_THRESHOLD = 20;

const Desktop = () => {
  const desktopRef = React.useRef(null);
  const lastDragY = React.useRef(null);
const draggingWindowId = React.useRef(null);

  const desktopSize = {
    width: desktopRef.current?.offsetWidth ?? 0,
    height: desktopRef.current?.offsetHeight ?? 0,
  };
  const [snapPreview, setSnapPreview] = React.useState(null);

  const windows = useWindowStore((s) => s.windows);
  const activeWindowId = useWindowStore((s) => s.activeWindowId);

  const openWindow = useWindowStore((s) => s.openWindow);
  const closeWindow = useWindowStore((s) => s.closeWindow);
  const focusWindow = useWindowStore((s) => s.focusWindow);
  const minimizeWindow = useWindowStore((s) => s.minimizeWindow);
  const toggleMaximize = useWindowStore((s) => s.toggleMaximize);
  const updatePosition = useWindowStore((s) => s.updatePosition);
  const updateSize = useWindowStore((s) => s.updateSize);
const minWindowSize = {
  width: Math.floor(desktopSize.width * 0.6),
  height: Math.floor(desktopSize.height * 0.7),
};
  return (
    <>
      <div
        ref={desktopRef}
        className='w-screen relative overflow-hidden h-[93dvh] bg-[url("./Desktop-bg.jpg")] bg-cover bg-center'
      >
        <div className="h-[90%] select-none w-min flex flex-wrap gap-6 flex-col">
          {DESKTOP_ICONS.map((icon) => (
            <button
              key={icon.id}
              onDoubleClick={() => openWindow(icon.id, icon.title,desktopSize)}
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
                src={icon.icon ? icon.icon : "./win-strt-btn.png"}
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
  cancel=".no-drag"
  bounds="parent"
    minWidth={minWindowSize.width}
  minHeight={minWindowSize.height}
  size={{
    width: win.isMaximized ? desktopSize.width : win.size.width,
    height: win.isMaximized ? desktopSize.height : win.size.height,
  }}

  position={{
    x: win.isMaximized ? 0 : win.position.x,
    y: win.isMaximized ? 0 : win.position.y,
  }}

  disableDragging={win.isMaximized}
  enableResizing={!win.isMaximized}

 
  onDragStart={(e, d) => {
    lastDragY.current = d.y;           
    draggingWindowId.current = win.id; 
    focusWindow(win.id);
  }}

 
 onDrag={(e, d) => {
  const isSideSnapped =
    win.size.height === desktopSize.height &&
    win.size.width === desktopSize.width / 2;

  if (d.x < SNAP_THRESHOLD) {
    setSnapPreview("left");
  } 
  else if (
    d.x + win.size.width >
    desktopSize.width - SNAP_THRESHOLD
  ) {
    setSnapPreview("right");
  } 
  else if (
    !isSideSnapped &&  
    d.y < SNAP_THRESHOLD
  ) {
    setSnapPreview("maximize");
  } 
  else {
    setSnapPreview(null);
  }
}}

 
  onDragStop={(e, d) => {
    setSnapPreview(null);
    draggingWindowId.current = null;

    const desktopWidth = desktopSize.width;
    const desktopHeight = desktopSize.height;

    const movingUp =
      lastDragY.current !== null &&
      d.y < lastDragY.current - 10; 

    
    if (d.x < SNAP_THRESHOLD) {
      updatePosition(win.id, { x: 0, y: 0 });
      updateSize(win.id, {
        width: desktopWidth / 2,
        height: desktopHeight,
      });
      return;
    }

    
    if (d.x + win.size.width > desktopWidth - SNAP_THRESHOLD) {
      updatePosition(win.id, { x: desktopWidth / 2, y: 0 });
      updateSize(win.id, {
        width: desktopWidth / 2,
        height: desktopHeight,
      });
      return;
    }

    
    if (movingUp && d.y < SNAP_THRESHOLD) {
      toggleMaximize(win.id);
      return;
    }

    
    updatePosition(win.id, { x: d.x, y: d.y });
  }}

 
  onResizeStart={() => focusWindow(win.id)}
  onResizeStop={(e, direction, ref, delta, position) => {
    updateSize(win.id, {
      width: ref.offsetWidth,
      height: ref.offsetHeight,
    });
    updatePosition(win.id, position);
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
      h-9 px-2
      flex items-center justify-between
      select-none
      cursor-grab active:cursor-grabbing
      ${isActive ? "bg-zinc-800" : "bg-zinc-700"}
    `}
                  onMouseDown={() => focusWindow(win.id)}
                >
                  {/* LEFT */}
                  <div className="flex items-center gap-2 no-drag cursor-default">
                    <div className="w-4 h-4 bg-white/20 rounded-sm" />
                    <span className="text-sm text-white font-medium">
                      {win.title}
                    </span>
                  </div>

                  {/* RIGHT */}
                  <div className="flex items-center no-drag">
                    {/* Minimize */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        minimizeWindow(win.id);
                      }}
                      className="w-8 h-8 hover:bg-white/10 text-white"
                    >
                      ─
                    </button>

                    {/* Maximize */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleMaximize(win.id);
                      }}
                      className="w-8 h-8 hover:bg-white/10 text-white"
                    >
                      {win.isMaximized ? "🗗" : "🗖"}
                    </button>

                    {/* Close */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        closeWindow(win.id);
                      }}
                      className="w-8 h-8 hover:bg-red-500 text-white"
                    >
                      ✕
                    </button>
                  </div>
                </div>

                {/* ================= CONTENT ================= */}
                <div className="h-[calc(100%-36px)] bg-zinc-950 p-4 text-gray-400 text-sm">
                  {win.title} window
                </div>
              </Rnd>
            );
          })}
        {snapPreview && (
          <div className="absolute inset-0 pointer-events-none">
            <div
              className={`
        absolute bg-gray-300 opacity-50 border border-blue-400
        ${snapPreview === "left" && "left-0 top-0 w-1/2 h-full"}
        ${snapPreview === "right" && "right-0 top-0 w-1/2 h-full"}
        ${snapPreview === "maximize" && "inset-0"}
      `}
            />
          </div>
        )}
      </div>
      <Taskbar />
    </>
  );
};

export default Desktop;
