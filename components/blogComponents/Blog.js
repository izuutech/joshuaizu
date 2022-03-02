import Container from "@mui/material/Container";
import Link from 'next/link'
import Typography from "@mui/material/Typography";
import CoffeeIcon from "@mui/icons-material/Coffee";
import styles from '../../styles/Blog.module.css';
import {useQuery} from 'react-query';
import axios from "axios";


const fetchPosts=()=>{
    return axios.get("http://joshuaizutechs.herokuapp.com/admincp/getpost/users?page=1")
}


const Blog = () => {

    const {data: posts}=useQuery("get-posts", fetchPosts)
    
    const buyCoffee=()=>{
        window.location.href="https://www.buymeacoffee.com/joshuaizu"
    }
    //write a function for next page
    //data is already accessible via posts?.data.data.prevPage
    //and posts?.data.data.nextPage
    return ( 
        
        <div className={styles.container}>
            <Container>
                <div className={styles.blogHead}>
                    <Typography variant="h4">
                        POSTS
                    </Typography>
                    <Typography variant="body2">
                        My ramblings about things that exicite
                        me. It's worth reading!
                    </Typography>
                    
                    
                </div>
                <div className={styles.flexContainer}>
                    
                    {
                        posts?.data?.data.map((post)=>(
                            <Link href={`/blog/${post._id}`} key={post._id}>
                            <div className={styles.postContainer} >
                                <div className={styles.blueSpace}>
                                <div className={styles.postHead}>
                                    <Typography variant="h5" className={styles.title}>
                                        {post.title}
                                    </Typography>
                                    <CoffeeIcon className={styles.titleShare} onClick={buyCoffee}/>
                                </div>
                                <div className={styles.postDown}>
                                    <Typography variant="body1">
                                        

                                        {/* output a part of the string (the first 1000 characters) */}
                                    {post.content.substring(0, 200)}
                                    </Typography>
                                </div>
                                </div>
                                <div className={styles.greenSpace}></div>
                            </div>
                            </Link>
                        ))
                    }
                    
                </div>
               
            </Container>
        </div>

     );
}
 
export default Blog;