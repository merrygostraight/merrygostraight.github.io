import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import photo00 from 'assets/gallary/wedding0.JPG'
import photo01 from 'assets/gallary/wedding1.jpeg'
import photo02 from 'assets/gallary/wedding2.jpeg'
import photo03 from 'assets/gallary/wedding3.jpeg'
import photo04 from 'assets/gallary/wedding4.jpeg'
import photo05 from 'assets/gallary/wedding5.jpeg'
import photo06 from 'assets/gallary/wedding6.jpeg'

const S = {};

S.Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #FFFFF0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  visibility: ${({ visible }) => visible ? 'visible' : 'hidden'};
  opacity: ${({ visible }) => visible ? 1 : 0};
  transition: visibility 0.5s linear 0.5s, opacity 0.5s linear 0.5s;
`;
S.Gallary = styled.div`
  padding-top: 1vh;
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
  transform: ${({ visible }) => visible ? 'translate(0,0)' : 'translate(16px,16px)'};
  transition:
    visibility 0.5s linear 0.5s,
    opacity 1.2s linear 0.5s,
    transform 0.3s linear ${({ index }) => 0.5+index*0.1}s;

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
  visibility: ${({ open }) => open ? 'visible' : 'hidden'};
`;
S.InstagramArea = styled.div`
  display: flex;
  gap: 48px;
  justify-content: center;

  visibility: ${({ visible }) => visible ? 'visible' : 'hidden'};
  opacity: ${({ visible }) => visible ? 1 : 0};
  transform: ${({ visible }) => visible ? 'translate(0,0)' : 'translate(0,20px)'};
  transition:
    visibility 0.5s linear 0.5s,
    opacity 1.2s linear 0.5s,
    transform 0.5s linear 1s;
`;
S.Human = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
S.HumanFace = styled.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: 1px solid #4d4d1a;
  margin-bottom: 16px;
`;
S.HumanName = styled.div`
  font-size: 0.7rem;
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

function PhotoAlbum({ pageNum }) {
  const visible = pageNum === 3;
  const [isPhotoPopupOpen, setIsPhotoPopupOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  
  const handleClickImage = (index) => {
    if (isPhotoPopupOpen) {
      setIsPhotoPopupOpen(false);
      return;
    }

    const { image } = photos[index];
    setSelectedPhoto(image);
    setIsPhotoPopupOpen(true);
  };
  
  const closePhotoPopup = () => setIsPhotoPopupOpen(false);

  return (
    <S.Wrapper visible={visible}>
      <S.Gallary>
        {photos.map(({ title, image }, index) => (
          <S.Photo
            visible={visible}
            key={title}
            image={image}
            index={index}
            onClick={() => handleClickImage(index)}
          />
        ))}
      </S.Gallary>
      <S.PhotoPopup open={isPhotoPopupOpen} image={selectedPhoto} onClick={closePhotoPopup}/>
      <S.InstagramArea visible={visible}>
        <S.Human>
          <S.HumanFace />
          <S.HumanName>승규 인스타그램</S.HumanName>
          <S.HumanName>구경가기</S.HumanName>
        </S.Human>
        <S.Human>
          <S.HumanFace />
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
