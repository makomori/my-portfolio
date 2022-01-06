import { Link } from "react-router-dom";
import styled from "styled-components";

const Name = styled.p`
  font-family: Shadows into light;
  font-size: 70px;
`;

const Description = styled.p`
  font-size: 16px;
  position: absolute;
  bottom: 300px;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column nowrap;
  align-items: center;
  height: 80vh;
`;

export default function Home() {
  return (
    <Wrapper>
      <Name>Satoshi Sanada</Name>
      <Description>
        I am a Web Developer based in Tokyo.
        <br />
        Born in Tokyo.I was in Yokohama
        <br />
        National University.Engineer. Engineerring, Art, Design, Planning,
        Development
      </Description>
    </Wrapper>
  );
}
