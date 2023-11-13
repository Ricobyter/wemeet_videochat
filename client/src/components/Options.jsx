import React, { useContext, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import { SocketContext } from '../SocketContext'
import { Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import Assignment from '@mui/icons-material/Assignment';
import Phone from '@mui/icons-material/Phone';
import PhoneDisabled from '@mui/icons-material/PhoneDisabled';
const Options = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');

  return (
    <Container elevation={10} >
      <Paper elevation={15} sx={{ padding: 2, margin: 3 }}>
        <form noValidate autoComplete='off'>
          <Grid container gap={2} sx={{justifyContent: 'center'}}>
            <Grid item xs={12} md={6}>
              <Typography gutterBottom variant='h6'>Account Info</Typography>
              <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
              <CopyToClipboard text={me}>
                <Button sx={{marginTop: 2}} color='primary' fullWidth startIcon={<Assignment fontSize="large" />}>Copy Your ID</Button>
              </CopyToClipboard>


            </Grid>
            <Grid item xs={12} md={5.75}>
              <Typography gutterBottom variant='h6'> Call Other</Typography>
              <TextField label="Make a Call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
              {console.log(idToCall)}
              {callAccepted && !callEnded ? (
                <Button variant='contained' color='secondary' sx={{marginTop: 2}} startIcon={<PhoneDisabled fontSize='large'
                />} fullWidth onClick={leaveCall}>
                  Hang Call
                </Button>
              ) : (
                <Button variant="contained" color="primary" startIcon={<Phone fontSize="large" />} fullWidth onClick={() => callUser(idToCall)}
                >
                  Call
                </Button>
              )
              }

            </Grid>

          </Grid>

        </form>
        {children}
      </Paper>
    </Container>
  )
}

export default Options
