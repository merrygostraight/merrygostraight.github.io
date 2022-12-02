import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BgImageGreeting from 'assets/backgrounds/contact_bg.jpeg';
import JyDaddyFace from 'assets/personal/jy_daddy.jpg';
import JyMomFace from 'assets/personal/jy_mom.jpg';
import JyFace from 'assets/personal/jy.jpeg';
import SgFace from 'assets/personal/sg.jpeg';
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
S.People = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
S.Name = styled.div`
  color: #29340b;
  font-size: 0.7rem;
`;
S.Face = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #aaaaaa;
  background: url(${({ image }) => image}) no-repeat center;
  background-size: cover;
  
`;

function Contact({ pageNum }) {
  const visible = pageNum === 5;
  
  return (
    <S.Wrapper visible={visible}>
      <S.Content visible={visible}>
        <S.Title>연락처</S.Title>
        <S.FamillyArea>
          <S.Family>
            <S.People>
              <S.Face image={SgFace}></S.Face>
              <S.Name>신랑 김승규</S.Name>
            </S.People>
            <S.Parent>
              <S.People>
                <S.Face></S.Face>
                <S.Name>아버지 김지룡</S.Name>
              </S.People>
              <S.People>
                <S.Face></S.Face>
                <S.Name>어머니 이경우</S.Name>
              </S.People>
            </S.Parent>
          </S.Family>
          <S.Family>
            <S.People>
              <S.Face image={JyFace}></S.Face>
              <S.Name>신부 마주연</S.Name>
            </S.People>
            <S.Parent>
              <S.People>
                <S.Face image={JyDaddyFace}></S.Face>
                <S.Name>아버지 마재언</S.Name>
              </S.People>
              <S.People>
                <S.Face image={JyMomFace}></S.Face>
                <S.Name>어머니 백경숙</S.Name>
              </S.People>
            </S.Parent>
          </S.Family>
        </S.FamillyArea>
      </S.Content>
    </S.Wrapper>
  );
}

Contact.defaultProps = {};

Contact.propTypes = {};

export default Contact;
