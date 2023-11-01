import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

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

// 1. 입력값 50 당 한시간 멈춤
// 2. 1시간에 60 만큼 달려나간다
const startTimestamp = new Date(2023, 10, 1, 20, 27, 0);

function Main() {
  const [nowTimestamp, setNowTimestamp] = useState(new Date());
  
  const score = useMemo(() => Math.floor((nowTimestamp.getTime() - startTimestamp.getTime()) / (60 * 1000)), [nowTimestamp]);
  
  return (
    <S.Main id='main'>
        HI<br />
      {score}<br />
    </S.Main>
  );
}

Main.defaultProps = {};

Main.propTypes = {};

export default Main;
