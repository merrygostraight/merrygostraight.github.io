import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BgImageGreeting from 'assets/backgrounds/contact_bg.jpeg';
import Person from 'components/modules/Person';
import { FAMILY_INFO } from 'constants/const';
import ContactPopup from 'components/modules/ContactPopup';
const S = {};

S.Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: url(${BgImageGreeting}) no-repeat center;
  background-size: cover;
  visibility: ${({ visible }) => visible ? 'visible' : 'hidden'};
  opacity: ${({ visible }) => visible ? 1 : 0};
  transition: visibility 0.5s linear 0.5s, opacity 0.5s linear 0.5s;
`;
S.Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #29340b;
  font-size: 1.2rem;
  visibility: ${({ visible }) => visible ? 'visible' : 'hidden'};
  opacity: ${({ visible }) => visible ? 1 : 0};
  transition: visibility 0.5s linear 0.5s, opacity 0.5s linear 1s;
  //padding-top: 2vh;
`;
S.Title = styled.div`
  color: #29340b;
  font-size: 1.2rem;
`;
S.FamillyArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 36px;
  margin-top: 36px;
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

function Contact({ pageNum, disableSwipe }) {
  const visible = pageNum === 5;
  const [openPopup, setOpenPopup] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState({});
  
  const handleClickPerson = (data) => {
    setSelectedPerson(data);
    disableSwipe(true);
    setOpenPopup(true);
  };
  
  const closePopup = () => {
    setOpenPopup(false);
    disableSwipe(false);
  };
  
  
  return (
    <S.Wrapper visible={visible}>
      <S.Content visible={visible}>
        <S.Title>연락처</S.Title>
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
      </S.Content>
      {openPopup && <ContactPopup selectedPerson={selectedPerson} onClose={closePopup} />}
    </S.Wrapper>
  );
}

Contact.defaultProps = {};

Contact.propTypes = {};

export default Contact;
