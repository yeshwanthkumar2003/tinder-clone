import React from 'react'
import './swipeButton.css'
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';


function Swipebuttons() {
  return (
    <div className='swipebuttons'>
      <IconButton className='swipebuttons_repeat'>
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className='swipebuttons_close'>
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className='swipebuttons_starrate'>
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton className='swipebuttons_favorite'>
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className='swipebuttons_flash'>
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  )
}

export default Swipebuttons
