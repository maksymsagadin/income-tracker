import React from 'react'
import CustomSnackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

// import useStyles from './styles'

const Snackbar = ({ open, setOpen, action }) => {
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') return

        setOpen(!open)
    }

    return (
        <CustomSnackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={open} autoHideDuration={5000} onClose={handleClose}>
            <MuiAlert severity={ action === 'add' ? 'Success' : 'Error'} elevation={6} variant='filled' onClose={handleClose}>
                { action === 'add' ? 'Transaction created successfully.' : 'Transaction modified successfully.'}
            </MuiAlert>
        </CustomSnackbar>
    )
}

export default Snackbar