import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BgImageCover from 'assets/backgrounds/cover_bg.jpeg';

const S = {};
S.Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${BgImageCover}) no-repeat center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  visibility: ${({ visible }) => visible ? 'visible' : 'hidden'};
  opacity: ${({ visible }) => visible ? 1 : 0};
  transition: visibility 0.5s linear, opacity 0.5s linear;
`;
S.OverlayBlack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000;
  opacity: 0.4;
  overflow: hidden;
`;
S.CoverMain = styled.div`
  margin-top: 3vh;
  font-size: 2rem;
  color: #F5E9DB;
  z-index: 2;
`;
S.CoverName = styled.div`
  font-size: 1.5rem;
  color: #F5E9DB;
  z-index: 2;
`;
S.CoverDate = styled.div`
  margin-top: 5vh;
  font-size: 1.3rem;
  color: #f5e9db;
  z-index: 2;
`;
S.CoverSpot = styled.div`
  margin-top: 2vh;
  font-size: 1.3rem;
  color: #F5E9DB;
  z-index: 2;
`;
S.MessageWrap = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: ${({ visible }) => visible ? 1 : 0};
  transition: opacity 0.5s linear 1s;
`;

function Cover({ pageNum }) {
  const visible = pageNum === 1;
  
  return (
    <S.Wrapper visible={pageNum < 2}>
      <S.OverlayBlack />
      <S.MessageWrap visible={visible}>
        <S.CoverName>승규,주연</S.CoverName>
        <S.CoverMain>결혼합니다</S.CoverMain>
        <S.CoverDate>2023년 3월 25일 토요일 낮 1시</S.CoverDate>
        <S.CoverSpot>고려대학교 교우회관</S.CoverSpot>
      </S.MessageWrap>
    </S.Wrapper>
  );
}

Cover.defaultProps = {};

Cover.propTypes = {};

export default Cover;
