import { Avatar, Grid, Paper } from '@mui/material'
import React, {useState} from 'react'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = () => {
    const paperStyle = {
        padding: 20, height: '70vh', width: 280, margin: "20px auto" 
    }
    const avatarStyle = {
        backgroundColor: '#0d660d'
    }
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [info, setInfo] = useState("")

    // This is Hardcoded For Testing Purpose.
    const login = ()=> {
            if(username === "admin" && password === "admin"){
                setInfo("Login info is correct")
            }else{
                setInfo("Invalid Login Info")
            }
    }
    
    return <Grid>
        <Paper elevation={10} style={paperStyle}>
           <Grid align="center">
           <Avatar style={avatarStyle}>
                <LockOpenIcon/>
            </Avatar>
          <h2>Log In</h2>
           </Grid>
           <TextField onChange={(e)=> setUsername(e.target.value)} label='Username' placeholder='Enter Username' fullWidth={true} required></TextField>
           <br/>    <br/>
           <TextField onChange={(e)=> setPassword(e.target.value)}  type='password' label='Password' placeholder='Enter Password' fullWidth={true} required></TextField>
           <br/>    <br/>
            <Button onClick={()=> login()} type='submit' variant='contained' fullWidth>Sign In</Button>
            <h4>{info}</h4>
        </Paper>
    </Grid>
}

export default Login