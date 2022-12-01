import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
function PhotoAlbum({ pageNum }) {
  const visible = pageNum === 3;
  return (
    <S.Wrapper visible={visible}></S.Wrapper>
  );
}

PhotoAlbum.defaultProps = {};

PhotoAlbum.propTypes = {};

export default PhotoAlbum;
