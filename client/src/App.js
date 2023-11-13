import { AppBar, Box, Toolbar, Typography} from '@mui/material'
import React from 'react'
import Notifications from './components/Notifications'
import VideoPlayer from './components/VideoPlayer'
import Options from './components/Options'


const App = () => {
  return (
    <Box>
        <AppBar position='static' fullWidth>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            WeMeet
          </Typography>
        </Toolbar>
        </AppBar>

        <VideoPlayer />
        <Options>
            <Notifications />
        </Options>
      
        </Box>
  )
}

export default App

