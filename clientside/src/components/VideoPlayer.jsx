import React, { useContext } from 'react'
import { SocketContext } from '../SocketContext'

import './videostyling.css'
const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);


  return (

    <div className="flex justify-center flex-row max-md:flex-col mt-5">

      {/* Our Video */}
      {stream && (
        <div className="border-2 border-black p-2 m-5">
          <div className="flex flex-col gap-2 justify-center items-center">
            <video playsInline muted ref={myVideo} autoPlay width='530' className='video' />
            <h6 className="text-xl font-semibold">{name || 'Name'}</h6>
          </div>
        </div>
      )}

      {/* Other User's Video */}
      {callAccepted && !callEnded && (
        <div className="border-2 border-black justify-center items-center p-2 m-4">
          <div className="flex flex-col gap-2">
            <video playsInline ref={userVideo} autoPlay width='530' className='video' />
            <h6 className="text-xl font-semibold">{call.name || 'Name'}</h6>
          </div>
        </div>
      )}

    </div>
  );
}

export default VideoPlayer

