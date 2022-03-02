
import { QueryClientProvider, QueryClient} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Blog from '../../components/blogComponents/Blog';
import Footer from '../../components/Footer'

//this imported styles is to affect only appbar
import styles from '../../styles/Hello.module.css';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import NewspaperIcon from "@mui/icons-material/Newspaper";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import HomeIcon from "@mui/icons-material/Home";

const queryClient= new QueryClient();


export default function Home() {

    const goToBlog=()=>{
      window.location.href="/blog"
    }
    const goToHome=()=>{
      window.location.href="/"
    }
    


  return (
    <QueryClientProvider client={queryClient}>
        <div>
        <AppBar position="static" className={styles.appbar}>
            <Toolbar>
                <ButtonGroup variant='text' className={styles.buttonGroup}>
                    
                    <Button onClick={goToHome} className={styles.btn}><HomeIcon className={styles.menuIcon}/> Home</Button>
                    <Button onClick={goToBlog} className={styles.btn}><NewspaperIcon className={styles.menuIcon}/> Blog</Button>
                    
                    
                    
                </ButtonGroup>
            </Toolbar>
        </AppBar>
        <Blog />
        <Footer />
        </div>
    <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
    </QueryClientProvider>
  )
}
