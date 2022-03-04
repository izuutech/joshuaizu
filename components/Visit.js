import styles from '../styles/Visit.module.css';
import Typography from "@mui/material/Typography";
import { useState, useEffect } from 'react';




const Visit = () => {

    
    const [views, setViews]=useState("Loading...");
    useEffect(()=>{
        
            fetch("http://localhost:5000/page/visit")
            .then((res)=>res.json())
            .then((data)=>{
                setViews(data.data.visits)
                console.log(data.data.visits)
            })
            .catch(err=>console.log(err))
            
    }, [])
    return ( 

        <div className={styles.visit}>
            <div className={styles.viewsDiv}>
                
                <Typography variant="h5" className={styles.txtcolor}>
                    Total Page Views
                </Typography>
                <Typography variant="h5" className={styles.txtcolor}>
                    {views}
                </Typography>
               
            </div>
        </div>
     );
}
 
export default Visit;