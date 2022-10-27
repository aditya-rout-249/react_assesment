import React from 'react'
import { FormControl ,Button ,TextField} from '@mui/material';
const loginForm = ({handleSubmit ,handleRegister}) => (
    <div style={{ marginTop: 200, marginLeft: 600 }}>
      <form onSubmit={handleSubmit}>
        <FormControl sx={{ border: 1, borderRadius: 2 }}>
          <img
            src="/home/aryan_249/my-app/src/UserLogin.jpg"
            alt="User Login"
          />
          <TextField
            required
            id="outlined-required"
            label="Email"
            type="email"
            name="email"
            style={{ margin: 20 }}
          />

          <TextField
            required
            id="outlined-required"
            label="password"
            type="password"
            name="password"
            style={{ margin: 20 }}
          />

          <Button
            style={{ marginLeft: 20, marginRight: 20 }}
            variant="contained"
            type="submit"
          >
            Login
          </Button>

          <br />

          <Button
            type="button"
            variant="contained"
            onClick={handleRegister}
          >
            Register
          </Button>
        </FormControl>
      </form>
    </div>
  );
  
  export default loginForm;