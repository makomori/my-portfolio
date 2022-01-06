import { Link } from "react-router-dom";
import styled from "styled-components";
import SkillCard from "./SkillCard";

const Wrapper = styled.div`
  padding: 0 12px;
`;

const Name = styled.div`
  color: #d9d647;
  font-size: 36px;
  font-family: Shadows into light;
  margin-top: 20px;
  text-align: center;
  margin-bottom: 80px;
`;

const Title = styled.p`
  text-decoration: underline;
  color: #707070;
  font-size: 36px;
  font-family: Shadows into light;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > * {
    margin-bottom: 12px;
  }
`;

export default function About() {
  return (
    <Wrapper>
      <Name>Satoshi Sanada</Name>
      <Title>Career</Title>
      <Title>Skill</Title>
      <CardContainer>
        <SkillCard
          imageUrl="/logo192.png"
          title="Ruby"
          description={
            "RoR のフレームワークを用いて株式会社ヒュープロのフルタイムエンジニアインターンや、株式会社 Prining Studio にて使用。クライアント側からバックエンド側、API作成、Rspecを用いたテストなども経験"
          }
        />
        <SkillCard
          imageUrl="/logo192.png"
          title="React"
          description={
            "RoR のフレームワークを用いて株式会社ヒュープロのフルタイムエンジニアインターンや、株式会社 Prining Studio にて使用。クライアント側からバックエンド側、API作成、Rspecを用いたテストなども経験"
          }
        />
        <SkillCard
          imageUrl="/logo192.png"
          title="React"
          description={
            "RoR のフレームワークを用いて株式会社ヒュープロのフルタイムエンジニアインターンや、株式会社 Prining Studio にて使用。クライアント側からバックエンド側、API作成、Rspecを用いたテストなども経験"
          }
        />
      </CardContainer>
    </Wrapper>
  );
}
