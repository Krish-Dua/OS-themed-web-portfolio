import React from 'react'
import Clock from './Clock'
import useWindowStore from '../Store'
import projectIconImg from '../assets/projects.png'
import aboutIconImg from '../assets/about.png'
import skillsIconImg from '../assets/skills.png'
import resumeIconImg from '../assets/resume.png'
import contactIconImg from '../assets/contact.png'
import terminalIconImg from '../assets/terminal.png'
import standardPIconImg from '../assets/standardP.png'

const WINDOW_ICON_MAP = {
  projects: projectIconImg,
  about: aboutIconImg,
  skills: skillsIconImg,
  resume: resumeIconImg,
  contact: contactIconImg,
  terminal: terminalIconImg,
  standardP: standardPIconImg,
};



const Taskbar = () => {
  const windows = useWindowStore((s) => s.windows);
const activeWindowId = useWindowStore((s) => s.activeWindowId);
const restoreWindow = useWindowStore((s) => s.restoreWindow);
const toggleStart = useWindowStore((s) => s.toggleStart);


  return (
    <div className='w-full h-[7dvh] bg-[#1e69b1] opacity-95 flex item-center justify-between px-1 '>
<section className='flex items-center gap-8'>
  <img src="./win-strt-btn.png" onClick={toggleStart} className='h-[90%] border-r-2 border-gray-600 px-2 w-auto object-contain hover:scale-105  '  alt="Start" />
<div className='h-full w-full flex gap-4 items-center'>
{windows.map((win)=>{
  return(
    <img onClick={()=>{
      restoreWindow(win.id)
    }} src={WINDOW_ICON_MAP[win.id]} className={`h-[90%] w-auto  object-contain hover:scale-105 ${activeWindowId===win.id?"border-b-4 border-blue-300":" border-b-4 border-gray-400"} `} alt="" />
  )
})}
</div>
</section>
<section>
  <Clock/>
</section>
      
    </div>
  )
}

export default Taskbar
