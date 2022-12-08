import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Person from 'components/modules/Person';

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
  z-index: 100;
`;
S.Popup = styled.div`
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
S.ContactInfoArea = styled.div`
  color: #29340b;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  font-size: 0.8rem;
`;
S.CopyButton = styled.div`
  border: 1px dashed #29340b;
  padding: 3px 4px;
  border-radius: 4px;
`;
S.Tel = styled.div`
`;
S.Call = styled.div`
  border: 1px dashed #29340b;
  padding: 3px 4px;
  border-radius: 4px;
`;

function ContactPopup({ selectedPerson, onClose }) {
  return (
    <S.PopupOverlay onClick={onClose}>
      <S.Popup>
        <Person data={selectedPerson} />
        <S.ContactInfoArea>
          <S.CopyButton onClick={() => {}}>복사하기</S.CopyButton>
          <S.Tel>{selectedPerson.tel}</S.Tel>
          <S.Call onClick={() => {}}>전화하기</S.Call>
        </S.ContactInfoArea>
      </S.Popup>
    </S.PopupOverlay>
  );
}

ContactPopup.defaultProps = {};

ContactPopup.propTypes = {};

export default ContactPopup;
