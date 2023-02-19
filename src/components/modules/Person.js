import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const S = {};
S.Person = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
S.Name = styled.div`
  color: #111701;
  font-size: 0.7rem;
`;
S.Face = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #cccccc;
  background: url(${({ image }) => image}) no-repeat center;
  background-size: cover;
`;

function Person({ data, onClickPerson }) {
  const handleClickPerson = () => {
    if (onClickPerson) {
      onClickPerson(data);
    }
  };
  
  return (
    <S.Person onClick={handleClickPerson}>
      <S.Face image={data.image}></S.Face>
      <S.Name>{data.name}</S.Name>
    </S.Person>
  );
}

Person.defaultProps = {};

Person.propTypes = {};

export default Person;
