import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "../../api/axios";

function StoreList() {
  const STORE_URL = `${process.env.REACT_APP_BASE_URL}/popups`;
  const LATEST_URL = `${process.env.REACT_APP_BASE_URL}/popups/latest`;
  const POPULAR_URL = `${process.env.REACT_APP_BASE_URL}/popups/sort/reviewCount`;
  const [popularData, setPopularData] = useState([]);
  const [latestData, setLatestData] = useState([]);
  const [storeData, setStoreData] = useState([]);

  useEffect(() => {
    axios
      .get(POPULAR_URL)
      .then((response) => {
        setPopularData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(LATEST_URL)
      .then((response) => {
        setLatestData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(STORE_URL)
      .then((response) => {
        setStoreData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const latestHandler = () => {
    setStoreData(latestData);
  };

  const popularHandler = () => {
    setStoreData(popularData);
  };

  const renderStoreItems = storeData.map((store, index) => (
    <StyledLink to={`/popups/search/${store._id}`} key={index}>
      <Card>
        <CardImage src={store.popup_imgs[0]} alt="" />
        <CardTitle>{store.corporation}</CardTitle>
        <CardSubtitle>{store.location}</CardSubtitle>
      </Card>
    </StyledLink>
  ));

  const dividedStoreItems = [];
  for (let i = 0; i < renderStoreItems.length; i += 3) {
    dividedStoreItems.push(renderStoreItems.slice(i, i + 3));
  }

  return (
    <Container>
      <Heading>POP-UP STORE</Heading>
      <ButtonRow>
        <Button onClick={latestHandler}>최신순</Button>
        <Button onClick={popularHandler}>인기순</Button>
      </ButtonRow>
      <Separator />
      {dividedStoreItems.map((group, index) => (
        <CardSection key={index}>{group}</CardSection>
      ))}
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Heading = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 1rem;
  white-space: nowrap;
  margin-left: -9rem;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
`;

const Separator = styled.hr`
  width: 100%;
  margin: 2rem 0;
  border: none;
  border-top: 1px solid #ccc;
`;

const CardSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;
  height: 550px;
  padding: 2rem;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  margin: 1rem;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 380px;
  object-fit: cover;
  margin-bottom: 1rem;
  border-radius: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: black;
`;

const CardSubtitle = styled.p`
  font-size: 1.2rem;
  color: #555;
`;

export default StoreList;
