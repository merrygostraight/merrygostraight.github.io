import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BgImageGreeting from 'assets/backgrounds/contact_bg.jpeg';
import Person from 'components/modules/Person';
import { FAMILY_INFO } from 'constants/const';
import ContactPopup from 'components/modules/ContactPopup';
import AccountPopup from 'components/modules/AccountPopup';
const S = {};

S.Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  gap: 60px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #111701;
  background: url(${BgImageGreeting}) no-repeat center;
  background-size: cover;
  visibility: ${({ visible }) => visible ? 'visible' : 'hidden'};
  opacity: ${({ visible }) => visible ? 1 : 0};
  transition: visibility 0.5s linear 0.5s, opacity 0.5s linear 0.5s;
`;
S.ContactCall = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  visibility: ${({ visible }) => visible ? 'visible' : 'hidden'};
  opacity: ${({ visible }) => visible ? 1 : 0};
  transition: visibility 0.5s linear 0.5s, opacity 0.5s linear 1s;
  //padding-top: 2vh;
`;
S.Title = styled.div`
  font-size: 1.2rem;
`;
S.FamillyArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 36px;
  margin-top: 24px;
`;
S.Family = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
S.Parent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
S.ContactAccount = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  visibility: ${({ visible }) => visible ? 'visible' : 'hidden'};
  opacity: ${({ visible }) => visible ? 1 : 0};
  transition: visibility 0.5s linear 0.5s, opacity 0.5s linear 1s;
`;
S.MessageArea = styled.div`
  margin: 20px 0;
  font-size: 0.8rem;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
S.AccountButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;
S.AccountButton = styled.div`
  border: 1px dashed #111701;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.9rem;
  line-height: 1.5;
`;

function Contact({ pageNum, disableSwipe }) {
  const visible = pageNum === 5;
  const [openTelPopup, setOpenTelPopup] = useState(false);
  const [openAccountPopup, setOpenAccountPopup] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState({});
  
  const handleClickPerson = (data) => {
    setSelectedPerson(data);
    disableSwipe(true);
    setOpenTelPopup(true);
  };
  
  const closeTelPopup = () => {
    setOpenTelPopup(false);
    disableSwipe(false);
    setSelectedPerson({});
  };
  
  const handleClickAccount = (category) => {
    disableSwipe(true);
    setOpenAccountPopup(category);
  };
  
  const closeAccountPopup = () => {
    setOpenAccountPopup(false);
    disableSwipe(false);
  };
  
  return (
    <S.Wrapper visible={visible}>
      <S.ContactCall visible={visible}>
        <S.Title>연락하기</S.Title>
        <S.FamillyArea>
          <S.Family>
            <Person data={FAMILY_INFO.SG} onClickPerson={handleClickPerson} />
            <S.Parent>
            <Person data={FAMILY_INFO.SG_FATHER} onClickPerson={handleClickPerson} />
            <Person data={FAMILY_INFO.SG_MOTHER} onClickPerson={handleClickPerson} />
            </S.Parent>
          </S.Family>
          <S.Family>
            <Person data={FAMILY_INFO.JY} onClickPerson={handleClickPerson} />
            <S.Parent>
            <Person data={FAMILY_INFO.JY_FATHER} onClickPerson={handleClickPerson} />
            <Person data={FAMILY_INFO.JY_MOTHER} onClickPerson={handleClickPerson} />
            </S.Parent>
          </S.Family>
        </S.FamillyArea>
      </S.ContactCall>
      <S.ContactAccount visible={visible}>
        <S.Title>마음 전하실 곳</S.Title>
        <S.MessageArea>
          <div>아직 끝나지 않은 코로나 상황 등</div>
          <div>피치 못할 사정으로 참석이 어려워</div>
          <div>마음이라도 전하고 싶으신 분들을 위해</div>
          <div>이곳에 계좌번호를 기재합니다</div>
        </S.MessageArea>
        <S.AccountButtonGroup>
          <S.AccountButton onClick={() => handleClickAccount(1)}>신랑측 계좌번호 보기</S.AccountButton>
          <S.AccountButton onClick={() => handleClickAccount(2)}>신부측 계좌번호 보기</S.AccountButton>
        </S.AccountButtonGroup>
      </S.ContactAccount>
      {openTelPopup && <ContactPopup selectedPerson={selectedPerson} onClose={closeTelPopup} />}
      {openAccountPopup && <AccountPopup category={openAccountPopup} onClose={closeAccountPopup} />}
    </S.Wrapper>
  );
}

Contact.defaultProps = {};

Contact.propTypes = {};

export default Contact;
