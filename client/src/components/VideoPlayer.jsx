import React, { useContext } from 'react'
import { SocketContext } from '../SocketContext'
import { Grid, Paper, Typography } from '@mui/material'
import './videostyling.css'
const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);


  return (


    <Grid container sx={{
      justifyContent: 'center',
    }}>
      {/* Our Video */}
      {
        stream && (
          <Paper sx={{
            padding: '8px',
            border: '2px solid black',
            margin: '10px',
          }}>
            <Grid item xs={12} md={6} gap={6}>            
              <video playsInline muted ref={myVideo} autoPlay width='520' className='video'/>
              <Typography variant='h6' gutterBottom align='left'>{name || 'Name'}</Typography>
            </Grid>

          </Paper>
        )
      }
      

      {/*Other User's Video */}
      {
        callAccepted && !callEnded &&(
          <Paper sx={{
            padding: '10px',
            border: '2px solid black',
            margin: '10px'
          }}>
            <Grid item xs={12} md={6}>
              
              <video playsInline ref={userVideo} autoPlay width='520' className='video'/>
              <Typography variant='h6' gutterBottom align='left'>{call.name || "Name"}</Typography>
            </Grid>   
          </Paper>
        )
      }
 


    </Grid>
  );
}

export default VideoPlayer

