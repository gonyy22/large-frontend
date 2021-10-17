import './Header.css';

function Headers() {
  return (
    <div className="headers">
      <img src="img/logo.svg" className="logo_img"/>
      <div className="header_info">
        <img src="img/search.png" />
        <button className="write_btn">글쓰기</button>
        <p className="profile">j</p>
      </div>
    </div>
  );
}

export default Headers;
