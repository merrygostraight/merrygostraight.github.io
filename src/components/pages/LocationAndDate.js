/* global kakao */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BgImageDate from 'assets/date_bg.jpeg';
import Calendar from 'components/modules/Calendar';
const { kakao } = window;

const S = {};

S.Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: url(${BgImageDate}) no-repeat center;
  background-size: contain;
  background-color: #ffffff;
  background-position: top;
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
  padding-top: 15vh;
  visibility: ${({ visible }) => visible ? 'visible' : 'hidden'};
  opacity: ${({ visible }) => visible ? 1 : 0};
  transition: visibility 0.5s linear 1s, opacity 0.5s linear 1s;
  color: #4d4d1a;
  font-size: 1.2rem;
`;
S.MessageTitle = styled.div`
  font-size: 1rem;
  margin-bottom: 4px;
`;
S.MessageLoc = styled.div`
  margin-bottom: 6px;
`;
S.MessageDate = styled.div`
  margin-top: 24px;
  margin-bottom: 6px;
`;
S.Map = styled.div`
  width: 60vw;
  max-width: 400px;
  height: 18vh;
  border-radius: 1vh;
  border: 1px solid #bbbbbb;
`;
S.Calendar = styled.div`
  //width: 60vw;
  //height: 15vh;
  //border-radius: 1vh;
  //border: 1px solid #bbbbbb;
`;

function LocationAndDate({ pageNum, disableSwipe }) {
  const visible = pageNum === 3;
  const mapRef = useRef();
  
  useEffect(() => {
    let container = mapRef.current;
    let markerPosition  = new kakao.maps.LatLng(37.59203956518369, 127.0356670548376);
    let options = {
      center: markerPosition,
      level: 4
    };
    let map = new kakao.maps.Map(container, options);
    let marker = new kakao.maps.Marker({
      position: markerPosition
    });
    marker.setMap(map);
  }, []);
  
  const handleMapTouchStart = () => {
    disableSwipe(true);
  };
  const handleMapTouchEnd = () => {
    disableSwipe(false);
  };
  
  return (
    <S.Wrapper visible={visible}>
      <S.MessageBox visible={visible}>
        <S.MessageTitle>오시는 곳</S.MessageTitle>
        <S.MessageLoc>고려대학교 교우회관</S.MessageLoc>
        <S.Map id="map" ref={mapRef} onTouchStart={handleMapTouchStart} onTouchEnd={handleMapTouchEnd}></S.Map>
        <S.MessageDate>2023년 3월 25일 토요일 낮 1시</S.MessageDate>
        <S.Calendar>
          <Calendar />
        </S.Calendar>
      </S.MessageBox>
    </S.Wrapper>
  );
}

LocationAndDate.defaultProps = {};

LocationAndDate.propTypes = {};

export default LocationAndDate;
