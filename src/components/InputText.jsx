import React from 'react'
import { TextField } from '@mui/material'

const InputText = ({label, type, onChange}) => {
  return (
    <div>
        <TextField sx={{marginBottom: '16px', width: '380px'}} size='small' id="outlined-basic" type={type} label={label} variant="outlined" onChange={onChange} />
    </div>
  )
}

export default InputText
