import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BgImageGreeting from 'assets/greetings_bg.jpeg';

const S = {};

S.Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${BgImageGreeting}) no-repeat center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  visibility: ${({ visible }) => visible ? 'visible' : 'hidden'};
  opacity: ${({ visible }) => visible ? 1 : 0};
  transition: visibility 0.7s linear 0.7s, opacity 0.7s linear 0.7s;
`;
S.MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1vh;
  visibility: ${({ visible }) => visible ? 'visible' : 'hidden'};
  opacity: ${({ visible }) => visible ? 1 : 0};
  transition: visibility 0.7s linear 1.4s, opacity 0.7s linear 1.4s;
`;
S.Message = styled.div`
  color: #AD5B78;
  //color: #ba8a87;
  font-size: 4vw;
`;

function Greetings({ pageNum }) {
  const visible = pageNum === 2;

  return (
    <S.Wrapper visible={visible}>
      <S.MessageBox visible={visible}>
        <S.Message>세상에,</S.Message>
        <S.Message>둘이 같이 있으니 너무나 좋지 뭐에요!</S.Message>
        <S.Message>그래서 평생 함께 하기로 했답니다.</S.Message>
      </S.MessageBox>
    </S.Wrapper>
  );
}

Greetings.defaultProps = {};

Greetings.propTypes = {};

export default Greetings;
