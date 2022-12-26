import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ArrowLeftIcon from 'assets/common/arrow_prev.svg';
import ArrowRightIcon from 'assets/common/arrow_next.svg';
import CloseButtonIcon from 'assets/common/close_x.svg';
import { WEDDING_PHOTOS } from 'constants/const';
import { useSwipeable } from 'react-swipeable';

const S = {};
S.PhotoPopup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
`;
S.Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.7;
`;
S.PhotoFrame = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: 2;
`;
S.ArrowLeft = styled.div`
  position: absolute;
  background: url(${ArrowLeftIcon}) no-repeat center;
  background-size: contain;
  opacity: 0.6;
  left: 4px;
  width: 48px;
  height: 48px;
  z-index: 10;
`;
S.ArrowRight = styled.div`
  position: absolute;
  background: url(${ArrowRightIcon}) no-repeat center;
  background-size: contain;
  opacity: 0.6;
  right: 4px;
  width: 48px;
  height: 48px;
  z-index: 10;
`;
S.CloseButton = styled.div`
  position: absolute;
  background: url(${CloseButtonIcon}) no-repeat center;
  background-size: contain;
  opacity: 0.6;
  right: 20px;
  top: 20px;
  width: 48px;
  height: 48px;
  z-index: 10;
`;

function PhotoPopup({ selectedPhotoIndex, nextSelectedPhoto, prevSelectedPhoto, closePhotoPopup }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  
  useEffect(() => {
    if (selectedPhotoIndex < 0) {
      setSelectedPhoto(null);
      return;
    }

    const { image } = WEDDING_PHOTOS[selectedPhotoIndex];
    setSelectedPhoto(image);
  }, [selectedPhotoIndex]);
  
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextSelectedPhoto(),
    onSwipedRight: () => prevSelectedPhoto(),
    trackMouse: true
  });
  
  return (
    <>
      {selectedPhoto !== null && (
        <S.PhotoPopup {...swipeHandlers}>
          <S.Overlay/>
          <S.PhotoFrame src={selectedPhoto} />
          <S.ArrowLeft onClick={prevSelectedPhoto} />
          <S.ArrowRight onClick={nextSelectedPhoto} />
          <S.CloseButton onClick={closePhotoPopup} />
        </S.PhotoPopup>
      )}
    </>
  );
}

PhotoPopup.defaultProps = {};

PhotoPopup.propTypes = {};

export default PhotoPopup;
