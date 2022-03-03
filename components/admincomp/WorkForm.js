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
import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { QueryClientProvider, QueryClient} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';




const fetchWorks=()=>{
    return axios.get("https://joshuaizutechs.herokuapp.com/admincp/getwork")
    
}


const queryClient= new QueryClient();

const WorkForm = () => {


    const [logged, setLogged]=useState("false");
    const [jwt, setJwt]=useState("")
    useEffect(()=>{
        setLogged(localStorage.getItem("loggedIn"));
        setJwt(localStorage.getItem("jwt"))
    }, [])

    const {data: allWorks}=useQuery("get-works", fetchWorks)

    
    const [refresh, setRefresh]=useState(false);

    //for filling and updating work title textfield in state
    const [work, setWork]=useState("");
    const onWork=(e)=>{
        
        setWork(e.target.value);
    }
    //for filling and updating work description textfield in state
    const [workDesc, setWorkDesc]=useState("");
    const onWorkDesc=(e)=>{
        
        setWorkDesc(e.target.value);
    }
    //for filling and updating work description textfield in state
    const [workLang, setWorkLang]=useState("");
    const onWorkLang=(e)=>{
        
        setWorkLang(e.target.value);
    }
    //for filling and updating work github link textfield in state
    const [workGit, setWorkGit]=useState("");
    const onWorkGit=(e)=>{
        
        setWorkGit(e.target.value);
    }
    //for filling and updating work live link textfield in state
    const [workLink, setWorkLink]=useState("");
    const onWorkLink=(e)=>{
        
        setWorkLink(e.target.value);
    }


    const addWork=(e)=>{
        e.preventDefault();
        console.log(JSON.stringify({workName: work}))
        fetch("https://joshuaizutechs.herokuapp.com/admincp/creatework", 
        {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization": jwt
            },
            body: JSON.stringify({
                name: work,
                desc: workDesc,
                lang: workLang,
                github: workGit,
                link: workLink,  
            })
        })
        .then(()=>{
            alert("Added Work!");
            setWork("");
            setWorkDesc("");
            setWorkLang("");
            setWorkGit("");
            setWorkLink("");
        })
            .catch((err)=>alert(err))
    }
    const deleteWork=(workId)=>{

        fetch(`https://joshuaizutechs.herokuapp.com/admincp/deletework/${workId}`, 
        {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
                "Authorization": jwt
            }
        })
        .then((res)=>res.json())
        .then((data)=>{
            alert("Deleted Technology!");
        })
        .catch((err)=>alert(err))
        // call delete function then invote refresh on success
        //()=>setRefresh(!refresh)
    }




    if(logged=="true"){
    return ( 

        <QueryClientProvider client={queryClient}>
        <div className={styles.formDiv}>
            <Typography variant="h4">
                Create Project(Work) 
            </Typography>
            <form onSubmit={addWork} className={styles.form}>
                <TextField 
                value={work}
                label="Work Title"
                variant="outlined"
                color="secondary"
                rows={1}
                fullWidth
                required
                onChange={onWork}
                className={styles.textField}
                />
                <TextField 
                value={workDesc}
                label="Details"
                variant="outlined"
                color="secondary"
                multiline
                rows={4}
                fullWidth
                required
                onChange={onWorkDesc}
                className={styles.textField}
                />
                <TextField 
                value={workLang}
                label="Languages Used"
                variant="outlined"
                color="secondary"
                rows={1}
                fullWidth
                required
                onChange={onWorkLang}
                className={styles.textField}
                />
                <TextField 
                value={workGit}
                label="GitHub URL"
                variant="outlined"
                color="secondary"
                rows={1}
                fullWidth
                required
                onChange={onWorkGit}
                className={styles.textField}
                />
                <TextField 
                value={workLink}
                label="Live URL"
                variant="outlined"
                color="secondary"
                rows={1}
                fullWidth
                onChange={onWorkLink}
                className={styles.textField}
                />
                 <Button 
                    type="submit"
                    color="secondary"
                    variant="contained"
                >
                    Add Project
                </Button>
            </form>
            <List component="a">

                {
                    allWorks?.data?.data.map(work=>(
                        
                            <ListItemButton key={work._id}>
                            <ListItemAvatar>
                            <Avatar 
                            onClick={()=>deleteWork(work._id)}
                            >
                                <DeleteIcon />
                            </Avatar>
                            </ListItemAvatar>
                            <ListItemText 
                                primary={work.name}
                            />
                            </ListItemButton>
                        
                    ))
                }
                
                
            </List>
            
        </div>
        <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
        </QueryClientProvider>
     );
    }else{
        return(
            <div>
        Please login
        </div>
        )
    }
}
 
export default WorkForm;