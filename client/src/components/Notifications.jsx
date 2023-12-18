import React, { useContext} from 'react'
import { SocketContext } from '../SocketContext'

const Notifications = () => {
  const {answerCall, call, callAccepted} = useContext(SocketContext); 
  return (
<>
      {call.isReceivingCall && !callAccepted && (
        <div className="container flex justify-center mt-10 ">
          <h5 className="text-xl mr-2">{call.name} is calling : </h5>
          <button
            className="bg-blue-500 text-white px-4 py-2 ml-5"
            onClick={answerCall}
          >
            Answer
          </button>
        </div>
      )}
    </>
  )
}

export default Notifications