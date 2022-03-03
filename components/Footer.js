import styles from '../styles/Footer.module.css';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CopyrightIcon from "@mui/icons-material/Copyright";
import CoffeeIcon from "@mui/icons-material/Coffee";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";


const Footer = () => {
    const buyCoffee=()=>{
        window.location.href="https://www.buymeacoffee.com/joshuaizu"
    }
    return ( 
        <div className={styles.footer}>
            <div className={styles.buycoffee}>
                <Button 
                variant='outlined' 
                className={styles.buycoffeebtn}
                startIcon={<CoffeeIcon/>}
                onClick={buyCoffee}
                >
                    Buy me A Coffee
                </Button>
            </div>
            <div className={styles.footerTxtDiv}>
                <Typography variant="body1" className={styles.alignCenter}>
                    Built and designed with love <FavoriteIcon className={styles.love}/>
                    by Joshua Izu
                </Typography>
                <Typography variant="body1">
                    All Rights Reserved  <CopyrightIcon/> 2022

                </Typography>
            </div>
            <div className={styles.footerIcons}>
                <a href="https://github.com/izuutech" className={styles.fIcons}><GitHubIcon /></a>
                <a href="https://wwww.twitter.com/amaechiizu1" className={styles.fIcons}><TwitterIcon /></a>
                <a href="https://www.instagram.com/iam_izuuranking" className={styles.fIcons}><InstagramIcon /></a>
            </div>
        </div>
     );
}
 
export default Footer;