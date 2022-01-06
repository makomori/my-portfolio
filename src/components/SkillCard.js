import styled from "styled-components";

const Wrapper = styled.div`
  width: 320px;
  padding: 0 40px 40px;
  border-radius: 8px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.04);
`;

const Title = styled.div`
  font-size: 18px;
  margin-bottom: 24px;
`;

const Desc = styled.div`
  font-size: 14px;
  color: #707070;
`;

const Image = styled.img`
  object-fit: cover;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 240px;
  > * {
    display: block;
    width: 100%;
    height: 240px;
  }
`;

export default function SkillCard({ imageUrl, title, description }) {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image src={imageUrl} alt="スキル画像" />
      </ImageWrapper>
      <Title>{title}</Title>
      <Desc>{description}</Desc>
    </Wrapper>
  );
}
