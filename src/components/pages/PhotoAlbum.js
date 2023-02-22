import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import JyInstaImg from 'assets/personal/jy_instagram.jpg'
import SgInstaImg from 'assets/personal/sg_instagram.jpg'
import { WEDDING_PHOTOS } from 'constants/const';
import PhotoPopup from 'components/modules/PhotoPopup';

const S = {};

S.Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #fffff4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  visibility: ${({ visible }) => visible ? 'visible' : 'hidden'};
  opacity: ${({ visible }) => visible ? 1 : 0};
  transition: visibility 0.5s linear 0.5s, opacity 0.5s linear 0.5s;
`;
S.IntoduceWrap = styled.div`
  margin-top: -60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;
S.Intoduce = styled.div`
  font-size: 0.9rem;
  & > span {
    font-size: 0.7rem;
  }
`;
S.Gallery = styled.div`
  display: grid;
  gap: 6px;
  width: 90vw;
  height: 90vw;
  max-width: 1440px;
  max-height: 1440px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  place-items: center center;
  place-content: center center;
`;
S.Photo = styled.div`
  width: 100%;
  height: 100%;
  background: url(${({ image }) => image }) no-repeat center;
  background-size: cover;

  visibility: ${({ visible }) => visible ? 'visible' : 'hidden'};
  opacity: ${({ visible }) => visible ? 1 : 0};
  transition:
    visibility 0.5s linear 0.5s,
    opacity 1.2s linear ${({ index }) => 0.5+index*0.1}s;
`;
// S.InstagramArea = styled.div`
//   display: flex;
//   gap: 48px;
//   justify-content: center;
//
//   visibility: ${({ visible }) => visible ? 'visible' : 'hidden'};
//   opacity: ${({ visible }) => visible ? 1 : 0};
//   transition:
//     visibility 0.5s linear 0.5s,
//     opacity 1.2s linear 1.5s;
// `;
// S.Human = styled.div`
//   margin-top: 12px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;
// S.HumanFace = styled.div`
//   border-radius: 50%;
//   width: 50px;
//   height: 50px;
//   margin-bottom: 16px;
//   background: url(${({ image }) => image}) no-repeat center;
//   background-size: cover;
// `;
// S.HumanName = styled.div`
//   font-size: 0.7rem;
// `;


function PhotoAlbum({ pageNum, showPagination, disableSwipe }) {
  const visible = pageNum === 3;
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(-1);
  
  const closePhotoPopup = () => {
    setSelectedPhotoIndex(-1);
    showPagination(true);
    disableSwipe(false);
  };
  
  const handleClickImage = (index) => {
    setSelectedPhotoIndex(index);
    showPagination(false);
    disableSwipe(true);
  };
  
  const nextSelectedPhoto = () => {
    if (selectedPhotoIndex === WEDDING_PHOTOS.length - 1) {
      setSelectedPhotoIndex(0);
    } else {
      setSelectedPhotoIndex((selectedPhotoIndex) => selectedPhotoIndex + 1);
    }
  };
  const prevSelectedPhoto = () => {
    if (selectedPhotoIndex === 0) {
      setSelectedPhotoIndex(WEDDING_PHOTOS.length - 1);
    } else {
      setSelectedPhotoIndex((selectedPhotoIndex) => selectedPhotoIndex - 1);
    }
  };
  
  return (
    <S.Wrapper visible={visible}>
      <S.IntoduceWrap>
        <S.Intoduce>김지룡 이경우 <span>의 아들</span> 승규</S.Intoduce>
        <S.Intoduce>마재언 백경숙 <span>의 딸</span> 주연</S.Intoduce>
      </S.IntoduceWrap>
      <S.Gallery>
        {WEDDING_PHOTOS.map(({ title, image }, index) => (
          <S.Photo
            visible={visible}
            key={title}
            image={image}
            index={index}
            onClick={() => handleClickImage(index)}
          />
        ))}
      </S.Gallery>
      <PhotoPopup
        selectedPhotoIndex={selectedPhotoIndex}
        nextSelectedPhoto={nextSelectedPhoto}
        prevSelectedPhoto={prevSelectedPhoto}
        closePhotoPopup={closePhotoPopup}
      />
      {/*<S.InstagramArea visible={visible}>*/}
      {/*  <S.Human onClick={() => window.open("https://www.instagram.com/seunggyu9592", "_blank")}>*/}
      {/*    <S.HumanFace image={SgInstaImg} />*/}
      {/*    <S.HumanName>승규 인스타그램</S.HumanName>*/}
      {/*    <S.HumanName>구경가기</S.HumanName>*/}
      {/*  </S.Human>*/}
      {/*  <S.Human onClick={() => window.open("https://www.instagram.com/ma_entropy", "_blank")}>*/}
      {/*    <S.HumanFace image={JyInstaImg} />*/}
      {/*    <S.HumanName>주연 인스타그램</S.HumanName>*/}
      {/*    <S.HumanName>구경가기</S.HumanName>*/}
      {/*  </S.Human>*/}
      {/*</S.InstagramArea>*/}
    </S.Wrapper>
  );
}

PhotoAlbum.defaultProps = {};

PhotoAlbum.propTypes = {};

export default PhotoAlbum;
