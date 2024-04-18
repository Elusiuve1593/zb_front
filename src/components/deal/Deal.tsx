import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDeals } from "../../redux/deals/operations";
import { fetchDeal } from "../../redux/deals/selector";
import { AppDispatch } from "../../redux/store";
import {
  Box,
  Container,
  Header,
  SubContainer,
  Text,
  TextContainer
} from "./Deal.styled";

export const Deal = () => {
  const dispatch: AppDispatch = useDispatch();
  const deals = useSelector(fetchDeal);

  useEffect(() => {
    dispatch(fetchDeals());
  }, []);
  return (
    <Container>
      <Header>Open Deals</Header>
      <Box>
        {deals.map(
          (
            { daysLeft, price, sold, subscription, tiket, yield$, imageUrl },
            index
          ) => {
            return (
              <SubContainer imageUrl={imageUrl} key={index}>
                <TextContainer>
                  <Text>{subscription}</Text>
                  <Text>{price} Dhs</Text>
                  <Text>Tiket - {tiket} Dhs</Text>
                </TextContainer>

                <TextContainer>
                  <Text>Yeld {yield$} %</Text>
                  <Text>Days Left {daysLeft}</Text>
                </TextContainer>

                <TextContainer>
                  <Text> Sold {sold} %</Text>
                </TextContainer>
              </SubContainer>
            );
          }
        )}
      </Box>
    </Container>
  );
};
