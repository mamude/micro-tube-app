import styled from 'styled-components';

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  padding: 15px;
`;

const HeaderLogo = styled.img`
  height: 50px;
  width: 170px;
  margin-top: 9px;
  margin-left: -30px;
  object-fit: none;
`

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderSearchForm = styled.form`
  border: 1px solid #ddd;
  height: 35px;
  margin: 0;
  padding: 0;
  display: flex;
`;

const HeaderSearchInput = styled.input`
  width: 500px;
  padding: 10px;
  margin: 0;
  border-radius: 0;
  border: none;
  height: 100%;
`;

const HeaderSearchButton = styled.button`
  padding: 0;
  margin: 0;
  height: 100%;
  border: none;
  border-radius: 0;
`;

const HeaderIcon = styled.i`
  padding: 0 7px;
  cursor: pointer;
`;

const HeaderRight = styled.div`
  display:block;
`;

export { HeaderTop, HeaderLogo, HeaderLeft, HeaderRight, HeaderSearchForm, HeaderSearchInput, HeaderSearchButton, HeaderIcon };