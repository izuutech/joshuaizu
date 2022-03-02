import styles from '../../styles/Navigate.module.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {useRouter} from 'next/router'


const Navigate = () => {
    const router=useRouter();


    const goBlog=()=>{
        router.push("/admincp/createpost")
    }
    const goTech=()=>{
        router.push("/admincp")
    }
    const goWork=()=>{
        router.push("/admincp/updateworks")
    }
    return ( 
        <div className={styles.buttonDiv}>
            <ButtonGroup className={styles.navbtn} color="secondary">
                <Button onClick={goBlog}>Add Article</Button>
                <Button onClick={goTech}>Add Tech</Button>
                <Button onClick={goWork}>Add Work</Button>
            </ButtonGroup>
            </div>
     );
}
 
export default Navigate;