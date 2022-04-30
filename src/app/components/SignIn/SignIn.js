import React, { Fragment, useEffect, useRef, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import HttpsIcon from '@mui/icons-material/Https';
import PhoneIcon from '@mui/icons-material/Phone';
import CloseIcon from '@mui/icons-material/Close';
import { FormControl, TextField, Typography } from '@mui/material';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Service } from '../../config/service';
import Images from '../../assets/Images/Images';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SignIn = ({ openDialog, onClose }) => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm({});
  const password = useRef({});
  password.current = watch("password", "");
  const [open, setOpen] = useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const submitForm = async (data) => {

    try {
      const { response, status, message } = await Service.register(data)

      if (status === true && response === 200) {
        toast.success(message, {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
      }

    } catch (error) {
      toast.error("Something Wrong", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    }
  };



  return (
    <Fragment>
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
          <CloseIcon onClick={onClose} sx={{ color: '#898B8F', fontSize: '28px', cursor: 'pointer' }} />
        </Box>
        <Box sx={{ display: 'block', mx: 'auto', my: '-18px' }}>
          <img src={Images.pic1} style={{ width: "80%" }} ></img>
        </Box>
        <DialogContent >
          <Typography sx={{ fontSize: '15px', color: '#484848', p: 1 }}>Sign to your Account</Typography>
          <DialogContentText id="alert-dialog-slide-description">
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
              <form onSubmit={handleSubmit(submitForm)}>
                <Box sx={{my:2, py: 1, display: 'flex', alignItems: 'flex-end', bgcolor: 'white', borderRadius: '12px' }}>
                  <PhoneIcon sx={{ color: 'action.active', m: 1, my: 0.5 }} />
                  <TextField size="medium" fullWidth name="phoneno" placeholder="Phone Number" variant="standard"
                    {...register("phoneno", {
                      required: "required",
                      pattern: {
                        value: /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/,
                        message: "Entered value does not match phone no format"
                      }
                    })}
                    InputProps={{ disableUnderline: true }}
                    required />
                </Box>
                {errors.phoneno && <span role="alert" style={{ color: 'red' }}>{errors.phoneno.message}</span>}
                <Box sx={{my:2, py: 1, display: 'flex', alignItems: 'flex-end', bgcolor: 'white', borderRadius: '12px' }}>
                  <HttpsIcon sx={{ color: 'action.active', m: 1, my: 0.5 }} />
                  <FormControl fullWidth>
                    <TextField fullWidth name="password" placeholder="Password" variant="standard" InputProps={{ disableUnderline: true }}
                      type="password"
                      {...register("password", {
                        required: "required",
                        minLength: {
                          value: 7,
                          message: "min length is 7"
                        }
                      })}

                    />

                  </FormControl>
                </Box>
                {errors.password && <span style={{ color: 'red' }} role="alert">{errors.password.message}</span>}


                <Button type="submit" variant="contained" sx={{ bgcolor: '#3B5998', px: 3, py: 1, borderRadius: 2, width: '95%' }} >SIGN IN</Button>
              </form>

            </Box>
          </DialogContentText>
          <Typography sx={{ fontSize: '14px', textAlign: 'center', mt: 2 }}>Sign In With</Typography>
        </DialogContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-around', mb: 3, p: 1 }}>
          <Button sx={{ px: 5, py: 2, bgcolor: 'white', borderRadius: "12px" }} ><img src={Images.google}></img></Button>
          <Button sx={{ px: 5, py: 2, bgcolor: 'white', borderRadius: "12px" }}><img src={Images.facebook}></img></Button>
          <Button sx={{ px: 5, py: 2, bgcolor: 'white', borderRadius: "12px", boxShadow: '0px 2px 6px #3B599826' }}><img src={Images.email}></img></Button>
        </Box>
      </Dialog>
      <ToastContainer />
    </Fragment>
  )
}


export default SignIn