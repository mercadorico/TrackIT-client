import React from 'react';
import { Grid, TextField, IconButton, InputAdornment } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Input = ({half, name, handleChange, label, type, handleShowPassword}) => (
    <Grid item xs={12} sm={ half ? 6 : 12} >
        <TextField
            name={name}
            onChange={handleChange}
            variant='outlined'
            required
            fullWidth
            label={label}
            type={type}
            InputProps={name === 'password' ? {
                endAdornment : (
                    <InputAdornment position='end'>
                        <IconButton onClick={handleShowPassword} >
                            {type === 'password' ? <VisibilityIcon /> : <VisibilityOffIcon /> }
                        </IconButton>
                    </InputAdornment>
                ),
            } : null}
        />
    </Grid>
);

export default Input