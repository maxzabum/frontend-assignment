import styled from "styled-components";
export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fc7c49;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const MainContainer = styled.div`
  width: max(60%, 700px);
  max-width: 700px;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffff;
  border-radius: 10px;
  padding: 20px;
`;
export const NotFoundText = styled.p`
  position: absolute;
  width: 100%;
  font-size: 18px;
  text-align: center;
  top: 0;
  color: #a31621;
`;
export const TextHeader = styled.h1`
  margin: 0;
  font-size: 48px;
  font-weight: 300;
  color: #2d9bdb;
`;
export const SearchContainer = styled.div`
  width: 100%;
`;
export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;

  flex-direction: column;
  justify-content: space-between;
`;
export const PaginationContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export const PageNumber = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin: 0;
  font-weight: 300;
  font-size: 24px;
  border-radius: 10px;
  background-color: #2d9bdb;
  color: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  transition: all 0.25s;
  &:hover {
    transition: all 0.25s;
    background-color: #fc7c49;
    cursor: pointer;
    color: #fff;
  }
  &:disabled {
    background-color: #ffff;
    color: #7e7e7e;
  }
`;
