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
  overflow: hidden;
  background: url(${BgImageGreeting}) no-repeat center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  visibility: ${({ visible }) => visible ? 'visible' : 'hidden'};
  opacity: ${({ visible }) => visible ? 1 : 0};
  transition: visibility 0.5s linear 0.5s, opacity 0.5s linear 0.5s;
`;
S.MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1vh;
  visibility: ${({ visible }) => visible ? 'visible' : 'hidden'};
  opacity: ${({ visible }) => visible ? 1 : 0};
  transition: visibility 0.5s linear 1s, opacity 0.5s linear 1s;
`;
S.Message = styled.div`
  color: #AD5B78;
  //color: #ba8a87;
  font-size: 1.1rem;
`;
S.Buffer = styled.div`
  height: 36px;
`;

function Greetings({ pageNum }) {
  const visible = pageNum === 2;

  return (
    <S.Wrapper visible={visible}>
      <S.MessageBox visible={visible}>
        <S.Message>서로가 남이었던 시절,</S.Message>
        <S.Message>멀찍이서 서로를 바라보며</S.Message>
        <S.Message>둘은 생각했어요.</S.Message>
        <S.Message>'저분은 왜저리 운동을 열심히 하지?'</S.Message>
        <S.Message>'저분은 늘 에너지랑 열정이 굉장하네.'</S.Message>
        <S.Buffer />
        <S.Message>그런데 세상에,</S.Message>
        <S.Message>둘이 함께 있으니 너무나 좋지 뭐에요!</S.Message>
        <S.Message>그래서 평생 함께 하기로 했답니다.</S.Message>
        <S.Message>오셔서 축하해 주세요!</S.Message>
      </S.MessageBox>
    </S.Wrapper>
  );
}

Greetings.defaultProps = {};

Greetings.propTypes = {};

export default Greetings;
