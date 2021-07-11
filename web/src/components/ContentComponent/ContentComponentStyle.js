import styled from "styled-components";
export const ContentContainer = styled.div`
  display: flex;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin: 15px 0;
`;
export const MainImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const MainImage = styled.img`
  margin-right: 25px;
  width: 180px;
  border-radius: 15px;
  height: min(30vh, 300px);
  //   height: 100%;
  object-fit: cover;
`;
export const MainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const TextTitle = styled.a`
  text-decoration: none;
  font-size: 18px;
  margin: 10px 0;
  font-weight: 600;
  color: #292929;
`;
export const TextDescription = styled.p`
  font-size: 14px;
  margin: 0;
  color: #7e7e7e;
`;
export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const TagTitle = styled.p`
  font-size: 12px;
  margin: 0;
  color: #7e7e7e;
`;
export const TagText = styled.p`
  margin: 0 2.5px;
  font-size: 12px;
  color: #7e7e7e;
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    color: #2d9bdb;
  }
`;
export const ReadMoreText = styled.a`
  text-decoration: underline;
  color: #2d9bdb;
`;
export const OtherImageContainer = styled.div`
  display: flex;
`;
export const OtherImage = styled.img`
  width: min(10vh, 80px);
  height: min(10vh, 80px);
  margin-right: 15px;
  border-radius: 15px;
  object-fit: cover;
`;
