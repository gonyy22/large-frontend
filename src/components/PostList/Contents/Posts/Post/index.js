import styled from 'styled-components';
import './Post.css';

const PostTitle = styled.div`
  margin: 10px 0;
  font-size: 20px;
  font-weight: 600;

  @media only screen and (min-width: 0) and (max-width: 480px) {
    font-size: 10px;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 14px;
  }
  @media only screen and (min-width: 769px) and (max-width: 1023px) {
    font-size: 20px;
  }
`;
function Post(props) {
  return (
    <>
      <div className="post_wrap">
        <div className="post_info">
          <div className="writer_wrap">
            <div className="writer_profile">j</div>
            <p className="writer">{props.author}</p>
          </div>
          <div className="post_title_wrap">
            <PostTitle>{props.title}</PostTitle>
          </div>
          <div className="post_tag_wrap">
            <div className="post_tag">{props.tag}</div>
            <p className="post_date">{props.createdAt}</p>
          </div>
          <img
            src={props.profileImageSrc}
            className="post_img"
            alt="포스트 이미지"
          />
        </div>
      </div>
    </>
  );
}

export default Post;
