import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SimpleMapImage from 'assets/info/map_simple.png';
import BlueBusIcon from 'assets/info/bus_blue.png'
import GreenBusIcon from 'assets/info/bus_green.png'
import TownBusIcon from 'assets/info/bus_yellow.png'
import Subway6Icon from 'assets/info/subway_line6.png'

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
  width: 80vw;
  max-width: 400px;
  background-color: #ffffff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 16px 12px 16px 12px;
  justify-content: center;
  align-items: center;
`;
S.Map = styled.div`
  width: 100%;
  height: 320px;
  background: url(${SimpleMapImage}) no-repeat center;
  background-size: contain;
`;
S.Body = styled.div`
  color: #1b1b1b;
  padding-bottom: 8px;
  padding-top: 4px;
`;
S.Title = styled.div`
  & {
    padding-top: 8px;
  }
  font-size: 0.8rem;
  line-height: 1rem;
  font-weight: 700;
`;
S.Content = styled.div`
  padding: 2px 0 0 10px;
  font-size: 0.8rem;
  line-height: 1rem;
`;
S.Subway6Icon = styled.div`
  background: url(${Subway6Icon}) no-repeat center;
  width: 0.9rem;
  height: 0.9rem;
  background-size: contain;
  position: absolute;
`;
S.BlueBusIcon = styled.div`
  background: url(${BlueBusIcon}) no-repeat center;
  width: 14px;
  height: 14px;
  background-size: contain;
  position: absolute;
`;
S.GreenBusIcon = styled.div`
  background: url(${GreenBusIcon}) no-repeat center;
  width: 14px;
  height: 14px;
  background-size: contain;
  position: absolute;
`;
S.TownBusIcon = styled.div`
  background: url(${TownBusIcon}) no-repeat center;
  width: 14px;
  height: 14px;
  background-size: contain;
  position: absolute;
`;

function PublicTransportPopup({ onClose }) {
  return (
    <S.PopupOverlay onClick={onClose}>
      <S.Popup>
        <S.Map image={SimpleMapImage} />
        <S.Body>
          <S.Title>?????????</S.Title>
          <S.Content><S.Subway6Icon />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6?????? ???????????? 2????????? ?????? 193m 3???</S.Content>
          <S.Title>??????</S.Title>
          <S.Content>
            ????????????.???????????? ?????? ?????????????????? ??????
            <br />
            <S.BlueBusIcon />&nbsp;&nbsp;&nbsp;&nbsp;101 111 121 130 141 144 148 173 273 110A 110B
            <br />
            <S.GreenBusIcon />&nbsp;&nbsp;&nbsp;&nbsp;1017 1111 1213 1222 1227 2222 3216 7211
            <br />
            <S.TownBusIcon />&nbsp;&nbsp;&nbsp;&nbsp;??????20 ??????21
          </S.Content>
          <S.Title>?????????</S.Title>
          <S.Content>?????????????????? '???????????????' ?????? '????????? ????????? 13' ??????</S.Content>
          <S.Title>??????</S.Title>
          <S.Content>2?????? ?????? ??????</S.Content>
          <S.Title>??????</S.Title>
          <S.Content>
            02-925-2310 ??????????????? ???????????? 1???
          </S.Content>
        </S.Body>
      </S.Popup>
    </S.PopupOverlay>
  );
}

PublicTransportPopup.defaultProps = {};

PublicTransportPopup.propTypes = {};

export default PublicTransportPopup;
