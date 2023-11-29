import React, { useContext} from 'react'
import { SocketContext } from '../SocketContext'
import { Button, Typography } from '@mui/material';

const Notifications = () => {
  const {answerCall, call, callAccepted} = useContext(SocketContext); 
  return (
   <>
   {call.isReceivingCall && ! callAccepted && (
    <div style={{display: 'flex', justifyContent: 'center', marginTop: 10}}>
      <Typography variant='h5'>{call.name} is calling :</Typography>
       
      <Button variant='contained' color='primary' sx={{marginLeft: 2}} onClick={answerCall}>
        Answer
      </Button>

    </div>
   )}
   </>
  )
}

export default Notifications