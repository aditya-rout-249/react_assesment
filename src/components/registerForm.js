import React from 'react'
import { FormControl ,Button ,TextField} from '@mui/material';
const RegisterForm = ({handleSubmit})=>(
    <div style={{ marginTop: 200, marginLeft: 600 }}>
      <form onSubmit={handleSubmit}>
        <FormControl sx={{ border: 1, borderRadius: 2 }}>
          <h6> Registeration Form</h6>
          <TextField
            required
            id="outlined"
            multiline
            label="Email"
            type="email"
            name="email"
            placeholder="Email"
            style={{ margin: 10 }}
          />
          <TextField
            required
            id="outlined"
            multiline
            label="Password"
            type="password"
            name="password"
            placeholder="Password"
            style={{ margin: 10 }}
          />
          <br />
          <Button
            type="Submit"
            variant="contained"
            style={{ marginLeft: 40, marginRight: 40 }}
          >
            Register
          </Button>
        </FormControl>
      </form>
    </div>
  );

export default RegisterForm;