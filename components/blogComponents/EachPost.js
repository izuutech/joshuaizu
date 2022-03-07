import styles from '../../styles/Blog.module.css';
import Container from "@mui/material/Container";
import Link from 'next/link'
import Typography from "@mui/material/Typography";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import {useState, useEffect} from 'react';






const EachPost = ({post}) => {
    
    const lineBreaks=post.content.split("<br>");
    console.log(lineBreaks)
    const [theme, setTheme]=useState(true)
        const toggleTheme=()=>{
            setTheme(!theme)
        }
        const blueTheme=theme?(styles.blueSpace):(styles.noBlueSpace);
        const greenTheme=theme?(styles.greenSpace):(styles.noGreenSpace);
        const postHeadTheme=theme?(styles.postHead):(styles.offPostHead);
        const isLight=theme?(styles.visible):(styles.notVisible);
        const isDark=theme?(styles.notVisible):(styles.visible);
        
        
        const [likes, setLikes]=useState("")
        const like=()=>{
            let haveLiked=localStorage.getItem(`${post._id}`);

            if(haveLiked!="true"){
                fetch("https://joshuaizutechs.herokuapp.com/admincp/likepost/"+post._id)
                .then((res)=>res.json())
                .then((data)=>{
                    setLikes(data.data.likes);
                    localStorage.setItem(`${post._id}`, "true")
                    alert("You liked the post");
                })
                .catch((err)=>console.log(err))
            }else{
                alert("You already liked the post");
            }
        }
        useEffect(()=>{
            fetch("https://joshuaizutechs.herokuapp.com/admincp/getpost/"+post._id)
            .then((res)=>res.json())
            .then((data)=>{
                setLikes(data.data.likes);
            })
            .catch((err)=>console.log(err))
        }, [likes])
       
        
       
       
    return ( 
        <div className={styles.container}>
            
            <Container>
                <div className={styles.blogHead}>
                    <Link href="/blog">
                        <a className={styles.atagPost}><Typography variant="h4"  className={styles.link}>
                        POSTS
                    </Typography>
                    </a>
                    </Link>
                    <Typography variant="body2">My ramblings about things that exicite me. It&apos;s worth reading!</Typography>
                    <Typography variant="body2">
                        by Joshua Izu
                    </Typography>
                     </div>
                <div className={styles.flexContainer}>
                    <div className={styles.thePostContainer}>
                        <div className={blueTheme}>
                        <div className={postHeadTheme}>
                            <Typography variant="h5" className={styles.title}>
                                {post.title}<br/>
                                <Typography variant="body2">{likes} like(s)</Typography>
                            </Typography>
                            <ThumbUpIcon className={styles.titleShare} onClick={like}/>
                        </div>
                        <div className={styles.postDown}>
                            <Typography variant="body1">
                                {/* once you see <br> create new line */}
                                {
                                    lineBreaks.map(lineBreak=>(
                                       <div key={indexOf(lineBreak)}>
                                            {lineBreak}<br/><br/>
                                       </div> 
                                      
                                    ))
                                }
                            </Typography>
                        </div>
                        </div>
                        <div className={greenTheme}></div>
                    </div>
                    
                </div>
                <div className={styles.modePosition}>
                    <LightModeIcon className={isLight} onClick={toggleTheme}/>
                    <DarkModeIcon className={isDark} onClick={toggleTheme}/>
                </div>
            </Container>
        </div>
     );
}
 
export default EachPost;