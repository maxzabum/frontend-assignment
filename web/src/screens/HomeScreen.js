import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useHistory } from "react-router-dom";
import {
  HomeContainer,
  MainContainer,
  TextHeader,
  SearchContainer,
  ContentContainer,
  PaginationContainer,
  PageNumber,
  NotFoundText,
} from "./HomeScreenStyle";
import ContentComponent from "../components/ContentComponent/ContentComponent";
import SearchComponent from "../components/SearchComonent/SearchComponent";
export default function HomeScreen() {
  const history = useHistory();
  const query = new URLSearchParams(useLocation().search);
  const [number_page, set_number_page] = useState(0);
  const [search_keyword, set_search_keyword] = useState(
    query.get("keyword") ? query.get("keyword") : ""
  );
  const [trips_data, set_trips_data] = useState([]);

  useEffect(() => {
    //When typing in input field it will get data form api and get back to first page
    set_number_page(0);
    axios
      .get(`http://localhost:5000/trips?keyword=${search_keyword}`)
      .then((res) => {
        set_trips_data(res.data);
      });
  }, [search_keyword]);

  //When typing in input field it will generate keyword path in browser
  const setSearchWord = (word) => {
    history.push(`/trips?keyword=${word}`);
    set_search_keyword(word);
  };

  //Get data form api to show with ContentComponent and send setSearchWord function to props
  //Because When click tags it will set keyword
  const mapData = (number_page) => {
    const data = trips_data;
    const data_to_show = [];

    //First page start with data index 0.It can't multiply by number of data to show
    if (number_page === 0) {
      for (let i = number_page; i <= number_page + 1; i++) {
        if (data[i]) {
          data_to_show.push(
            <ContentComponent
              key={i}
              trip={data[i]}
              setSearchWord={setSearchWord}
            />
          );
        }
      }
    } else {
      for (let i = number_page * 2; i <= number_page * 2 + 1; i++) {
        if (data[i]) {
          data_to_show.push(
            <ContentComponent
              key={i}
              trip={data[i]}
              setSearchWord={setSearchWord}
            />
          );
        }
      }
    }
    return data_to_show;
  };
  return (
    <HomeContainer>
      <MainContainer>
        <TextHeader>เที่ยวไหนดี</TextHeader>
        <SearchContainer>
          <SearchComponent
            setSearchWord={setSearchWord}
            keyword={search_keyword}
          />
        </SearchContainer>
        <ContentContainer>
          {trips_data.length > 0 ? (
            mapData(number_page)
          ) : (
            <NotFoundText>ไม่พบข้อมูล</NotFoundText>
          )}
        </ContentContainer>
        <PaginationContainer>
          <PageNumber
            disabled={number_page < 1 ? true : false}
            onClick={() => set_number_page((number_page) => number_page - 1)}
          >
            {"<"}
          </PageNumber>
          <PageNumber
            disabled={
              number_page >= Math.ceil(trips_data.length / 2 - 1) ? true : false
            }
            onClick={() => {
              set_number_page((number_page) => number_page + 1);
            }}
          >
            {">"}
          </PageNumber>
        </PaginationContainer>
      </MainContainer>
    </HomeContainer>
  );
}
