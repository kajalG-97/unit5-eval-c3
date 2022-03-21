import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { BookCard } from "../BookCard/BookCard";

import { SortAndFilterButtons } from "../SortAndFilterButtons/SortAndFilterButtons";

export const Home = () => {
  // get all books when user lands on the page
  // populate them as mentioned below
  const [dis, setDis] = useState([])
  useEffect(() => {
    axios.get("http://localhost:8080/books").then((response) => {
      console.log(response);
      setDis(response.data);
    })
  }, []);
  const Main = styled.div`
    /* Apply some responsive styling to children */
  `;

  return (
    <div className="homeContainer">
      <h2 style={{ textAlign: "center" }}>Home</h2>
      <SortAndFilterButtons
        handleSort={
          "give handleSort function to this component, that sorts books"
        }
      />

      <Main className="mainContainer">
        {/* 
            Iterate over books that you get from network
            populate a <BookCard /> component
            pass down books id, imageUrl, title, price and anything else that you want to 
            show in books Card.
        */}
        {dis.map((el) => {
          return <BookCard key={el.id} id={el.id} title={el.title} price={el.price} />
        })
        }

      </Main>
    </div>
  );
};
