import React from 'react'
import { Button } from '@mui/material'

const CommonButton = ({label, type}) => {
  return (
    <div>
        <Button sx={{backgroundColor: '#800000'}} type={type} fullWidth variant="contained">{label}</Button>
    </div>
  )
}

export default CommonButton
