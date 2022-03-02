import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
//import  {makeStyles}  from "@mui/styles";
import CircleIcon from '@mui/icons-material/Circle';
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';
import styles from '../styles/Hello.module.css';
import Button  from "@mui/material/Button";
import { useEffect, useState } from "react";
import FadeSide from "./FadeSide"; 
import FadeHello from "./FadeHello"; 


// const useStyles=makeStyles({
//     container: {
//         display: "flex",
//     },
//     greenContainer: {
//         backgroundColor: "#64ffda",
//         minWidth: "50%"
//     },
//     whiteContainer: {
//         backgroundColor: "red",
//         minWidth: "50%",
//         display: "flex",
//         justifyContent: "end",
//     }
// })


const Hello = () => {
    // const classes=useStyles();
    //state for blinking scroll down text
    const [isIcon, setIsIcon]=useState(false);
    const handleMenu=()=>{
        setIsIcon(!isIcon)
        console.log(isIcon)
    }

    //the close munu function is for closing the menu when the outside window is pressed
    const closeMenu=()=>{
        setIsIcon(false)
        console.log(isIcon)
    }
    const menuState=isIcon ? (styles.menuTab) : (styles.noMenuTab);
    const menuIconState=isIcon ? (styles.noMenuIcon) : (styles.menuIcon);
    const xIconState=isIcon ? (styles.menuX) : (styles.noMenuX);
    return ( 
    <div className={styles.template}>
    <div className={styles.container}>
        <FadeSide>
        <Container className={styles.greenContainer} onClick={closeMenu} >
            <Typography variant="h5">JOSHUA IZU</Typography>
            <Typography variant="body2">Imagine Teaching Machines</Typography>
            <div className={styles.scrollDown}>
                <Typography variant="body2">scroll down</Typography>
            </div>
        </Container>
        </FadeSide>
        <Container className={styles.whiteContainer}>
                
                {/* <CircleIcon component={MenuIcon}> */}
            <div className={styles.navbarBox}>
            <Button variant="text" className={styles.navbarButton}>Blog</Button>
            <Button variant="text" className={styles.navbarButton}>Works</Button>
            <Button variant="text" className={styles.navbarButton}>Contact</Button>
            <Button variant="text" className={styles.navbarButton}>About</Button>
                    <MenuIcon className={menuIconState} onClick={handleMenu}/>
                    <CancelIcon className={xIconState} onClick={handleMenu}/>
            </div>
                {/* </CircleIcon> */}
        </Container>
        </div>
        <FadeHello>
        <div className={styles.hello}>
            <Typography variant="h1" fontWeight="bold" >HE<br/>LLO<span className={styles.greenDot}>.</span></Typography>
        </div>
        </FadeHello>
        
        <Container className={menuState}>
       
            <Typography variant="h4" className={styles.alignRight}>Joshua Izu</Typography>
            <Typography variant="body2" className={styles.alignRight}>Imagine Teaching Machines</Typography><br/><br/>
            <Typography variant="h6">/blog</Typography>
            <Typography variant="h6">/works</Typography>
            <Typography variant="h6">/contact Me</Typography>
            <Typography variant="h6">/about</Typography>
        </Container>
        
    </div> );
}
 
export default Hello;