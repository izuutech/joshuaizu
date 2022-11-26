import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import styles from "../styles/About.module.css";
import Image from "next/image";
import FadeIn from "./FadeIn";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { useQuery } from "react-query";
import axios from "axios";
import { BACKEND_URI } from "../contants";

const fetchTech = () => {
  return axios.get(`${BACKEND_URI}/admincp/gettech`);
};

const About = () => {
  const { data: allTech, status } = useQuery("get-tech", fetchTech);

  return (
    <div className={styles.about}>
      <Container>
        <FadeIn>
          <div className={styles.greenLine}></div>
          <div className={styles.containerHead}>
            <Typography variant="h4" className={styles.aboutTxt}>
              /about
            </Typography>
          </div>
          <div className={styles.containerBody}>
            <div className={styles.centerImg}>
              <div className={styles.myImage}>
                <Image
                  src="/myImage.png"
                  alt="Me"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>

            <div className={styles.aboutme}>
              <Typography variant="subtitle" className={styles.aboutBodyTxt}>
                I&apos;m Joshua Izu, a student of Computer Science at the
                Federal University Of Technology, Owerri(FUTO). I am a{" "}
                <span className={styles.spanbold}>Software Engineer</span> in
                the making.
                <br />
                <br />
                <Typography variant="subtitle">
                  Other fields that interest me are{" "}
                  <span className={styles.spanbold}>
                    Machine learning, Human-Computer Interactions and Backend
                    development.{" "}
                  </span>
                </Typography>
                In my free time I am also a graphics designer and I indulge in
                some forms of video editing.
                <br />
                <br />
                <Typography variant="subtitle">
                  Currently, I work as a freelancer. This certainly shows how
                  much I love remote jobs.
                </Typography>
              </Typography>
              <div className={styles.technology}>
                <div className={styles.technologyHead}>
                  <Typography variant="h6" className={styles.technologyHeadTxt}>
                    Technologies I Work With:
                  </Typography>
                </div>

                <List component="a" className={styles.technologyBody}>
                  {status === "loading" && (
                    <ListItemText
                      primary={"Loading Data..."}
                      className={styles.technologyBodyTxt}
                    />
                  )}
                  {status === "error" && (
                    <ListItemText
                      primary={"Error Fetching Data"}
                      className={styles.technologyBodyTxt}
                    />
                  )}
                  {status === "success" &&
                    allTech?.data?.data.map((tech) => (
                      <ListItemButton key={tech._id} className={styles.listDiv}>
                        <ListItemAvatar>
                          <Avatar className={styles.avatarCircle}>
                            {tech.technologyName[0]}
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={tech.technologyName}
                          className={styles.technologyBodyTxt}
                        />
                      </ListItemButton>
                    ))}
                </List>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </div>
  );
};

export default About;
