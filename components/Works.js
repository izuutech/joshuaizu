import styles from '../styles/Works.module.css';
import FadeIn from "./FadeIn";
import Typography from "@mui/material/Typography";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import axios from 'axios';
import {useQuery} from 'react-query';



const fetchWorks=()=>{
    return axios.get("https://joshuaizu.vercel.app/admincp/getwork")
    
}



const Works = () => {

    const {data: allWorks, status: stats}=useQuery("get-works", fetchWorks)

    return ( 
        <div className={styles.works}>
            <div className={styles.greenLine}></div>
            <FadeIn>
            <div className={styles.containerHead}>
                <Typography variant="h4" className={styles.contactHeadTxt}>/works</Typography>
            </div>
            <div className={styles.worksDiv}>
                    {stats === "loading" && (
                          <div className={styles.paper}>
                          <div className={styles.paperIcon}>
                              <div className={styles.folderDiv}>
                                  <FolderOpenIcon className={styles.greenIcon}/>
                              </div>
                              <div className={styles.linkDiv}>
                                  <a><GitHubIcon className={styles.greyIcon}/></a>
                                  <a><LinkIcon className={styles.greyIcon}/></a>
                              </div>
                          </div>
                          <Typography variant="h6"></Typography>
                          <Typography variant="body1">Loading Data...</Typography>
                          
                          <div className={styles.paperLang}>
                              <Typography></Typography>
                          </div>
                      </div>
                    )}
                    {stats === "error" && (
                          <div className={styles.paper}>
                          <div className={styles.paperIcon}>
                              <div className={styles.folderDiv}>
                                  <FolderOpenIcon className={styles.greenIcon}/>
                              </div>
                              <div className={styles.linkDiv}>
                                  <a className={styles.aTagWorks}><GitHubIcon className={styles.greyIcon}/></a>
                                  <a className={styles.aTagWorks}><LinkIcon className={styles.greyIcon}/></a>
                              </div>
                          </div>
                          <Typography variant="h6"></Typography>
                          <Typography variant="body1">Error Fetching Data</Typography>
                          
                          <div className={styles.paperLang}>
                              <Typography></Typography>
                          </div>
                      </div>
                    )}
                {stats === "success" && (
                    allWorks?.data?.data.map((work)=>(
                        <div className={styles.paper} key={work._id}>
                            <div className={styles.paperIcon}>
                                <div className={styles.folderDiv}>
                                    <FolderOpenIcon className={styles.greenIcon}/>
                                </div>
                                <div className={styles.linkDiv}>
                                    <a href={work.github} className={styles.aTagWorks}><GitHubIcon className={styles.greyIcon}/></a>
                                    <a href={work.link} className={styles.aTagWorks}><LinkIcon className={styles.greyIcon}/></a>
                                </div>
                            </div>
                            <Typography variant="h6">{work.name}</Typography>
                            <Typography variant="body1">{work.desc}</Typography>
                            
                            <div className={styles.paperLang}>
                                <Typography>{work.lang}</Typography>
                            </div>
                        </div>
                    ))
                
                )}
                
            </div>
            </FadeIn>
        </div>
     );
}
 
export default Works;