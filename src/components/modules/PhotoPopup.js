import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
  margin-top: -96px;
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: 2;
`;

function PhotoPopup({ selectedPhoto, closePhotoPopup }) {
  return (
    <>
      {selectedPhoto !== null && (
        <S.PhotoPopup onClick={closePhotoPopup}>
          <S.Overlay />
          <S.PhotoFrame src={selectedPhoto} />
        </S.PhotoPopup>
      )}
    </>
  );
}

PhotoPopup.defaultProps = {};

PhotoPopup.propTypes = {};

export default PhotoPopup;
