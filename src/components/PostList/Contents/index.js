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

function Contents() {
  return (
    <ContentsWrap>
      <Topics />
      <Posts />
    </ContentsWrap>
  );
}

export default Contents;
