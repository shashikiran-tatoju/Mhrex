import React from 'react'
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

function Form() {
  return (
      <> 
      {/* <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="First Name" variant="standard" />
      <TextField id="standard-basic" label="Last Name" variant="standard" />
      <TextField id="standard-basic" label="Email" variant="standard" />
      <TextField id="standard-basic" label="Mobile no" variant="standard" />
      <TextField id="standard-basic" label="" variant="standard" />
    </Box> */}
    <form class="row g-3">
    <div class="col-md-12">
    <label for="inputEmail4" class="form-label">First Name</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-12">
    <label for="inputPassword4" class="form-label">Last Name</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-md-12">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-12">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-6">
    <label for="inputState" class="form-label">State</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-12">
  <label for="formFileSm" class="form-label">upload file</label>
  <input class="form-control form-control-sm" id="formFileSm" type="file"/>
</div>
  
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form>
    </>

  )
}

export default Form