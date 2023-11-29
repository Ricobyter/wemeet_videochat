import React, { useContext } from 'react'
import { SocketContext } from '../SocketContext'
// import { Grid, Paper, Typography } from '@mui/material'
import './videostyling.css'
const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);


  return (

<div className='flex flex-row justify-center container max-sm:flex-col'>
      {/* Our Video */}
      {
        stream && (
          <div className='p-[8px] border-black m-[10px]'>
            <div className='gap-6 max-md:w-4/5 w-2/5 p-2'>   
            {/* item xs={12} md={6} gap={6}          */}
              <video playsInline muted ref={myVideo} autoPlay width='520' className='video'/>
              {/* <Typography variant='h6' gutterBottom align='left'>{name || 'Name'}</Typography> */}
              <h2 className='text-2xl font-semibold text-center'>{name || 'Name'}</h2>
            </div>

          </div>
          // sx={{
          //   padding: '8px',
          //   border: '2px solid black',
          //   margin: '10px',
          // }}
        )
      }
      

      {/*Other User's Video */}
      {
        callAccepted && !callEnded &&(
          <div className='p-[8px] border-black m-[10px]'>
            <div className='gap-6 max-md:w-4/5 w-2/5 p-2'>   
            {/* item xs={12} md={6} gap={6}          */}
              <video playsInline muted ref={myVideo} autoPlay width='520' className='video'/>
              {/* <Typography variant='h6' gutterBottom align='left'>{name || 'Name'}</Typography> */}
              <h2 className='text-2xl font-semibold text-center'>{name || 'Name'}</h2>
            </div>

          </div>
        )
      }
 



    </div>
  );
}

export default VideoPlayer

