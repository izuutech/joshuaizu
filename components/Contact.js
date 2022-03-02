import styles from '../styles/Contact.module.css';
import FadeIn from "./FadeIn";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import EmailIcon from "@mui/icons-material/Email";


const Contact = () => {
    return ( 
        <div className={styles.contact}>
            <div className={styles.greenLine}></div>
        <FadeIn>
            <div className={styles.containerHead}>
                <Typography variant="h4" className={styles.contactHeadTxt}>/contact me</Typography>
            </div>
            <div className={styles.containerBody}>
            <Typography variant="h5" className={styles.contactHeadTxt}>What Can I Do For You?</Typography>
            <div className={styles.contactSpace}>
            <Typography variant="body1" className={styles.contactHeadTxt}>
            You can contact me via izuuushs@gmail.com or <br/>
            by clicking the button below
            </Typography>
            </div>
            <div className={styles.contactSpace}>
            <Button variant="outlined" className={styles.btn}>
                <EmailIcon className={styles.emailIcon}/>What's Up
            </Button>
            </div>
            </div>
        </FadeIn>
        </div> 
    );
}
 
export default Contact;