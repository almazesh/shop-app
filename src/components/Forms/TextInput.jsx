import React from 'react'
import { TextField } from '@mui/material';


export const TextInput = React.forwardRef(({
  type = 'text',
  className = "",
  placeholder,
  label,
  ...rest
}, ref) => {
  return (
    <TextField
      type={type}
      style={{marginTop:'15px'}}
      fullWidth
      ref={ref}
      variant="outlined"
      label={label}
      {...rest}
    />
  )
})