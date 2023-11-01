import React from 'react';
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

function Main() {
  
  return (
    <S.Main id='main'>
        HI
    </S.Main>
  );
}

Main.defaultProps = {};

Main.propTypes = {};

export default Main;
