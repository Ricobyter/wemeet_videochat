import React, { useContext } from 'react'
import { SocketContext } from '../SocketContext'
// import { Grid, Paper, Typography } from '@mui/material'
import './videostyling.css'
const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);


  return (

    <div className="grid justify-center flex-col grid-col-2">

      {/* Our Video */}
      {stream && (
        <div className="border-2 border-black p-4 m-4">
          <div className="grid gap-6">
            <video playsInline muted ref={myVideo} autoPlay width='520' className='video' />
            <h6 className="text-xl">{name || 'Name'}</h6>
          </div>
        </div>
      )}

      {/* Other User's Video */}
      {callAccepted && !callEnded && (
        <div className="border-2 border-black p-5 m-4">
          <div className="grid gap-6">
            <video playsInline ref={userVideo} autoPlay width='520' className='video' />
            <h6 className="text-xl">{call.name || 'Name'}</h6>
          </div>
        </div>
      )}

    </div>
  );
}

export default VideoPlayer

