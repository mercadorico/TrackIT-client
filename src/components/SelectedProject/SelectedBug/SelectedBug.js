import React from 'react'
import { Card, CardContent, CardActions, Typography, Button, Chip } from '@mui/material'
import { useSelector } from 'react-redux'

const SelectedBug = () => {
    const {title, detail, status, priority} = useSelector((state) => state.selectedBug);
    return (
        <Card sx={{maxWidth: 650, mt: 2, display: title ? '' : 'none'}}>
            <CardContent>
                <Typography gutterBottom> {title} </Typography>
                <Typography> {detail} </Typography>
                {status ? <Chip label={status} variant='outlined' color='error' /> : null}
                {priority ? <Chip label={priority} variant='outlined' color='primary' /> : null}
            </CardContent>
            <CardActions>
                <Button size='small'>Update</Button>
            </CardActions>
        </Card>
    )
}

export default SelectedBug