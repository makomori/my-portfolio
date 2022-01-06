import { Routes, Route, Link, Router } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Works from "./Works";
import Work from "./Work";
import Contact from "./Contact";
import Header from "./Heder";
import styled from "styled-components";
import { Reset } from "styled-reset";

const InnerWrapper = styled.div`
  border: 24px solid #d9d647;
`;

function App() {
  return (
    <>
      <Reset />
      <InnerWrapper>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/works/:workId" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </InnerWrapper>
    </>
  );
}

export default App;
