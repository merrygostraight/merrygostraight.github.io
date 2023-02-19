/* global kakao */
import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BgImageDate from 'assets/backgrounds/date_bg.jpeg';
import Calendar from 'components/modules/Calendar';
import { CopyToClipboard } from 'react-copy-to-clipboard/src';
import { toast } from 'react-toastify';
import 'assets/styles/toastify.css';
import PublicTransportPopup from 'components/modules/PublicTransportPopup';
import BusFromDaejeonPopup from 'components/modules/BusFromDaejeonPopup';
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
  padding-top: 4vh;
  visibility: ${({ visible }) => visible ? 'visible' : 'hidden'};
  opacity: ${({ visible }) => visible ? 1 : 0};
  transition: visibility 0.5s linear 1s, opacity 0.5s linear 1s;
  color: #111701;
  font-size: 1.2rem;
`;
S.MessageTitle = styled.div`
  font-size: 1rem;
  margin-top: 4px;
`;
S.MessageLocation = styled.div`
`;
S.Address = styled.div`
  margin-bottom: 2px;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
S.AddressButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;
S.AddressMessage = styled.div`
  font-size: 1rem;
  line-height: 1rem;
`;
S.AddressCopyButton = styled.div`
  font-size: 0.9rem;
  padding: 6px 5px 5px 5px;
  height: 1rem;
  line-height: 1rem;
  color: #111701;
  font-weight: 500;
  border-radius: 4px;
  border: 1px dashed #111701;
`;
S.TransportButton = styled.div`
  font-size: 0.9rem;
  padding: 6px 5px 5px 5px;
  height: 1rem;
  line-height: 1rem;
  color: #111701;
  font-weight: 500;
  border-radius: 4px;
  border: 1px dashed #111701;
`;
S.MessageDate = styled.div`
  font-size: 1.1rem;
  margin-top: 16px;
  margin-bottom: 4px;
`;
S.MapArea = styled.div`
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
S.Map = styled.div`
  width: 60vw;
  max-width: 400px;
  height: 20vh;
  border-radius: 1vh;
  border: 1px solid #bbbbbb;
  transform: ${({ visible }) => visible ? 'translateY(0)' : 'translateY(10px)'};
  transition: transform 0.5s linear 1s;
`;
S.MessageMapAlt = styled.div`
  font-size: 0.9rem;
`;
S.MapNaver = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  height: 28px;
`;
S.MapNaverMessage = styled.div`
  font-size: 0.9rem;
  line-height: 25px;
  padding-top: 2px;
`;
S.MapNaverButton = styled.div`
  background-color: #4c640d;
  color: #ffffff;
  font-weight: 500;
  border-radius: 4px;
  font-size: 0.9rem;
  padding: 5px 4px 4px 4px;
  height: 1rem;
  line-height: 1rem;
`;
S.Calendar = styled.div`
  transform: ${({ visible }) => visible ? 'translateY(0)' : 'translateY(10px)'};
  transition: transform 0.5s linear 1s;
`;

const naverMapUrl = 'https://map.naver.com/v5/directions/-/14141544.126627322,4521945.415093554,고려대학교%20서울캠퍼스교우회관,18912226,PLACE_POI/-/transit?c=14141078.3384857,4521945.4150937,15,0,0,0,dh';
const kakaoMapUrl = 'https://map.kakao.com/?sName=&eName=고려대학교%20교우회관&urlLevel=4&urlX=507875&urlY=1136800';

function LocationAndDate({ pageNum, disableSwipe }) {
  const visible = pageNum === 4;
  const [showTransportPopup, setShowTransportPopup] = useState(false);
  const [showBusFromDaejeonPopup, setShowBusFromDaejeonPopup] = useState(false);
  const mapRef = useRef();
  
  useEffect(() => {
    let container = mapRef.current;
    let markerPosition  = new kakao.maps.LatLng(37.59203956518369, 127.0356670548376);
    let options = {
      center: markerPosition,
      level: 5
    };
    let map = new kakao.maps.Map(container, options);
    let marker = new kakao.maps.Marker({
      position: markerPosition
    });
    marker.setMap(map);
  }, []);
  
  const handleMapTouchStart = () => disableSwipe(true);
  const handleMapTouchEnd = () => disableSwipe(false);
  const handleClickCopyAddr = () => {
    toast(<>주소가 복사되었습니다!<br />원하는 곳에 가서 붙여넣기 하세요.</>, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleClickTransportButton = () => {
    setShowTransportPopup(true);
    disableSwipe(true);
  };
  const closeTransportPopup = () => {
    setShowTransportPopup(false);
    disableSwipe(false);
  };
  
  const handleClickBusFromDaejeonButton = () => {
    setShowBusFromDaejeonPopup(true);
    disableSwipe(true);
  };
  const closeBusFromDaejeonPopup = () => {
    setShowBusFromDaejeonPopup(false);
    disableSwipe(false);
  };
  
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
          <S.AddressButtonGroup>
              <CopyToClipboard text="서울 성북구 종암로 13">
                <S.AddressCopyButton onClick={handleClickCopyAddr}>주소 복사하기</S.AddressCopyButton>
              </CopyToClipboard>
              <S.TransportButton onClick={handleClickTransportButton}>교통편 자세히 보기</S.TransportButton>
          </S.AddressButtonGroup>
          <S.AddressButtonGroup>
            <S.TransportButton onClick={handleClickBusFromDaejeonButton}>대전에서 출발하는 전세버스 안내</S.TransportButton>
          </S.AddressButtonGroup>
        </S.Address>
        <S.MapArea>
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
              NAVER 지도
            </S.MapNaverButton>
          </S.MapNaver>
        </S.MapArea>
      </S.MessageBox>
      { showTransportPopup && <PublicTransportPopup onClose={closeTransportPopup} />}
      { showBusFromDaejeonPopup && <BusFromDaejeonPopup onClose={closeBusFromDaejeonPopup} />}
    </S.Wrapper>
  );
}

LocationAndDate.defaultProps = {};

LocationAndDate.propTypes = {};

export default LocationAndDate;
