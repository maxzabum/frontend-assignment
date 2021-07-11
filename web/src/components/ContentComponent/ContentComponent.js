import React, { Fragment } from "react";
import {
  ContentContainer,
  MainImageContainer,
  MainContentContainer,
  TextTitle,
  TextDescription,
  TagsContainer,
  TagTitle,
  TagText,
  OtherImageContainer,
  MainImage,
  OtherImage,
  ReadMoreText,
} from "./ContentComponentStyle";
function ContentComponent({ trip, setSearchWord, ...props }) {
  //Show Three image below tags. max 5 images
  const mapOtherImage = () => {
    const image_data = trip ? trip.photos : [];
    const mapImages = image_data.map((img, index) => {
      if (index !== 0 && index < 6) {
        return <OtherImage alt={"other-img"} src={img} key={index} />;
      }
      return null;
    });
    return mapImages;
  };

  //Render all tags in data
  const mapTags = () => {
    const tags_data = trip ? trip.tags : [];
    const data_length = trip ? trip.tags.length : [];
    const mapTags = tags_data.map((data, index) => {
      if (index === data_length - 1) {
        return (
          <Fragment key={index}>
            <TagText style={{ textDecoration: "none" }}>และ</TagText>
            <TagText
              onClick={() => setSearchWord(data)}
              style={{ margin: 0 }}
              rel="noreferrer"
            >
              {data}
            </TagText>
          </Fragment>
        );
      } else {
        return (
          <TagText
            onClick={() => setSearchWord(data)}
            key={index}
            rel="noreferrer"
          >
            {data}
          </TagText>
        );
      }
    });
    return mapTags;
  };
  return (
    <ContentContainer>
      <MainImageContainer>
        <MainImage alt={"main-img"} src={trip ? trip.photos[0] : ""} />
      </MainImageContainer>
      <MainContentContainer>
        <TextTitle rel="noreferrer" href={trip ? trip.url : ""} target="_blank">
          {trip ? trip.title : ""}
        </TextTitle>
        <TextDescription>
          {trip ? trip.description.slice(0, 200) : ""} ...{" "}
          <ReadMoreText
            rel="noreferrer"
            href={trip ? trip.url : ""}
            //It will open in new tab
            target="_blank"
          >
            {" "}
            อ่านต่อ
          </ReadMoreText>
        </TextDescription>
        <TagsContainer>
          <TagTitle>หมวด&nbsp;-</TagTitle>
          {mapTags()}
        </TagsContainer>

        <OtherImageContainer>{mapOtherImage()}</OtherImageContainer>
      </MainContentContainer>
    </ContentContainer>
  );
}

export default ContentComponent;
