import React from "react";
import useWindowStore from "../Store";
import projectIconImg from "../assets/projects.png";
import aboutIconImg from "../assets/about.png";
import skillsIconImg from "../assets/skills.png";
import resumeIconImg from "../assets/resume.png";
import contactIconImg from "../assets/contact.png";
import terminalIconImg from "../assets/terminal.png";
import standardPIconImg from "../assets/standardP.png";

const DESKTOP_ICONS = [
  {
    id: "projects",
    title: "Projects",
    subtitle: "Things I’ve built",
    icon: projectIconImg,
    type: "window",
  },
  {
    id: "about",
    title: "About Me",
    subtitle: "A little about me",
    icon: aboutIconImg,
    type: "window",
  },
  {
    id: "skills",
    title: "Skills & Education",
    subtitle: "My Skills and Education",
    icon: skillsIconImg,
    type: "window",
  },
  {
    id: "resume",
    title: "Resume",
    subtitle: "View or download my resume (PDF)",
    icon: resumeIconImg,
    type: "pdf",
    url: "./Krish_Dua_Resume.pdf",
  },
  {
    id: "contact",
    title: "Contact",
    subtitle: "Let’s connect",
    icon: contactIconImg,
    type: "window",
  },
  {
    id: "terminal",
    title: "Terminal",
    subtitle: "Interactive terminal",
    icon: terminalIconImg,
    type: "window",
  },
  {
    id: "standardP",
    title: "Standard Portfolio",
    subtitle: "A simple and Classic portfolio",
    icon: standardPIconImg,
    type: "external",
    url: "https://www.google.com",
  },
];

const SOCIAL_LINKS = [
  {
    id: "github",
    title: "GitHub",
    icon: "./github.png",
    url: "https://github.com/krish-dua",
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    icon: "./linkedin.png",
    url: "https://linkedin.com/in/krish-dua-6a8a05347",
  },
  {
    id: "instagram",
    title: "Instagram",
    icon: "./instagram.jpg",
    url: "https://instagram.com/Krish._.d",
  },
  //   {
  //     id: "email",
  //     title: "Email",
  //     icon: "./mail.png",
  //     url: "mailto:krishdua747@gmail.com",
  //   },
];

const StartMenu = ({ desktopSize,logout }) => {
  const isStartOpen = useWindowStore((s) => s.isStartOpen);
  const closeStart = useWindowStore((s) => s.closeStart);
  const openWindow = useWindowStore((s) => s.openWindow);
  const clearStates = useWindowStore((s) => s.clearStates);


  if (!isStartOpen) return null;

  const handleItemClick = (icon) => {
    if (icon.type === "window") {
      openWindow(icon.id, icon.title, desktopSize);
    }

    if (icon.type === "pdf") {
      window.open(icon.url, "_blank", "noopener,noreferrer");
    }

    if (icon.type === "external") {
      window.open(icon.url, "_blank", "noopener,noreferrer");
    }

    closeStart();
  };

  return (
    <div
      className="
        absolute bottom-0 left-0
        w-[40%] h-min
        border border-zinc-700
        rounded-sm
        shadow-2xl
        flex
        flex-col
        overflow-hidden
        z-9999
        select-none
      "
      onMouseDown={(e) => e.stopPropagation()}
    >
      <header
        className="
h-min
    flex items-center gap-6
    p-3
    
    bg-[#215372]
    opacity-95
    border-b border-[#c9c9c9]
  "
      >
        <div className="w-9 h-9 rounded-full bg-gray-400" />
        <span className="font-semibold text-lg text-white">
          Krish Dua • Full Stack Developer
        </span>
      </header>
      <main className="flex w-full h-full">
        {/* ================= LEFT : APPS ================= */}
        <div className="w-2/3 p-3 overflow-y-auto rounded md bg-white">
          {DESKTOP_ICONS.map((icon) => (
            <button
              key={icon.id}
              onClick={() => handleItemClick(icon)}
              className="
              w-full
              flex items-start gap-5
              
              p-2
              rounded-md
              hover:bg-zinc-600/10
              text-left
              transition
            "
            >
              {/* ICON */}
              <img
                src={icon.icon}
                alt={icon.title}
                draggable={false}
                className="w-9 h-9 object-contain mt-1"
              />

              {/* TEXT */}
              <div className="flex flex-col">
                <span className=" text-sm font-medium">{icon.title}</span>

                {icon.subtitle && (
                  <span className="text-xs  text-gray-700 leading-snug">
                    {icon.subtitle}
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* ================= RIGHT : SOCIAL ================= */}
        <div className="w-1/3 bg-[#215372] opacity-90 p-3 border-l flex flex-col  justify-between border-zinc-700">
          <div>
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
              flex items-center gap-3
              p-2 rounded-md
              hover:bg-white/10
              text-white text-md
              transition
            "
              >
                <img
                  src={link.icon}
                  alt={link.title}
                  className="w-7 h-7 rounded-sm object-contain"
                />
                {link.title}
              </a>
            ))}
          </div>

          <button
  onClick={() => {
    logout();
    closeStart()
    clearStates();
  }}
  className="
    text-[13px]
    text-gray-100
    mx-auto
    w-fit
    px-3 py-1
    rounded
    bg-[#971b1b]
    hover:bg-[#a02424]
    active:bg-[#701616]
    border border-[#5a1414]
    focus:outline-none
  "
>
  Log out &#91;-&gt;
</button>

        </div>
      </main>
    </div>
  );
};

export default StartMenu;
