import styles from '../../styles/Blog.module.css';
import Container from "@mui/material/Container";
import Link from 'next/link'
import Typography from "@mui/material/Typography";
import CoffeeIcon from "@mui/icons-material/Coffee";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import {useState} from 'react';






const EachPost = ({post}) => {
    
    const [theme, setTheme]=useState(true)
        const toggleTheme=()=>{
            setTheme(!theme)
        }
        const blueTheme=theme?(styles.blueSpace):(styles.noBlueSpace);
        const greenTheme=theme?(styles.greenSpace):(styles.noGreenSpace);
        const postHeadTheme=theme?(styles.postHead):(styles.offPostHead);
        const isLight=theme?(styles.visible):(styles.notVisible);
        const isDark=theme?(styles.notVisible):(styles.visible);
        const buyCoffee=()=>{
            window.location.href="https://www.buymeacoffee.com/joshuaizu"
        }

    
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
                                {post.title}
                            </Typography>
                            <CoffeeIcon className={styles.titleShare} onClick={buyCoffee}/>
                        </div>
                        <div className={styles.postDown}>
                            <Typography variant="body1">
                            {post.content}
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