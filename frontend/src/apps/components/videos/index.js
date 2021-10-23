import React from "react";
import { Video, VideoAuthor, VideoContainer, VideoDetails, VideoProfileViews, Videos, VideoThumbnail, VideoThumbnailImg, VideoTitle, VideoTitleH3 } from "./videos.style";

export function MainVideos(props) {

  const loading = props.loading;

  if (loading) {
    return (
      <Videos>
        <h1>Loading...</h1>
      </Videos>
    )
  }

  return (
    <Videos>
      <h1>Recommended</h1>
      <VideoContainer>
        {props.videos.items.map((video) => (
          <Video key={video.etag}>
            <VideoThumbnail>
              <VideoThumbnailImg src={video.snippet.thumbnails.high.url} alt="" />
            </VideoThumbnail>
            <VideoDetails>
              <VideoAuthor>
                <img src="https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s48-c-k-c0x00ffffff-no-rj" alt="" />
              </VideoAuthor>
              <VideoTitle>
                <VideoTitleH3>{video.snippet.title}</VideoTitleH3>
                <VideoProfileViews>
                  <a href="http://localhost">{video.snippet.channelTitle}</a><br />
                  <span>10M Views • 3 Months Ago</span>
                </VideoProfileViews>
              </VideoTitle>
            </VideoDetails>
          </Video>
        ))}
      </VideoContainer>
    </Videos>
  )
}

export default MainVideos;