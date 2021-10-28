import React from "react";
import Image from "./children/image";
import LikeButton from "./children/like_button";
import styles from "./styles";
import { getCaptionFromEdges } from "./children/image/helpers";

const App = (props) => {
  const { data } = props;
  console.log('json data',data);
  const url = `https://www.instagram.com/${data.owner.username}`

  return (
    <main style={styles.main}>
 
    <div style={styles.container}> 
        <div style={styles.imageContainer}>
          <Image data={data} />
        </div>

        <div style={styles.feedsContainer}>
          <header style={styles.header}>
            <img src={data.owner.profile_pic_url} alt="owner profile pic" width="15%"></img>
            <div style={styles.headerWrapper}>
              <strong>
                {data.owner.username}
              </strong>
              <span>{data.location.name}</span>
            </div>
          </header> 

          <div style={styles.commentsContainer}>

            <div style={styles.profileUser}>
              <a href={url} rel="noopener noreferrer" target="_blank">
                <strong>{data.owner.username}</strong>
              </a>
               <p>{getCaptionFromEdges(data.edge_media_to_caption)}</p>
            </div>

            <ul style={styles.ul}>
              {data.edge_media_to_comment.edges.map((item) => (
                <li key={item.node.id} style={styles.li}>
                  <div style={styles.comment}>
                    <strong>{item.node.owner.username} </strong>
                    {item.node.text}
                  </div>
                  <div style={styles.like}>
                    <LikeButton />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <footer style={styles.footer}> 
            <div style={styles.footerWrapper}>
                <strong>{data.edge_media_preview_like.count} likes</strong> 
                <div style={styles.footerLike} >
                  <LikeButton />
                </div>
             </div> 
          </footer>
        </div>
      </div>
    </main>
  );
};

export default App;