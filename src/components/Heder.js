import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px;
  > * {
    font-family: Shadows Into Light;
    font-size: 36px;
    color: #707070;
    transform: rotate(30deg);
  }
`;

export default function Header() {
  return (
    <Wrapper>
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
      <Link to="/work">work</Link>
      <Link to="/contact">contact</Link>
    </Wrapper>
  );
}
