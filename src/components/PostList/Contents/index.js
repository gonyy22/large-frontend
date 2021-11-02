import { useState } from 'react';
import styled from 'styled-components';
import Posts from './Posts';
import Topics from './Topics';
import './Contents.css';

const ContentsWrap = styled.div`
  width: 720px;
  margin: 0 auto;

  @media only screen and (min-width: 0) and (max-width: 480px) {
    width: 90%;
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    width: 78%;
  }
  @media only screen and (min-width: 769px) and (max-width: 1023px) {
    width: 90%;
  }
`;

const TabButton = styled.button`
  position: relative;
  height: 30px;
  padding: 10px;
  font-size: 14px;
  font-weight: 600;
  color: #aaa;
  :hover {
    color: #3d3d3d;
  }
  :hover::after {
    content: '';
    width: 100%;
    height: 1px;
    display: inline-block;
    position: absolute;
    left: 0;
    bottom: -1px;
    background-color: #3d3d3d;
  }
  ${(props) =>
    props.selected
      ? `
    color: #3d3d3d;
    ::after {
    content: '';
    width: 100%;
    height: 1px;
    display: inline-block;
    position: absolute;
    left: 0;
    bottom: -1px;
    background-color: #3d3d3d;
    }
  `
      : ''}
`;

function Contents() {
  const [isLatestSelected, setIsLatestSelected] = useState(true);

  function handleClick(val) {
    setIsLatestSelected(val);
  }
  return (
    <ContentsWrap>
      <Topics />
      <div className="latest_following_tap">
        <TabButton
          selected={isLatestSelected}
          onClick={() => handleClick(true)}
        >
          최신 글
        </TabButton>
        <TabButton
          selected={!isLatestSelected}
          onClick={() => handleClick(false)}
        >
          팔로잉
        </TabButton>
      </div>
      <Posts />
    </ContentsWrap>
  );
}

export default Contents;
