import { Link } from "react-router-dom";
import styled from "styled-components";

export const BookCard = ({ id, imageUrl, title, price }) => {
  // Bookcard is a card looking component, that is also a 'Link' for react-router
  //  it's basically shows one books information.
  // You can style custom tags with styled components in following way:
  // styled(Link)`
  //   color: xyz;
  // `
  //  now this container is a link that is also a card.
  //  card will have following 'children':
  //  div with className 'bookCard'
  //  Image of the book
  //  title of the book. h2 with classname 'title'
  //  price of book with class 'price'
  //
  // rough example:
  // <YourStyledLink to={}>
  //    title, image price etc here
  // </YourStyledLink>
  return (
    <>
      <div>
        <Link to={`bookdetailspage/:${title}`}>
          <img src={imageUrl} alt="book details img" />
          <h4>{id}</h4>
          <h1>{title}</h1>
          <h4>{price}</h4>
        </Link>
      </div>
    </>
  )
};
