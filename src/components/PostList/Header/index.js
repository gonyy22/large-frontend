import './Header.css';
import { useState } from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
  margin-left: 10px;
  border: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  transition: all 0.5s;
  :focus {
    outline: none;
  }
  width: ${(props) => (props.isOpen ? '160px' : '0')};
`;

function Headers() {
  const [searchValue, setSearchValue] = useState(false);

  function handleSearch() {
    setSearchValue((prevSearchValue) => !prevSearchValue);
  }

  return (
    <nav className="header">
      <div className="inner_header">
        <img src="img/logo.svg" className="logo_img" alt="" />
        <div className="header_info">
          <div className="search_wrap">
            <button type="button" onClick={handleSearch}>
              <img src="img/search.png" alt="" />
            </button>
            <SearchInput
              type="text"
              id="search"
              name="search"
              placeholder="Search posts"
              isOpen={searchValue}
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
