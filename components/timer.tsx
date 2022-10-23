import React, { useEffect, useState } from "react";

type MyProps = {
    time: any
    handleTimerReset: Function
}

const Timer = (props: MyProps) => {
    const [days, setDays] = useState('00')
    const [hours, setHours] = useState('00')
    const [minutes, setMinutes] = useState('00')
    const [seconds, setSeconds] = useState('00')
    let interval: any
    const startInterval = () => {
        interval = setInterval(() => {
            const now = new Date().getTime();
            const target = new Date(props.time).getTime();
            const distance = target - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            // console.log(`distance : ${distance}`)
            if (distance < 0) {
                clearInterval(interval);
                props.handleTimerReset();
            } else {
                setDays(`${days}`)
                setHours(`${hours}`)
                setMinutes(`${minutes}`)
                setSeconds(`${seconds}`)
            }
        }, 1000)
    }

    useEffect(() => {
        startInterval();

        return() => clearInterval(interval)
    }, [])

    return (
        <div className='w-full h-full flex flex-col items-center justify-center bg-slate-800 opacity-60 space-y-5 relative'>
            <div className='md:w-1/2 w-11/12 space-y-3 text-center'>
                <h1 className='font-bold text-white text-2xl'>Countdown Timer</h1>
                <h1 className='text-white'>Countdown to a really special date</h1>
            </div>
            <div className='md:w-1/2 w-11/12 rounded-md border-2 border-white h-48 opacity-60 flex items-center justify-evenly'>
                <div className='h-16 w-16 flex flex-col items-center justify-center space-y-2'>
                    <p className='text-5xl text-white font-semibold'>{days}</p>
                    <p className='text-white font-semibold'>Days</p>
                </div>
                <p className='text-6xl pb-5 text-white'>:</p>
                <div className='h-16 w-16 flex flex-col items-center justify-center space-y-2'>
                    <p className='text-5xl text-white font-semibold'>{hours}</p>
                    <p className='text-white font-semibold'>Hours</p>
                </div>
                <p className='text-6xl pb-5 text-white'>:</p>
                <div className='h-16 w-16 flex flex-col items-center justify-center space-y-2'>
                    <p className='text-5xl text-white font-semibold'>{minutes}</p>
                    <p className='text-white font-semibold'>Minutes</p>
                </div>
                <p className='text-6xl pb-5 text-white'>:</p>
                <div className='h-16 w-16 flex flex-col items-center justify-center space-y-2'>
                    <p className='text-5xl text-white font-semibold'>{seconds}</p>
                    <p className='text-white font-semibold'>Seconds</p>
                </div>
            </div>
            <button onClick={() => props.handleTimerReset()} className="border-2 border-white rounded-md text-white absolute top-5 right-5 flex items-center justify-center focus:outline-none">
                <p className="rotate-45 text-4xl pt-1 py-2.5 pl-3 pr-2">+</p>
            </button>
        </div>
    )
}
export default Timer