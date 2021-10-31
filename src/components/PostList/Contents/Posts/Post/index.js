import './Post.css';

function Post() {
  return (
    <>
      <div className="post_wrap">
        <div className="post_info">
          <div className="writer_profile">j</div>
          <p className="writer">냐냐</p>
          <p className="post_title">Debugging Node.js with pp(pretty-print)</p>
          <div className="post_tag">front-end</div>
          <p className="post_date">2021-09-09</p>
        </div>
        <img
          src="img/post_img_sample.png"
          className="post_img"
          alt="포스트 이미지"
        />
      </div>
    </>
  );
}

export default Post;
