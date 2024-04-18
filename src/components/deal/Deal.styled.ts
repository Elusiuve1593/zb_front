import styled from "styled-components";

interface ImageProps {
  imageUrl: string;
}

export const Container = styled.div`
  flex-wrap: wrap;
  margin: 50px;
  font-size: 28px;
`;

export const Header = styled.div`
  margin-left: 11.5%;
  color: #b29f7e;
  padding: 5px;
`;

export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 10%;
`;

export const SubContainer = styled.div<ImageProps>`
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  display: flex;
  justify-content: space-around;
  align-items: end;
  margin: 20px;
  height: 230px;
  width: 450px;
`;

export const TextContainer = styled.div`
  padding: 20px;
`;

export const Text = styled.div`
  font-size: ${(props) => props.theme.fontSizes.l};
  color: red;
  padding: 5px;
  color: #fff;
`;
