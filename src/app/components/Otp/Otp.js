import { Box, Button, Dialog, DialogContent, DialogContentText, Slide, TextField, Typography } from '@mui/material'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import { CloseIcon } from '@mui/icons-material/Close';
import { PhonelinkLockOutlined } from '@mui/icons-material';
import Images from '../../assets/Images/Images';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
const Otp = ({ openDialog, onClose }) => {

    return (
        <>
            <Dialog
                open={openDialog}
                TransitionComponent={Transition}
                keepMounted
                onClose={onClose}
                aria-describedby="alert-dialog-slide-description"

                PaperProps={{
                    style: {
                        backgroundColor: "#F9F9F9",
                        boxShadow: "0px 1px 5px #00000012",
                        borderRadius: '14px',
                        width: '380px'
                    },
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', my: 1, mx: '17px' }}>
                    <CloseIcon onClick={onClose}  sx={{ color: '#898B8F', fontSize: '28px', cursor: 'pointer' }} />
                </Box>
                <Box sx={{ display: 'block', mx: 'auto', my: '-18px' }}>
                    <img src={Images.pic1} style={{ width: "80%" }} ></img>
                </Box>
                <DialogContent >
                    <Typography sx={{ fontSize: '15px', color: '#484848', p: 1 }}>Verify Otp</Typography>
                    <DialogContentText id="alert-dialog-slide-description">
                        <Box sx={{ '& > :not(style)': { m: 1 } }}>
                            <form >
                                <Box sx={{ my: 2, py: 1, display: 'flex', alignItems: 'flex-end', bgcolor: 'white', borderRadius: '12px' }}>
                                    <PhonelinkLockOutlined sx={{ color: 'action.active', m: 1, my: 0.5 }} />
                                    <TextField size="medium" fullWidth name="phoneno" placeholder="Phone Number" variant="standard"

                                        InputProps={{ disableUnderline: true }}
                                        required />
                                </Box>
                               

                                <Button type="submit" variant="contained" sx={{ bgcolor: '#3B5998', px: 3, py: 1, borderRadius: 2, width: '95%' }} >Verify</Button>
                            </form>

                        </Box>
                    </DialogContentText>

                </DialogContent>

            </Dialog>
            <ToastContainer />
        </>
    )

}

export default Otp
