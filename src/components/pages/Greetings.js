import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BgImageGreeting from 'assets/backgrounds/greetings_bg.jpeg';

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
  margin-top: -72px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  visibility: ${({ visible }) => visible ? 'visible' : 'hidden'};
  opacity: ${({ visible }) => visible ? 1 : 0};
  transition: visibility 0.5s linear 1s, opacity 0.5s linear 1s;
`;
S.MessageMD = styled.div`
  color: #863250;
  //color: #ba8a87;
  font-size: 1.1rem;
  margin-bottom: 8px;
`;
S.MessageSM = styled.div`
  color: #863250;
  //color: #ba8a87;
  font-size: 0.9rem;
  margin-bottom: 4px;
`;
S.BufferMD = styled.div`
  height: 36px;
`;
S.BufferSM = styled.div`
  height: 8px;
`;

function Greetings({ pageNum }) {
  const visible = pageNum === 2;

  return (
    <S.Wrapper visible={visible}>
      <S.MessageBox visible={visible}>
        <S.MessageMD>서로가 남이었던 시절,</S.MessageMD>
        <S.MessageMD>둘은 생각했어요.</S.MessageMD>
        <S.BufferSM />
        <S.MessageSM>'저분은 운동을 매일 열심히 하시네.'</S.MessageSM>
        <S.MessageSM>'와, 저분 무게 엄청 치신다.'</S.MessageSM>
        <S.BufferSM />
        <S.MessageMD>매일 오며 가며 보다가,</S.MessageMD>
        <S.MessageMD>인사도 하고 지내고 뭐 그랬더랬죠.</S.MessageMD>
        <S.BufferMD />
        <S.MessageMD>그런데 세상에,</S.MessageMD>
        <S.MessageMD>둘이 함께 있으니 너무나 좋지 뭐예요!</S.MessageMD>
        <S.MessageMD>그래서 평생 함께 하기로 했답니다.</S.MessageMD>
        <S.MessageMD>저희 결혼합니다!</S.MessageMD>
        <S.MessageMD>부디 오셔서 함께 축하해 주세요 :)</S.MessageMD>
      </S.MessageBox>
    </S.Wrapper>
  );
}

Greetings.defaultProps = {};

Greetings.propTypes = {};

export default Greetings;
