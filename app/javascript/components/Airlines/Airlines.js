import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Airline from "./Airline";
import styled from "styled-components";

const Home = styled.div`
  text-align: center;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;
const Header = styled.div`
  padding: 100px 100px 10px 100px;

  h1 {
    font-size: 42px;
  }
`;
const Subheader = styled.div`
  font-weight: 300;
  font-size: 26px;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
`;

const Airlines = () => {
  const [airlines, setAirlines] = useState([]);

  useEffect(() => {
    // Get all of our airlines from api
    // Update airlines in our state
    axios
      .get("/api/v1/airlines.json")
      .then((res) => {
        setAirlines(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [airlines.length]);

  const grid = airlines.map((item) => {
    return <Airline key={item.attributes.name} attributes={item.attributes} />;
  });

  return (
    <Home>
      <Header>
        <h1>OpenFlights</h1>
        <Subheader>Honest, unbiased airline review.</Subheader>
      </Header>
      <Grid>{grid}</Grid>
    </Home>
  );
};

export default Airlines;
