import styles from '../styles/Contact.module.css';
import FadeIn from "./FadeIn";
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import EmailIcon from "@mui/icons-material/Email";




const Contact = () => {

    const sendMail=()=>{
        window.location.href="mailto:izutechsofficial@gmail.com";
    }
    return ( 
        <div className={styles.contact}>
            <div className={styles.greenLine}></div>
        <FadeIn>
            <div className={styles.containerHead}>
                <Typography variant="h4" className={styles.contactHeadTxt}>/contact me</Typography>
            </div>
            <div className={styles.containerBody}>
            <Typography variant="h6" className={styles.contactHeadTxt}>What Can I Do For You?</Typography>
            <div className={styles.contactSpace}>
            <Typography variant="body1" className={styles.contactHeadTxt}>
            You can contact me via TikTok @iam_izuuranking. Alternatively, you can click the button below to reach me via email
            </Typography>
            </div>
            <div className={styles.contactSpace}>
            <Button variant="outlined" className={styles.btn} onClick={sendMail}>
                <EmailIcon className={styles.emailIcon}/>What&apos;s Up
            </Button>
            </div>
            </div>
        </FadeIn>
        </div> 
    );
}
 
export default Contact;