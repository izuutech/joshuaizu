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
    return axios.get("https://joshuaizutechs.herokuapp.com/admincp/getpost")
    
}


const queryClient= new QueryClient();

const BlogForm = () => {
    
    
    const [logged, setLogged]=useState("false");
    const [jwt, setJwt]=useState("")
    useEffect(()=>{
        setLogged(localStorage.getItem("loggedIn"))
        setJwt(localStorage.getItem("jwt"))
    }, [])

    const {data: allBlogs}=useQuery("get-works", fetchWorks)
    
    
    const [refresh, setRefresh]=useState(false);

    //for filling and updating post title textfield in state
    const [title, setTitle]=useState("");
    const onTitle=(e)=>{
        
        setTitle(e.target.value);
    }

    //for filling and updating work description textfield in state
    const [content, setContent]=useState("");
    const onContent=(e)=>{
        
        setContent(e.target.value);
    }
    


    const addPost=(e)=>{
        e.preventDefault();
        console.log(JSON.stringify({title: title}))
        fetch("https://joshuaizutechs.herokuapp.com/admincp/createpost", 
        {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization": jwt
            },
            body: JSON.stringify({
                title: title,
                content: content,
                likes: 7
            })
        })
        .then(()=>{
            alert("Added Post!");
            setTitle("");
            setContent("");
        })
            .catch((err)=>alert(err))
    }
    const deletePost=(postId)=>{
        
        fetch(`https://joshuaizutechs.herokuapp.com/admincp/deletepost/${postId}`, 
        {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
                "Authorization": jwt
            }
        })
        .then((res)=>res.json())
        .then((data)=>{
            alert("Deleted Post!");
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
                Create Post
            </Typography>
            <form onSubmit={addPost} className={styles.form}>
                <TextField 
                value={title}
                label="Post Title"
                variant="outlined"
                color="secondary"
                rows={1}
                fullWidth
                required
                onChange={onTitle}
                className={styles.textField}
                />
                <TextField 
                value={content}
                label="Content"
                variant="outlined"
                color="secondary"
                multiline
                rows={4}
                fullWidth
                required
                onChange={onContent}
                className={styles.textField}
                />
                 <Button 
                    type="submit"
                    color="secondary"
                    variant="contained"
                >
                    Add Post
                </Button>
            </form>
            <List component="a">

                {
                    allBlogs?.data?.data.map(post=>(
                        
                            <ListItemButton key={post._id}>
                            <ListItemAvatar>
                                <Avatar 
                                onClick={()=>deletePost(post._id)}
                                >
                                <DeleteIcon />
                                </Avatar>
                            </ListItemAvatar>

                            <ListItemText 
                                primary={post.title}
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
 
export default BlogForm;