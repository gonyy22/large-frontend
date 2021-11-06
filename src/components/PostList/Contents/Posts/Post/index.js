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
  const { post } = props;
  return (
    <>
      <div className="post_wrap">
        <div className="post_info">
          <div className="writer_wrap">
            <div className="writer_profile">j</div>
            <p className="writer">{post.user.name}</p>
          </div>
          <div className="post_title_wrap">
            <PostTitle>{post.title}</PostTitle>
          </div>
          <div className="post_tag_wrap">
            <div className="post_tag">{post.tag.name}</div>
            <p className="post_date">{post.createdAt}</p>
          </div>
          <img
            src={post.user.logoImageSrc}
            className="post_img"
            alt="포스트 이미지"
          />
        </div>
      </div>
    </>
  );
}

export default Post;
