import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BgImageDate from 'assets/date_bg.jpeg';

const S = {};

S.Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${BgImageDate}) no-repeat center;
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
  color: #4d4d1a;
  font-size: 4vw;
`;

function Date({ pageNum }) {
  const visible = pageNum === 3;
  return (
    <S.Wrapper visible={visible}>
      <S.MessageBox visible={visible}>
        <S.Message>약속의 장소</S.Message>
        <S.Message>고려대학교 교우회관</S.Message>
        <S.Message>약속의 시간</S.Message>
        <S.Message>2023년 3월 25일 토요일 낮 1시</S.Message>
      </S.MessageBox>
    </S.Wrapper>
  );
}

Date.defaultProps = {};

Date.propTypes = {};

export default Date;
