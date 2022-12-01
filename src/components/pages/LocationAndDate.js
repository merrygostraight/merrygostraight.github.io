/* global kakao */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BgImageDate from 'assets/date_bg.jpeg';
import Calendar from 'components/modules/Calendar';
import { CopyToClipboard } from 'react-copy-to-clipboard/src';
import { toast, ToastContainer } from 'react-toastify';
import 'assets/styles/toastify.css';
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
  padding-top: 9vh;
  visibility: ${({ visible }) => visible ? 'visible' : 'hidden'};
  opacity: ${({ visible }) => visible ? 1 : 0};
  transition: visibility 0.5s linear 1s, opacity 0.5s linear 1s;
  color: #4d4d1a;
  font-size: 1.2rem;
`;
S.MessageTitle = styled.div`
  font-size: 1rem;
  margin: 12px 0 8px 0;
`;
S.MessageLocation = styled.div`
`;
S.Address = styled.div`
  margin-bottom: 2px;
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
`;
S.AddressMessage = styled.div`
  font-size: 0.9rem;
  line-height: 1rem;
`;
S.AddressCopyButton = styled.div`
  font-size: 0.8rem;
  padding: 4px 3px 3px 3px;
  height: 0.9rem;
  line-height: 0.9rem;
  color: #4d4d1a;
  font-weight: 500;
  border-radius: 4px;
  border: 1px solid #4d4d1a;
`;
S.MessageDate = styled.div`
  font-size: 1rem;
  margin-top: 24px;
  margin-bottom: 6px;
`;
S.Map = styled.div`
  width: 60vw;
  max-width: 400px;
  height: 18vh;
  border-radius: 1vh;
  border: 1px solid #bbbbbb;
  transform: ${({ visible }) => visible ? 'translateY(0)' : 'translateY(10px)'};
  transition: transform 0.5s linear 1s;
`;
S.MessageMapAlt = styled.div`
  font-size: 0.7rem;
`;
S.MapNaver = styled.div`
  display: flex;
  width: 200px;
  gap: 6px;
  justify-content: center;
  align-items: center;
`;
S.MapNaverMessage = styled.div`
  font-size: 0.9rem;
  line-height: 1rem;
`;
S.MapNaverButton = styled.div`
  background-color: #4d4d1a;
  color: #ffffff;
  font-weight: 500;
  border-radius: 4px;
  font-size: 0.8rem;
  padding: 4px 3px 3px 3px;
  height: 0.9rem;
  line-height: 0.9rem;
`;
S.Calendar = styled.div`
  transform: ${({ visible }) => visible ? 'translateY(0)' : 'translateY(10px)'};
  transition: transform 0.5s linear 1s;
`;

const naverMapUrl = 'https://map.naver.com/v5/directions/-/14141544.126627322,4521945.415093554,고려대학교%20서울캠퍼스교우회관,18912226,PLACE_POI/-/transit?c=14141078.3384857,4521945.4150937,15,0,0,0,dh';
const kakaoMapUrl = 'https://map.kakao.com/?sName=&eName=고려대학교%20교우회관&urlLevel=4&urlX=507875&urlY=1136800';

function LocationAndDate({ pageNum, disableSwipe }) {
  const visible = pageNum === 4;
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
  
  const handleMapTouchStart = () => disableSwipe(true);
  const handleMapTouchEnd = () => disableSwipe(false);
  const handleClickCopyAddr = () => toast("복사되었습니다! 원하는 곳에 가서 붙여넣기 하세요.", {
    position: "bottom-center",
    autoClose: 15000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  
  return (
    <S.Wrapper visible={visible}>
      <S.MessageBox visible={visible}>
        <S.MessageDate>2023년 3월 25일 토요일 낮 1시</S.MessageDate>
        <S.Calendar visible={visible}>
          <Calendar />
        </S.Calendar>
        <S.MessageTitle>오시는 곳</S.MessageTitle>
        <S.MessageLocation>고려대학교 교우회관</S.MessageLocation>
        <S.Address>
          <S.AddressMessage>서울 성북구 종암로 13</S.AddressMessage>
          <CopyToClipboard text="서울 성북구 종암로 13">
            <S.AddressCopyButton onClick={handleClickCopyAddr}>주소 복사</S.AddressCopyButton>
          </CopyToClipboard>
        </S.Address>
        <S.Map
          visible={visible}
          id="map"
          ref={mapRef}
          onTouchStart={handleMapTouchStart}
          onTouchEnd={handleMapTouchEnd}
          onClick={() => window.open(`${kakaoMapUrl}`, "_blank")}
        />
        <S.MessageMapAlt>지도를 탭하시면 카카오맵으로 이동합니다</S.MessageMapAlt>
        <S.MapNaver>
          <S.MapNaverMessage>네이버 지도에서 보기 </S.MapNaverMessage>
          <S.MapNaverButton onClick={() => window.open(`${naverMapUrl}`, "_blank")}>
            Naver 지도
          </S.MapNaverButton>
        </S.MapNaver>
      </S.MessageBox>
      <ToastContainer />
    </S.Wrapper>
  );
}

LocationAndDate.defaultProps = {};

LocationAndDate.propTypes = {};

export default LocationAndDate;
