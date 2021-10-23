import styled from 'styled-components';

const Videos = styled.div`
  background-color: #f9f9f9;
  width: 100%;
  height: 100%;
  padding: 15px 15px;
  border-top: 1px solid #ddd;
  overflow-y: scroll;
`;

const VideoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Video = styled.div`
  width: 310px;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 30px;
`;

const VideoThumbnail = styled.div`
  width: 100%;
  height: 170px;
`;

const VideoThumbnailImg = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

const VideoDetails = styled.div`
  display: flex;
  margin-top: 10px;
`;

const VideoAuthor = styled.div`
  img {
    object-fit: cover;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    margin-right: 10px;
  }
`;

const VideoTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

const VideoTitleH3 = styled.h3`
  color: rgb(3, 3, 3);
  line-height: 18px;
  font-size: 14px;
  margin-bottom: 6px;
`;

const VideoProfileViews = styled.div`
  a, span {
    text-decoration: none;
    color: rgb(96, 96, 96);
    font-size: 14px;
  }
`

export { Videos, VideoContainer, Video, VideoThumbnail, VideoThumbnailImg, VideoDetails, VideoAuthor, VideoTitle, VideoTitleH3, VideoProfileViews };