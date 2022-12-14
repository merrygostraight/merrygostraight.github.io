import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Pages from 'components/Pages';
import Pagination from 'components/pages/Pagination';
import { ToastContainer } from 'react-toastify';

const S = {};
S.Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100%;
  max-width: 1840px;
  min-width: 240px;
  position: relative;
  overflow: hidden;
`;

const pageList = [
  { index: 1, category: '커버' },
  { index: 2, category: '인사말' },
  { index: 3, category: '장소와 시간' },
  { index: 4, category: '사진' },
  { index: 5, category: '혼주 연락처' },
];

function Main() {
  const [ pageNum, setPageNum ] = useState(0);
  const [ isShowPagination, setShowPagination ] = useState(true);
  
  useEffect(() => {
    setPageNum(1);
  }, []);
  
  return (
    <S.Main id='main'>
      <Pages
        pageNum={pageNum}
        setPageNum={setPageNum}
        lastPageNum={pageList.length}
        showPagination={setShowPagination}
      />
      {isShowPagination &&
        <Pagination pageNum={pageNum} pages={pageList} setPageNum={setPageNum} />
      }
      <ToastContainer />
    </S.Main>
  );
}

Main.defaultProps = {};

Main.propTypes = {};

export default Main;
