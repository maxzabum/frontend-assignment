import styled from "styled-components";
export const SearchContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: white;
`;
export const SearchInput = styled.input`
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  width: 90%;
  border: none;
  outline: none;
  letter-spacing: 0.05rem;
  border-bottom: 0.13rem solid #c5c5c5;
  transition: all 0.2s ease-out;
  &::placeholder {
    color: #c5c5c5;
  }
  &:focus {
    border-color: #2d9bdb;
  }
`;
