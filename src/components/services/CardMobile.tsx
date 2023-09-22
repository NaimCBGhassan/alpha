import styled from "styled-components";
import WorldIcon from "../../assets/WorldIcon";
import fontSize from "../../utils/font/font";

interface Props {
  text: {
    title: string;
    content: string;
  };
}

const CardMobile = ({ text }: Props) => {
  return (
    <StyledCard>
      <TitleContainer>
        <WorldIcon />
        <h4>{text.title}</h4>
      </TitleContainer>
      <p>{text.content}</p>
    </StyledCard>
  );
};

export default CardMobile;

const StyledCard = styled.article`
  height: 45vh;
  width: 33.333%;
  margin: 0 1.5vw;
  color: ${({ theme }) => theme.palette.primary.contrastText};
  background-color: ${({ theme }) => theme.palette.primary.main};

  border-radius: 0.5rem;
  padding: 1.5rem 1.5rem;
  transition: transform 0.5s linear;

  p {
    font-size: ${fontSize.mobile.p1};
    line-height: 5vw;
    font-weight: bold;
  }
`;

const TitleContainer = styled.header`
  min-height: 100px;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  h4 {
    font-size: ${fontSize.mobile.h4};
    line-height: 6.5vw;
    width: 70%;
  }

  svg {
    fill: ${({ theme }) => theme.palette.primary.contrastText};
  }
`;
