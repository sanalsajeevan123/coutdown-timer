import type { NextPage } from 'next'
import { useState } from 'react'
import SetTimer from '../components/setTimer'
import Timer from '../components/timer'

const Home: NextPage = () => {
  const [isTimerActive,setIsTimerActive] = useState<boolean>(false)
  const [time,setTime] = useState("")

  const handleTimerReset=()=>{
    setIsTimerActive(false)
    setTime("")
  }
 
  return (
    <div className={`w-full h-screen bg-cover bg-center bg-[url('/images/timerBackground.jpg')] bg-no-repeat`}>
      {!isTimerActive && 
      <SetTimer
        setIsTimerActive={setIsTimerActive}
        setTime={setTime}
        time={time}
      />}

      {isTimerActive && 
      <Timer
        time={time}
        handleTimerReset={handleTimerReset}
      />}
    </div>
  )
}

export default Home
