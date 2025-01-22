import React from 'react'

const Loader = () => {
  return (
    <div className="flex-col gap-4 w-full h-screen flex items-center justify-center overflow-clip inset-0 -z-10 bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
    <div
      className="w-20 h-20 border-4 border-transparent text-pink-400 text-4xl animate-spin flex items-center justify-center border-t-pink-400 rounded-full"
    >
      <div
        className="w-16 h-16 border-4 border-transparent text-pink-400 text-2xl animate-spin flex items-center justify-center border-t-pink-400 rounded-full"
      ></div>
    </div>
  </div>
  
  )
}

export default Loader