import React from 'react';
import styled from 'styled-components';
import BusStopMap from 'assets/info/bus_from_daejeon_map.png';
import BusStopPic from 'assets/info/bus_from_daejeon_pic.png';

const S = {};
S.PopupOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.5);
  z-index: 1;
  overflow: hidden;
`;
S.Popup = styled.div`
  z-index: 10;
  width: 80%;
  max-width: 400px;
  background-color: #ffffff;
  border-radius: 8px;
  display: flex;
  gap: 8px;
  flex-direction: column;
  padding: 16px 12px 16px 12px;
  justify-content: center;
  color: #111701;
  font-size: 1rem;
`;
S.Title = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 2px 0;
  width: 100%;
  text-align: center;
`;
S.Message = styled.div`
  margin-left: 8px;
`;
S.MapImage = styled.div`
  background: url(${BusStopMap}) no-repeat center;
  background-size: contain;
  width: 80vw;
  height: 48vw;
`;
S.Picture = styled.div`
  background: url(${BusStopPic}) no-repeat center;
  background-size: contain;
  width: 80vw;
  height: 48vw;
`;
S.Time = styled.div`
  padding: 0 4px;
`;
S.Location = styled.div`
  padding: 0 4px;
`;
S.Label = styled.div`
  margin: 3px 0;
  font-weight: 600;
`;
S.Info = styled.div`
  margin-left: 4px;
`;

function BusFromDaejeonPopup({ onClose }) {
  return (
    <S.PopupOverlay onClick={onClose}>
      <S.Popup>
        <S.Title>대전에서 출발하는 전세버스 안내</S.Title>
        <S.Message>대전에서 오시는 분들을 위한 버스가 준비되어 있습니다</S.Message>
        <S.Time>
          <S.Label>출발일시</S.Label>
          <S.Info>3월 25일 예식 당일 아침 9시 30분</S.Info>
        </S.Time>
        <S.Location>
          <S.Label>승차위치</S.Label>
          <S.Info>대전월드컵경기장 5주차장 근처<br />이마트24편의점 앞</S.Info>
        </S.Location>
        <S.MapImage />
        <S.Picture />
      </S.Popup>
    </S.PopupOverlay>
  );
}

BusFromDaejeonPopup.defaultProps = {};

BusFromDaejeonPopup.propTypes = {};

export default BusFromDaejeonPopup;
