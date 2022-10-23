import React from "react";

type MyProps = {
    setIsTimerActive:Function
    setTime:Function
    time:any
}

const SetTimer=(props:MyProps)=>{
    return(
        <div className='w-full h-full flex flex-col items-center justify-center bg-slate-800 opacity-60 space-y-5'>
            <div className='md:w-1/2 w-11/12 space-y-3 flex flex-col justify-between h-80 border-2 border-slate-400 rounded-md p-3'>
                <div className="w-full space-y-5 flex flex-col items-center justify-center py-4">
                    <label htmlFor="datetime" className="md:text-5xl text-3xl text-white font-semibold">Choose Date & Time</label>
                    <input onChange={(e)=>props.setTime(e.target.value)} value={props.time} type="datetime-local" name="datetime" id="datetime" className="border border-gray-300 rounded-md py-1 sm:px-5 px-2 sm:text-lg font-semibold opacity-90 focus:outline-none"/>
                </div>
                <div className="w-full flex items-center justify-center space-x-5">
                    <button onClick={()=>props.setTime("")} className="py-2 w-28 rounded-md bg-gray-500 text-white transform duration-300 hover:scale-110 focus:outline-none">Reset</button>
                    <button disabled={props.time == "" ? true : false} onClick={()=>props.setIsTimerActive((prevState:boolean)=> !prevState)} className="py-2 w-28 rounded-md bg-gray-600 text-white disabled:cursor-default transform duration-300 hover:scale-110 focus:outline-none">Set Timer</button>
                </div>
            </div>
        </div>
    )
}
export default SetTimer