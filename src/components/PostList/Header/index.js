import './Header.css';
import { useState } from 'react';

function Headers() {
  const [searchValue, setSearchValue] = useState(true);

  function handleSearch() {
    setSearchValue((prevSearchValue) => !prevSearchValue);
  }

  return (
    <nav className="header">
      <div className="inner_header">
        <img a src="img/logo.svg" className="logo_img" alt="" />
        <div className="header_info">
          <div className="search_wrap">
            <button type="button" handleSearch={handleSearch}>
              <img src="img/search.png" alt="" />
            </button>
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Search posts"
            />
          </div>
          <div className="write_profile_wrap">
            <button type="button" className="write_btn">
              글쓰기
            </button>
            <p className="profile">j</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Headers;
