import React, { useContext } from 'react'
import { SocketContext } from '../SocketContext'
// import { Grid, Paper, Typography } from '@mui/material'
import './videostyling.css'
const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);


  return (

    <div className="flex justify-center mt-5">

      {/* Our Video */}
      {stream && (
        <div className="border-2 border-black p-2 m-4 ">
          <div className="flex flex-col gap-6">
            <video playsInline muted ref={myVideo} autoPlay width='520' className='video' />
            <h6 className="text-xl font-semibold">{name || 'Name'}</h6>
          </div>
        </div>
      )}

      {/* Other User's Video */}
      {callAccepted && !callEnded && (
        <div className="border-2 border-black p-2 m-4">
          <div className="flex flex-col gap-6">
            <video playsInline ref={userVideo} autoPlay width='520' className='video' />
            <h6 className="text-xl font-semibold">{call.name || 'Name'}</h6>
          </div>
        </div>
      )}

    </div>
  );
}

export default VideoPlayer

