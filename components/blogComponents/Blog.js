import { useQuery } from "react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import parse from 'html-react-parser';

import Link from "next/link";

import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Typography from "@mui/material/Typography";
import CoffeeIcon from "@mui/icons-material/Coffee";
import styles from "../../styles/Blog.module.css";


const fetchPosts = (pageNo) => {
  if (pageNo) {
    return axios.get(
      `https://joshuaizutechs.herokuapp.com/admincp/getpost/users?page=${pageNo}`
    );
  } else {
    return axios.get(`https://joshuaizutechs.herokuapp.com/admincp/getpost/users?page=1`);
  }
};

const Blog = () => {
  const [pageNo, setPageNo] = useState(1);
  const [pageName, setPageName] = useState("get-posts");
  const { data: posts } = useQuery(pageName, () => fetchPosts(pageNo));

  useEffect(() => {
    setPageName(`get-posts-${pageNo}`);
  }, [pageNo]);

  const buyCoffee = () => {
    window.location.href = "https://www.buymeacoffee.com/joshuaizu";
  };
  //write a function for next page
  //data is already accessible via posts?.data.data.prevPage
  //and posts?.data.data.nextPage
  return (
    <div className={styles.container}>
      <Container>
        <div className={styles.blogHead}>
          <Typography variant="h4">POSTS</Typography>
          <Typography variant="body2">
            My ramblings about things that exicite me. It&apos;s worth reading!
          </Typography>
        </div>
        <div className={styles.flexContainer}>
          {posts?.data?.data.map((post) => (
            <Link href={"/blog/" + post._id} key={post._id}>
              <a className={styles.atag}>
                <div className={styles.postContainer}>
                  <div className={styles.blueSpace}>
                    <div className={styles.postHead}>
                      <Typography variant="h5" className={styles.title}>
                        {post.title}
                      </Typography>
                      <CoffeeIcon
                        className={styles.titleShare}
                        onClick={buyCoffee}
                      />
                    </div>
                    <div className={styles.postDown}>
                      <Typography variant="body1" className={styles.postBody}>
                        {/* output a part of the string (the first 1000 characters) */}
                        {parse(`${post.content.substring(0, 200).split("<br>")}...`)}
                      </Typography>
                    </div>
                  </div>
                  <div className={styles.greenSpace}></div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </Container>
      {/* Page Pagination */}
      <div className={styles.paginateDiv}>
        <ButtonGroup>
          {posts?.data?.prevPage && (
            <Button
              onClick={() => setPageNo((pageNo -= 1))}
              className={styles.paginate}
            >
              Prev
            </Button>
          )}
          {posts?.data?.nextPage && (
            <Button
              onClick={() => setPageNo((pageNo += 1))}
              className={styles.paginate}
            >
              Next
            </Button>
          )}
        </ButtonGroup>
      </div>
    </div>
  );
};

export default Blog;
