import Head from 'next/head';
import EachPost from "../../components/blogComponents/EachPost"
// import useSWR from "swr";


// this imported styles is to affect only appbar
import styles from '../../styles/Hello.module.css';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import NewspaperIcon from "@mui/icons-material/Newspaper";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import HomeIcon from "@mui/icons-material/Home";




export const getStaticPaths=async ()=>{
    const res=await fetch(`https://joshuaizutechs.herokuapp.com/admincp/getpost`);
    const data=await res.json();

    
    const paths=data?.data.map(post=>{
        return{
            params:  {id: post._id.toString().replace(/\.json/, "")}
        }
    })
    return {
        paths,
        fallback: "blocking"
    }
}


export const getStaticProps=async (context)=>{
    
    const id=context.params.id;
    const res=await fetch("https://joshuaizutechs.herokuapp.com/admincp/getpost/"+id);
    
    const data=await res.json();
    
    return{
        props: {post: data.data},
        revalidate: 2
    }
}




const Post = ({post}) => {

    
    const goToBlog=()=>{
        window.location.href="/blog"
      }
      const goToHome=()=>{
        window.location.href="/"
      }

    

    return ( 
        <>
        <Head>
        <title>Joshua Izu</title>
        <meta name="description" content="My Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <AppBar position="static" className={styles.appbar}>
            <Toolbar>
                <ButtonGroup variant='text' className={styles.buttonGroup}>
                    
                    <Button onClick={goToHome} className={styles.btn}><HomeIcon className={styles.menuIcon}/> Home</Button>
                    <Button onClick={goToBlog} className={styles.btn}><NewspaperIcon className={styles.menuIcon}/> Blog</Button>
                    
                    
                    
                </ButtonGroup>
            </Toolbar>
        </AppBar>
        <EachPost post={post} />
        </>
     );
}
 
export default Post;