import styles from '../styles/Hello.module.css';
import Image from 'next/image';

import Container from '@mui/material/Container';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Typography } from '@mui/material';
import { useState, useEffect } from 'react';



// const useStyles=makeStyles((theme)=>{
//     return{
//     toolbar: theme.mixins.toolbar
//     }
// })
const Hello = ({scrollContact}) => {
    //console.log(scrollContact())
    // const arrowScroll=()=>{

    // }
    // const classes=useStyles();
    const [blink, setBlink]=useState(true);
    useEffect(()=>{
        const interval=setInterval(()=>{
            setBlink(!blink);
        }, 500);
        return()=>clearInterval(interval)
    }, [blink])
    const isBlink = blink ? (styles.blinkingLine) : (styles.noBlinkingLine);
    
    return ( 
        <div className={styles.template}>
        <div className={styles.container}>
            
                
                <div className={styles.robotDiv}>
                    <Image src="/Robot.png" alt="Beautiful Robot Guy" layout="fill" objectFit="contain" priority="true" />
                </div>
                <Container>
                    <div className={styles.myText}>
                    <Typography variant="h4" className={styles.hello}>
                        Hello<span className={isBlink}>|</span>
                    </Typography>
                    <Typography variant="h6" className={styles.hello}>
                    I’m Joshua but that’s 
                    not the point here. Now, <br/>
                    Imagine Teaching Machines
                    </Typography>
                    
                    </div>
                </Container>
                <div className={styles.circleContainer}>
                <div className={styles.circleDiv} onClick={scrollContact}>
                    <ExpandMoreIcon className={styles.arroww} fontSize="large" />
                    <ExpandMoreIcon className={styles.arroww} fontSize="large" />
                    <ExpandMoreIcon className={styles.arroww} fontSize="large" />
                </div>
                </div>

        </div>
    </div>
    );
}
 
export default Hello;