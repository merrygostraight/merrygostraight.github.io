import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const S = {};
S.Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 4px;
  height: 100%;
  display: flex;
  overflow: hidden;
  justify-content: flex-end;
  align-items: center;
  visibility: ${({ visible }) => visible ? 'visible' : 'hidden'};
  opacity: ${({ visible }) => visible ? 1 : 0};
  transition: visibility 0.5s linear 0.3s, opacity 0.5s linear 0.3s;
`;
S.DotsGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 1.3rem;
  height: 240px;
  position: relative;
`;
S.Dots = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #aaaaaa;
  visibility: ${({ visible }) => visible ? 'visible' : 'hidden'};
  opacity: ${({ visible }) => visible ? 0.3 : 0};
  transition: visibility 0.3s linear 0.5s, opacity 0.3s linear 0.5s;
`;
S.DotHighLight = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  opacity: 0.3;
  background-color: #AD5B78;
  position: absolute;
  top: ${({ pageNum }) => 14+(pageNum-1)*48}px;
  transition: top 0.3s linear 0.5s, opacity 0.3s linear 0.5s;
`;

function Pagination({ pageNum, pages, setPageNum }) {
  return (
    <S.Wrapper visible={pageNum > 1}>
      <S.DotsGroup>
      {
        pages.map(({ index, category }) => (
          <S.Dots
            key={index}
            pageNum={index}
            title={category}
            visible={pageNum !== index}
            onClick={() => setPageNum(index)}
          />
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
