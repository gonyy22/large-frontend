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

  @media only screen and (min-width: 0) and (max-width: 480px) {
    width: 100px;
  }
`;

const InnerHeader = styled.div`
  position: relative;
  width: 1000px;
  height: 64px;
  margin: 0 auto;

  @media only screen and (min-width: 0) and (max-width: 480px) {
    width: 300px;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    width: 500px;
  }
  @media only screen and (min-width: 769px) and (max-width: 1023px) {
    width: 600px;
  }
`;

const LogoImg = styled.div`
  display: inline-block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 67px;
  height: 24px;
  background: url('img/logo.svg') no-repeat;

  @media only screen and (min-width: 0) and (max-width: 480px) {
    width: 24px;
    height: 24px;
    background: url('img/logo_mobile.png') no-repeat;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    width: 24px;
    height: 24px;
    background: url('img/logo_mobile.png') no-repeat;
  }
  @media only screen and (min-width: 769px) and (max-width: 1023px) {
    background: url('img/logo.svg') no-repeat;
  }
`;

const HeaderInfo = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);

  @media only screen and (min-width: 0) and (max-width: 480px) {
    img {
      width: 20px;
      height: 20px;
    }
    .write_btn {
      margin: 0;
      font-size: 10px;
    }
    .write_profile_wrap {
      margin-top: 3px;
    }
    .profile {
      width: 10px;
      height: 10px;
      margin-left: 15px;
      line-height: 10px;
    }
  }
`;

function Headers() {
  const [searchValue, setSearchValue] = useState(false);

  function handleSearch() {
    setSearchValue((prevSearchValue) => !prevSearchValue);
  }
  function handleEnterSearch(e) {
    if (e.key === 'Enter') {
      alert('Press Enter!');
      e.target.value = '';
    }
  }

  return (
    <nav className="header">
      <InnerHeader>
        <LogoImg />
        <HeaderInfo>
          <div className="search_wrap">
            <button type="button" onClick={handleSearch}>
              <img src="img/search-ori.png" alt="" />
            </button>
            <SearchInput
              type="text"
              id="search"
              name="search"
              placeholder="Search posts"
              isOpen={searchValue}
              onKeyPress={handleEnterSearch}
            />
          </div>
          <div className="write_profile_wrap">
            <button type="button" className="write_btn">
              글쓰기
            </button>
            <p className="profile">j</p>
          </div>
        </HeaderInfo>
      </InnerHeader>
    </nav>
  );
}

export default Headers;
