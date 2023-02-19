import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Person from 'components/modules/Person';
import { CopyToClipboard } from 'react-copy-to-clipboard/src';
import { toast } from 'react-toastify';
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
  width: 296px;
  background-color: #f0f0f0;
  border-radius: 8px;
  margin-top: -96px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 16px 6px;
  justify-content: center;
  align-items: center;
`;
S.ContactInfoArea = styled.div`
  color: #111701;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  font-size: 0.8rem;
`;
S.CopyButton = styled.div`
  border: 1px dashed #111701;
  padding: 3px 4px;
  border-radius: 4px;
`;
S.Tel = styled.div`
`;
S.Call = styled.div`
  border: 1px dashed #111701;
  padding: 3px 4px;
  border-radius: 4px;
`;

function ContactPopup({ selectedPerson, onClose }) {
  const handleClickCopyTel = (e) => {
    e.stopPropagation();
    e.preventDefault();
    toast(<>전화번호가 복사되었습니다!<br />원하는 곳에 가서 붙여넣기 하세요.</>, {
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
  
  const handleClickCall = (e) => {
    e.stopPropagation();
    e.preventDefault();
    document.location.href=`tel:${selectedPerson.tel}`
  };
  
  const eventPreventDefault = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <S.PopupOverlay onClick={onClose}>
      <S.Popup>
        <Person data={selectedPerson} />
        <S.ContactInfoArea>
          <CopyToClipboard text={selectedPerson.tel}>
            <S.CopyButton onClick={handleClickCopyTel}>복사하기</S.CopyButton>
          </CopyToClipboard>
          <S.Tel onClick={eventPreventDefault}>{selectedPerson.tel}</S.Tel>
          <S.Call onClick={handleClickCall}>전화하기</S.Call>
        </S.ContactInfoArea>
      </S.Popup>
    </S.PopupOverlay>
  );
}

ContactPopup.defaultProps = {};

ContactPopup.propTypes = {};

export default ContactPopup;
