import React from 'react'


const SideBarView = ({showMenu}) => {
  return (
    <div className={`${showMenu ? "left-0" : "left-[-100%]"}
     fixed bottom-0 top-0 w-[50%]
     transition-all duration-300`}>
        <div className='card'>
            {/* User section */}
            <div className="flex items-center justify-start gap-3">
                
            </div>
            <h1>Hello User</h1>
            <h1 className="text-sm text-slate-500">Premium User</h1>
        </div>
    </div>
  )
}

export default SideBarView