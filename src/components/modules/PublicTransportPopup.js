import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import 'assets/styles/toastify.css';

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
  width: 70vw;
  max-width: 400px;
  height: 20vh;
  max-height: 600px;
  background-color: #f0f0f0;
  border-radius: 8px;
  margin-top: -96px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 12px 6px 6px 6px;
  justify-content: center;
  align-items: center;
`;

function PublicTransportPopup({ selectedPerson, onClose }) {
  return (
    <S.PopupOverlay onClick={onClose}>
      <S.Popup>
      </S.Popup>
    </S.PopupOverlay>
  );
}

PublicTransportPopup.defaultProps = {};

PublicTransportPopup.propTypes = {};

export default PublicTransportPopup;
