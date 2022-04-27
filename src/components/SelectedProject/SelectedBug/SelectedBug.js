import React from 'react'
import { Card, CardContent, CardActions, Typography, Chip, Divider, Box } from '@mui/material'
import { useSelector } from 'react-redux'
import DeleteBug from './UpdateBug/DeleteBug';
import UpdateBug from './UpdateBug/UpdateBug';

const SelectedBug = ({project_id, authorId, currentUserId}) => {
    const {_id, title, detail, status, priority} = useSelector((state) => state.selectedBug);
    
    return (
        <Card sx={{maxWidth: 500, mt: 2}}>
            <Typography sx={{fontSize: 14, fontWeight: 700, m: 1}}>Selected Bug Info</Typography>
            <Divider />
            <CardContent>
                {title ? 
                    <Box>
                        <Box sx={{m: 2}}>
                            <Typography gutterBottom sx={{fontSize: 12, fontWeight: 700, color: 'text.secondary'}} > TICKET TITLE </Typography>
                            <Typography gutterBottom color='text.secondary'> {title} </Typography>
                            <Typography gutterBottom sx={{fontSize: 12, fontWeight: 'bold', color: 'text.secondary'}} > DETAIL </Typography>
                            <Typography color='text.secondary'> {detail} </Typography>
                        </Box>
                        <Box sx={{display: 'flex', m: 2}}>
                            {status && <Box sx={{mr: 1}}>
                            <Typography gutterBottom sx={{fontSize: 12, fontWeight: 600, color: 'text.secondary'}}> STATUS </Typography>
                            <Chip label={status} variant='outlined' sx={{mr: 1}} />
                            </Box>}
                            {priority && <Box >
                            <Typography gutterBottom sx={{fontSize: 12, fontWeight: 600, color: 'text.secondary'}} > PRIORITY </Typography>
                            <Chip label={priority} variant='outlined' color='error' />
                            </Box>}
                        </Box>
                    </Box> :
                    <Typography>No Bug Selected</Typography>
                }
            </CardContent>
            <CardActions>
                {authorId === currentUserId && <UpdateBug project_id={project_id} id={_id} title={title} detail={detail} status={status} priority={priority} /> }
                {authorId === currentUserId && <DeleteBug project_id={project_id} id={_id} />}
            </CardActions>
        </Card>
    )
}

export default SelectedBug