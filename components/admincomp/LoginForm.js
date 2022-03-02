import styles from '../../styles/TechnologyForm.module.css';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import {UserContext} from '../contexts/userContext';
import { useContext } from 'react';


const LoginForm = () => {

    const {login}=useContext(UserContext);
    

    const [password, setPassword]=useState("");
    const onPass=(e)=>{
        setPassword(e.target.value);
    }
    
    const offDefault=(e)=>{
        e.preventDefault();
        login(password);
    }




    return ( 
        <div className={styles.formDiv}>
             <Typography variant="h4">
                Login
            </Typography>
            <form onSubmit={(e)=>offDefault(e)} className={styles.form} method="POST">
                <TextField 
                value={password}
                label="Password"
                name="password"
                variant="outlined"
                color="secondary"
                fullWidth
                required
                onChange={onPass}/>
                 <Button 
                    type="submit"
                    color="secondary"
                    variant="contained"
                >
                    Login
                </Button>
            </form>
            
        </div>
     );
}
 
export default LoginForm;