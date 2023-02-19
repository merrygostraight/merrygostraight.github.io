import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard/src';
import { toast } from 'react-toastify';
import 'assets/styles/toastify.css';
import { ACCOUNT_LIST_1, ACCOUNT_LIST_2 } from 'constants/const';

const S = {};
S.PopupOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.5);
  z-index: 1;
`;
S.Popup = styled.div`
  z-index: 10;
  width: 284px;
  background-color: #ffffff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: -96px;
  padding: 12px 18px;
  justify-content: center;
  align-items: center;
`;
S.Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #232d06;
  gap: 12px;
`;
S.AccountArea = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  background-color: #fff7e3;
  padding: 4px 6px;
`;
S.AccountInfoArea = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 4px;
  font-size: 0.8rem;
  gap: 10px;
  padding: 4px 6px;
`;
S.Name = styled.div``;
S.Account = styled.div``;
S.Divider = styled.div``;
S.AccountCopyButton = styled.div`
  border: 1px dashed #111701;
  background-color: #ffffff;
  padding: 2px 4px;
  border-radius: 4px;
  font-size: 0.8rem;
  line-height: 1.5;
`;

function AccountPopup({ onClose, category }) {
  const handleClickCopyAccount = (e) => {
    e.stopPropagation();
    e.preventDefault();
    toast(<>계좌번호가 복사되었습니다!<br />원하는 곳에 가서 붙여넣기 하세요.</>, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  
  const eventPreventDefault = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };
  
  const ACCOUNT_LIST = category === 1 ? ACCOUNT_LIST_1 : ACCOUNT_LIST_2;
  
  return (
    <S.PopupOverlay onClick={onClose}>
      <S.Popup>
        <S.Content>
          {ACCOUNT_LIST.map(({name, account}) => (
            <S.AccountArea key={name}>
              <S.AccountInfoArea onClick={eventPreventDefault}>
                <S.Name>{name}</S.Name>
                <S.Divider>︎∙</S.Divider>
                <S.Account>{account}</S.Account>
              </S.AccountInfoArea>
              <CopyToClipboard text={account}>
                <S.AccountCopyButton onClick={handleClickCopyAccount}>복사하기</S.AccountCopyButton>
              </CopyToClipboard>
            </S.AccountArea>
          ))}
        </S.Content>
      </S.Popup>
    </S.PopupOverlay>
  );
}

AccountPopup.defaultProps = {};

AccountPopup.propTypes = {};

export default AccountPopup;
