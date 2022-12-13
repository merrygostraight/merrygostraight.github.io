import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import photo00 from 'assets/gallery/wedding0.JPG'
import photo01 from 'assets/gallery/wedding1.jpeg'
import photo02 from 'assets/gallery/wedding2.jpeg'
import photo03 from 'assets/gallery/wedding3.jpeg'
import photo04 from 'assets/gallery/wedding4.jpeg'
import photo05 from 'assets/gallery/wedding5.jpeg'
import photo06 from 'assets/gallery/wedding6.jpeg'
import JyInstaImg from 'assets/personal/jy_instagram.jpg'
import SgInstaImg from 'assets/personal/sg_instagram.jpg'

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

  &:nth-child(1) {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }
  &:nth-child(7) {
    grid-column: 2 / 4;
    grid-row: 3 / 4;
  }
`;
S.PhotoPopup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
`;
S.Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 0.7;
`;
S.PhotoFrame = styled.img`
  margin-top: -96px;
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: 2;
`;
S.InstagramArea = styled.div`
  display: flex;
  gap: 48px;
  justify-content: center;

  visibility: ${({ visible }) => visible ? 'visible' : 'hidden'};
  opacity: ${({ visible }) => visible ? 1 : 0};
  transition:
    visibility 0.5s linear 0.5s,
    opacity 1.2s linear 1.5s;
`;
S.Human = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
S.HumanFace = styled.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-bottom: 16px;
  background: url(${({ image }) => image}) no-repeat center;
  background-size: cover;
`;
S.HumanName = styled.div`
  font-size: 0.7rem;
`;
S.IntoduceWrap = styled.div`
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

const photos = [
  { title: 'photos0', image: photo00 },
  { title: 'photos1', image: photo01 },
  { title: 'photos2', image: photo02 },
  { title: 'photos3', image: photo03 },
  { title: 'photos4', image: photo04 },
  { title: 'photos5', image: photo05 },
  { title: 'photos6', image: photo06 },
];

function PhotoAlbum({ pageNum, showPagination, disableSwipe }) {
  const visible = pageNum === 3;
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  
  const closePhotoPopup = () => {
    setSelectedPhoto(null);
    showPagination(true);
    disableSwipe(false);
  };
  
  const handleClickImage = (index) => {
    if (selectedPhoto !== null) {
      closePhotoPopup();
      return;
    }

    const { image } = photos[index];
    setSelectedPhoto(image);
    showPagination(false);
    disableSwipe(true);
  };
  
  return (
    <S.Wrapper visible={visible}>
      <S.IntoduceWrap>
        <S.Intoduce>김지룡 이경우 <span>의 아들</span> 승규</S.Intoduce>
        <S.Intoduce>마재언 백경숙 <span>의 딸</span> 주연</S.Intoduce>
      </S.IntoduceWrap>
      <S.Gallery>
        {photos.map(({ title, image }, index) => (
          <S.Photo
            visible={visible}
            key={title}
            image={image}
            index={index}
            onClick={() => handleClickImage(index)}
          />
        ))}
      </S.Gallery>
      {selectedPhoto !== null && (
        <S.PhotoPopup onClick={closePhotoPopup}>
          <S.Overlay />
          <S.PhotoFrame src={selectedPhoto} />
        </S.PhotoPopup>
      )}
      <S.InstagramArea visible={visible}>
        <S.Human onClick={() => window.open("https://www.instagram.com/seunggyu9592", "_blank")}>
          <S.HumanFace image={SgInstaImg} />
          <S.HumanName>승규 인스타그램</S.HumanName>
          <S.HumanName>구경가기</S.HumanName>
        </S.Human>
        <S.Human onClick={() => window.open("https://www.instagram.com/ma_entropy", "_blank")}>
          <S.HumanFace image={JyInstaImg} />
          <S.HumanName>주연 인스타그램</S.HumanName>
          <S.HumanName>구경가기</S.HumanName>
        </S.Human>
      </S.InstagramArea>
    </S.Wrapper>
  );
}

PhotoAlbum.defaultProps = {};

PhotoAlbum.propTypes = {};

export default PhotoAlbum;
