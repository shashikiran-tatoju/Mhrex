import React from "react";
import  './Navbar.css';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Form from '../Form/form'
// import Doctor1 from '../../videos/Doctor1.mp4';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Navbar() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
     

{/* <nav id="navbar1" className="navbar navbar-expand-md   fixed-top">
	<div className="container">
    <span className="navbar-brand" style={{ color:"#fff"}}>Mherx</span>
    <button className="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span class="dark-blue-text">
    <i className="fa fa-bars fa-1x"></i></span>
    </button>
    
   <div className="collapse navbar-collapse " id="navbarSupportedContent1">
     <ul className="nav navbar-nav ml-auto">
	    <li className="nav-item"><a className="nav-link " id="active1" href="#Home" style={{ color:"#fff"}}>Home</a></li>
	    <li className="nav-item"><a className="nav-link " id="active1" href="#Home" style={{ color:"#fff"}}>Section</a></li>
	    <li className="nav-item"><a className="nav-link" id="active2" href="#Portfolio" style={{ color:"#fff"}}>About</a></li>
	    <li className="nav-item"><a className="nav-link" id="active3" href="#Contact" style={{ color:"#fff"}}> Contact</a></li>
	    <li className="nav-item"><a className="nav-link" id="active3" href="#Contact" style={{ color:"#fff"}}> Contact</a></li>

    </ul>
	</div>

	</div>
</nav> */}


{/* <!-- Navbar --> */}

<nav id="navbar1" class="navbar navbar-expand-sm navbar-dark   fixed-top">
	<div class="container-fluid">
	
    <span class="navbar-brand  logo" >
      {/* <img src='https://www.amagi.com/images/logo-blue.svg'></img> */}
      Mhrex
           </span>

    <button class="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
      <span class="dark-blue-text"><i class="fa fa-bars fa-1x " ></i></span>
    </button>
    
   <div class="collapse navbar-collapse " id="navbarSupportedContent1">
     <ul class="nav navbar-nav ml-auto">
	    <li class="nav-item"><a class="nav-link" id="active1" href="#Home">Home</a></li>
	    <li class="nav-item "><a class="nav-link" id="active2" href="#Portfolio">About</a></li>
	    <li class="nav-item"><a class="nav-link" id="active3" href="#Contact">Service</a></li>
	    <li class="nav-item"><a class="nav-link" id="active3" href="#Contact">Portfolio</a></li>
	    <li class="nav-item"><a class="nav-link" id="active3" href="#Contact">Login</a></li>
	    <li class="nav-item"><a class="nav-link" id="active3" href="#Contact" onClick={handleOpen}>Registration</a></li>

    </ul>
	</div>

	</div>
</nav>

<div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
             Registration Form
            </Typography>
            <Form/>
          </Box>
        </Fade>
      </Modal>
    </div>

    </div>
  );
}

export default Navbar;
