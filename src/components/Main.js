import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSwipeable } from 'react-swipeable';
import Pages from 'components/Pages';
import Pagination from 'components/pages/Pagination';

const S = {};
S.Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100vh;
  max-width: 1840px;
  min-width: 240px;
  position: relative;
`;

const pageList = [
  { index: 1, category: '커버' },
  { index: 2, category: '인사말' },
  { index: 3, category: '장소와 시간' },
  { index: 4, category: '사진' },
  { index: 5, category: '혼주 연락처' },
];

function Main() {
  const [ pageNum, setPageNum ] = useState(1);
  const lastPageNum = 5;
  
  const { ref: documentRef } = useSwipeable({
    onSwipedUp: () => {
      if (pageNum < lastPageNum) {
        setPageNum(pageNum + 1);
      }
    },
    onSwipedDown: () => {
      if (pageNum > 1) {
        setPageNum(pageNum - 1);
      }
    },
    // preventDefaultTouchmoveEvent: true,
    // swipeDuration: 500,
    // preventScrollOnSwipe: true,
    trackMouse: true
  });
  
  useEffect(() => {
    console.log('@@@ pageNum : ', pageNum);
  }, [pageNum]);
  
  useEffect(() => {
    documentRef(document);
    console.log('@@ when mounted');
  
    return () => {
      console.log('@@ when destroy');
    };
  }, []);
  
  return (
    <S.Main id='main'>
      <Pages pageNum={pageNum} />
      <Pagination pageNum={pageNum} pages={pageList} />
    </S.Main>
  );
}

Main.defaultProps = {};

Main.propTypes = {};

export default Main;
