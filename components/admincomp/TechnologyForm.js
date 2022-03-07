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
import { useState, useContext, useEffect } from 'react';
import {UserContext} from '../contexts/userContext';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchTech=()=>{
    return axios.get("https://joshuaizu.vercel.app/admincp/gettech")
    
}

const TechnologyForm = () => {
    

    const [logged, setLogged]=useState("false")
    const [jwt, setJwt]=useState("")
    useEffect(()=>{
        setLogged(localStorage.getItem("loggedIn"))
        setJwt(localStorage.getItem("jwt"))
    }, [])


    const {data: allTechs}=useQuery("get-techs", fetchTech)

    const [tech, setTech]=useState("");
    const [refresh, setRefresh]=useState(false)
    const onTech=(e)=>{
        
        setTech(e.target.value);
    }
    const addTech=(e)=>{
        e.preventDefault();
        console.log(localStorage.getItem("jwt"))
        fetch("https://joshuaizu.vercel.app/admincp/createtech", 
        {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization": jwt
            },
            body: JSON.stringify({technologyName: tech})
        })
        .then((res)=>res.json())
        .then((data)=>{
            if(data.error){
                alert(data.error);
            }else{
                
                alert("Added Technology!");
                setTech("");
            }
            
        })
        .catch((err)=>alert(err))
    }
    const deleteTech=(techId)=>{
        
        //let confirm=confirm();
        if(confirm("Proceed to delete?")==true){
        fetch(`https://joshuaizu.vercel.app/admincp/deletetech/${techId}`, 
        {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
                "Authorization": jwt
            }
        })
        .then((res)=>res.json())
        .then((data)=>{
            if(data.error){
                alert(data.error)
            }else{
                alert("Deleted Technology!");
            }
        })
        .catch((err)=>alert(err))
        
        // call delete function then invote refresh on success
        //()=>setRefresh(!refresh)
    }
    }



    if(logged=="true"){
        return ( 
            <div className={styles.formDiv}>
                <Typography variant="h4">
                    Update Tech Skill
                </Typography>
                <form onSubmit={addTech} className={styles.form}>
                    <TextField 
                    value={tech}
                    label="Technology Name"
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    required
                    onChange={onTech}/>
                    <Button 
                        type="submit"
                        color="secondary"
                        variant="contained"
                    >
                        Add Tech
                    </Button>
                </form>
                <List component="a">

                    {
                        allTechs?.data?.data.map(tech=>(
                            
                                <ListItemButton key={tech._id}>
                                <ListItemAvatar>
                                    <Avatar 
                                    onClick={()=>deleteTech(tech._id)}
                                    >
                                        <DeleteIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText 
                                    primary={tech.technologyName} 
                                />
                                </ListItemButton>
                            
                        ))
                    }
                    
                    
                </List>
                
            </div>
        );
    }else{
        return(
            <div>
        Please login
        </div>
        )
    }
}
 
export default TechnologyForm;