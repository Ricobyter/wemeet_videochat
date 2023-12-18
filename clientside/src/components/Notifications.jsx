import React, { useContext} from 'react'
import { SocketContext } from '../SocketContext'

const Notifications = () => {
  const {answerCall, call, callAccepted} = useContext(SocketContext); 
  return (
   <div className='container mx-auto'>
   {call.isReceivingCall && ! callAccepted && (
    <div className='flex mx-auto mt-10'>
      <h1 className='text-3xl text-semibold mr-3'>{call.name} is <span className='text-red-700'>calling</span> :</h1>     
      <button className='bg-blue-600 text-white text-lg py-2 px-3 border rounded-xl pl-2' onClick={answerCall}>
        Answer
      </button>

    </div>
   )}
   </div>
  )
}

export default Notifications


