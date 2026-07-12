import React from 'react'

const DashboardHeader = () => {
  return (
    <>
      <div className="border-b border-white/10 px-5 py-3 justify-between flex items-center">
        <div className="flex items-center gap-3">
          {" "}
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-zinc-500">
            shorty.sh
          </p>
        </div>
        <div className="flex items-center gap-3 ">
            <p className="flex font-mono h-8 w-8 items-center justify-center text-xs uppercase  rounded-full border border-white/20 text-zinc-500">
                G
            </p>
            <p className="text-sm font-mono text-zinc-400">Gavindu</p>
        </div>
      </div>
    </>
  )
}

export default DashboardHeader