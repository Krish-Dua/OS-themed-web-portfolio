import React from 'react'
import Clock from './Clock'

const Taskbar = () => {
  return (
    <div className='w-full h-[7dvh] bg-[#1e69b1] opacity-95 flex item-center justify-between px-1 '>
<section>
  <img src="./win-strt-btn.png" className='h-[95%] w-auto object-contain rounded-full hover:scale-105  '  alt="" />

</section>
<section>
  <Clock/>
</section>
      
    </div>
  )
}

export default Taskbar
