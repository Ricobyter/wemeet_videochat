import React, { useContext} from 'react'
import { SocketContext } from '../SocketContext'

const Notifications = () => {
  const {answerCall, call, callAccepted} = useContext(SocketContext); 
  return (
<div className='mx-auto '>
      {call.isReceivingCall && !callAccepted && (
        <div className="mx-auto justify-center mt-10 ">
          <h5 className="text-xl ">{call.name} is calling : </h5>
          <span>
            
          </span>
          
        </div>
      )}
    </div>
  )
}

export default Notifications