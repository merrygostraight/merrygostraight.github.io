import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Person from 'components/modules/Person';
import { CopyToClipboard } from 'react-copy-to-clipboard/src';
import { toast } from 'react-toastify';
import 'assets/styles/toastify.css';

const S = {};
S.PopupOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.5);
  z-index: 1;
`;
S.Popup = styled.div`
  z-index: 10;
  width: 70vw;
  max-width: 400px;
  height: 20vh;
  max-height: 600px;
  background-color: #f0f0f0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 12px 6px 6px 6px;
  justify-content: center;
  align-items: center;
`;

function AccountPopup({ onClose }) {
  const handleClickCopyAccount = (e) => {
    e.stopPropagation();
    e.preventDefault();
    toast(<>계좌번호가 복사되었습니다!<br />원하는 곳에 가서 붙여넣기 하세요.</>, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  
  return (
    <S.PopupOverlay onClick={onClose}>
      <S.Popup>
        hi
      </S.Popup>
    </S.PopupOverlay>
  );
}

AccountPopup.defaultProps = {};

AccountPopup.propTypes = {};

export default AccountPopup;
