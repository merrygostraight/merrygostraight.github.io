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
  display: flex;
  justify-content: flex-end;
  align-items: center;
  visibility: ${({ visible }) => visible ? 'visible' : 'hidden'};
  opacity: ${({ visible }) => visible ? 1 : 0};
  transition: visibility 0.7s linear 0.5s, opacity 0.7s linear 0.5s;
`;
S.DotsGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 4vh;
  height: 20vh;
  position: relative;
`;
S.Dots = styled.div`
  width: 1.2vh;
  height: 1.2vh;
  border-radius: 50%;
  background-color: #aaaaaa;
  visibility: ${({ visible }) => visible ? 'visible' : 'hidden'};
  opacity: ${({ visible }) => visible ? 0.3 : 0};
  transition: visibility 0.5s linear 0.8s, opacity 0.5s linear 0.8s;
`;
S.DotHighLight = styled.div`
  width: 2vh;
  height: 2vh;
  border-radius: 50%;
  opacity: 0.3;
  background-color: #AD5B78;
  position: absolute;
  top: ${({ pageNum }) => 1+(pageNum-1)*4}vh;
  transition: top 0.4s linear 0.7s, opacity 0.4s linear 0.7s;
`;

function Pagination({ pageNum, pages }) {
  return (
    <S.Wrapper visible={pageNum !== 1}>
      <S.DotsGroup>
      {
        pages.map(({ index, category }) => (
          <S.Dots key={index} pageNum={index} title={category} visible={pageNum !== index} />
        ))
      }
      <S.DotHighLight pageNum={pageNum} />
      </S.DotsGroup>
    </S.Wrapper>
  );
}

Pagination.defaultProps = {};

Pagination.propTypes = {};

export default Pagination;
