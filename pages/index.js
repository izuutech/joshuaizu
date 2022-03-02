import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Hello.module.css';

import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import NewspaperIcon from "@mui/icons-material/Newspaper";
import WorkIcon from "@mui/icons-material/Work";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";


import Hello from '../components/Hello'
import About from '../components/About'
import Contact from '../components/Contact'
import Works from '../components/Works'
import Footer from '../components/Footer'


import { QueryClientProvider, QueryClient} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import {scroller} from 'react-scroll';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';



const queryClient= new QueryClient();


export default function Home() {

  const goToBlog=()=>{
      window.location.href="/blog"
  }
  const goToAbout=()=>{
      scroller.scrollTo("sAbout", {
          duration: 1000,
          delay: 0, 
          smooth: "easeInOutQuart"
      })
  }
  const goToContact=()=>{
      scroller.scrollTo("sContact", {
          duration: 1000,
          delay: 0, 
          smooth: "easeInOutQuart"
      })
  }
  const goToWorks=()=>{
      scroller.scrollTo("sWorks", {
          duration: 1000,
          delay: 0, 
          smooth: "easeInOutQuart"
      })
  }
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <AppBar position="static" className={styles.appbar}>
            <Toolbar>
                <ButtonGroup variant='text' className={styles.buttonGroup}>
                    <Button onClick={goToAbout} className={styles.btnn}><PersonIcon className={styles.menuIcon}/> About</Button>
                    <Button onClick={goToContact} className={styles.btnnn}><EmailIcon className={styles.menuIcon}/> Contact</Button>
                    <Button onClick={goToBlog} className={styles.btn}><NewspaperIcon className={styles.menuIcon}/> Blog</Button>
                    <Button onClick={goToWorks} className={styles.btn}><WorkIcon className={styles.menuIcon}/> Works</Button>
                    
                    
                </ButtonGroup>
            </Toolbar>
        </AppBar>
            
        <Hello />
        <div className="sAbout">
          <About/>
        </div>
        <div className="sContact">
          <Contact/>
        </div>
        <div className="sWorks">
          <Works/>
        </div>
        <Footer />
      </div>
    <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
    </QueryClientProvider>
  )
}
