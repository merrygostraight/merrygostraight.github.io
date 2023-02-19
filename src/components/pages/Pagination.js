import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const S = {};
S.Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  display: flex;
  overflow: hidden;
  justify-content: flex-end;
  align-items: center;
  visibility: ${({ visible }) => visible ? 'visible' : 'hidden'};
  opacity: ${({ visible }) => visible ? 1 : 0};
  transition: visibility 0.5s linear 0.5s, opacity 0.5s linear 1.5s;
`;
S.DotsGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  width: 32px;
  height: 240px;
  position: relative;
  font-size: 12px;
  line-height: 26px;
  color: rgba(41, 52, 11, 0.6);
`;
S.Dots = styled.div`
  //width: ${({ selected }) => selected ? '28px' : '24px'};
  width: 28px;
  height: 28px;
  line-height: 30px;
  border-radius: 4px;
  font-size: 14px;
  color: #111701;
  background-color: ${({ selected }) => selected ? 'rgba(173,91,120,0.2)' : 'rgba(170,170,170,0.2)'};
  padding-left: ${({ selected }) => selected ? '4px' : '0'};
  transition: width 0.3s linear 0.3s, background-color 0.3s linear 0.3s, padding-left 0.3s linear 0.3s;
`;

function Pagination({ pageNum, pages, setPageNum }) {
  return (
    <S.Wrapper visible={pageNum > 1}>
      <S.DotsGroup visible={pageNum > 1}>
      {
        pages.map(({ index, category }) => (
          <S.Dots
            key={index}
            pageNum={index}
            title={category}
            selected={pageNum === index}
            onClick={() => setPageNum(index)}
          >{category}</S.Dots>
        ))
      }
      </S.DotsGroup>
    </S.Wrapper>
  );
}

Pagination.defaultProps = {};

Pagination.propTypes = {};

export default Pagination;
